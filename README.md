# Django + React Project

A web application with a Django backend and a React + TypeScript frontend. Django provides the API, and React provides the user interface.

## Project structure

```text
myproject/
├── .gitignore
├── README.md
├── backend/
│   ├── .venv/
│   ├── manage.py
│   ├── config/
│   ├── apps/
│   │   └── core/
│   └── requirements.txt
└── frontend/
    ├── package.json
    ├── src/
    ├── public/
    └── vite.config.ts
```

The `.venv/` and `node_modules/` directories are created locally and are not committed to Git.

## Prerequisites

Install the following tools:

- Python 3 and pip
- Node.js and npm
- Git

Verify your installation:

```bash
python --version
python -m pip --version
node --version
npm --version
git --version
```

## 1. Get the project

Open a terminal in the project directory.

If cloning the repository for the first time:

```bash
git clone https://github.com/xcell96/proiect-tw
cd proiect-tw
```

## 2. Backend (Django)

From the project root:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
```

The virtual environment isolates this project's Python packages from other projects.

If `requirements.txt` does not exist, contact the team members.

### Prepare the database

```bash
python manage.py migrate
```

This creates or updates the database tables. The default Django configuration uses SQLite.

### Start the backend

```bash
python manage.py runserver
```

The backend is available at:

- Django: http://127.0.0.1:8000/
- Health endpoint: http://127.0.0.1:8000/api/health/

Keep this terminal open. Press `Ctrl+C` to stop the server.

## 3. Frontend (React)

Open a second terminal in the project root. Leave Django running.

```bash
cd frontend
npm install
npm run dev
```

Open the URL printed by Vite: http://localhost:5173/

Keep this terminal open as well. Press `Ctrl+C` to stop the frontend server.

## 4. Run the project day to day

After the initial setup, use two terminals.

### Terminal 1 — Django

```bash
cd backend
source .venv/bin/activate
python manage.py runserver
```

### Terminal 2 — React

```bash
cd frontend
npm run dev
```

Visit http://localhost:5173/ in your browser.

Whenever you open a new terminal for Django, activate the virtual environment again.

## 5. Useful Django commands

Run these commands from `backend/` with the virtual environment activated.

Create a new app:

```bash
python manage.py startapp app_name
```

After changing a model, create and apply migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

Create an administrator account:

```bash
python manage.py createsuperuser
```

Visit http://127.0.0.1:8000/admin/ to access the admin interface.

Run backend tests:

```bash
python manage.py test
```

## 6. Frontend and backend communication

React runs on port `5173`, while Django runs on port `8000`. Since these are different origins, Django's CORS configuration must allow the frontend's development origin.

For local development, configure Django to allow:

```text
http://localhost:5173
```

The example frontend request uses:

```text
http://127.0.0.1:8000/api/health/
```

If you change the ports or API URL, update the frontend request and Django's relevant settings.

CORS is not authentication or authorization. Production deployments require their own carefully configured origins and security settings.

## Troubleshooting

### Python or pip is not found

Check whether Python 3 is installed. On some Linux systems, use `python3` instead of `python`.

### Django reports a missing package

Make sure you are in `backend/` and activate the virtual environment:

```bash
source .venv/bin/activate
python -m pip install -r requirements.txt
```

### npm is not found

Install Node.js and npm, then check their versions.

### The frontend cannot reach Django

Confirm that both servers are running. Open the health endpoint directly in your browser:

http://127.0.0.1:8000/api/health/

If the endpoint works but the browser reports a CORS error, check `CORS_ALLOWED_ORIGINS` in Django's settings.

### A port is already in use

Stop the process using that port or select another port. Update the frontend API URL and CORS settings if necessary.

### Database changes are not appearing

After changing a model, run:

```bash
python manage.py makemigrations
python manage.py migrate
```

## Security notes

- Never commit `.env` files, passwords, API keys, or other secrets.
- Do not use Django's development server in production.
- Before deployment, configure `DEBUG = False`, `ALLOWED_HOSTS`, HTTPS, trusted origins, static files, and production secrets.
- Choose and configure a production database deliberately.
