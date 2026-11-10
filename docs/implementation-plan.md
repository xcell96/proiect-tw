# PasCuPas - Plan de implementare

## 1. Scopul documentului

Acest document stabilește direcția tehnică și organizatorică pentru  
implementarea aplicației web **PasCuPas**. Sunt prezentate tehnologiile  
alese și justificarea lor, strategia de versionare, etapele de  
dezvoltare, prioritizarea activităților și repartizarea  
responsabilităților.

## 2. Justificarea tehnologiilor

Aplicația va utiliza o arhitectură client--server, în care frontendul  
comunică cu backendul printr-un API REST. Backendul validează cererile,  
aplică regulile aplicației și gestionează accesul la baza de date.

### 2.1. Frontend: React și TypeScript

**React** va fi utilizat pentru construirea interfeței web pe bază de  
componente reutilizabile. Această abordare permite separarea elementelor  
interfeței și facilitează dezvoltarea și întreținerea lor.

**TypeScript** adaugă tipizare statică peste JavaScript. Tipurile pentru  
utilizatori, obiceiuri, înregistrări de activitate și răspunsuri API  
ajută la identificarea unor erori în timpul dezvoltării și fac codul mai  
ușor de înțeles și modificat.

Frontendul va fi responsabil de:
- afișarea paginilor și componentelor aplicației 
- colectarea datelor introduse de utilizator
- trimiterea cererilor către API
- afișarea progresului și a răspunsurilor primite de la backend
- adaptarea interfeței la ecrane de telefon, tabletă și calculator
### 2.2. Backend: Django și Django REST Framework

**Django** va gestiona logica aplicației, modelele de date, autentificarea și operațiile asupra bazei de date. Include un ORM care permite definirea modelelor în Python și gestionarea modificărilor bazei de date.

**Django REST Framework (DRF)** va fi utilizat pentru construirea API-ului REST prin care frontendul comunică cu backendul. Acesta oferă mecanisme pentru serializarea datelor, validarea cererilor, autentificare și permisiuni.

Backendul va fi responsabil de:
- înregistrarea și autentificarea utilizatorilor
- salvarea răspunsurilor la chestionarul inițial
- configurarea și gestionarea obiceiurilor
- înregistrarea activităților finalizate
- calcularea progresului și a seriilor consecutive
- acordarea și cheltuirea monedelor virtuale
- gestionarea prieteniilor și a încurajărilor

### 2.3. Baza de date: MySQL

Se alege **MySQL**, deoarece datele principale ale aplicației au relații clare între ele. Un utilizator poate avea mai multe obiceiuri și înregistrări de activitate, poate deține un portofel virtual și poate avea relații de prietenie cu alți utilizatori.

Tranzacțiile bazei de date sunt importante pentru operații precum cumpărarea unui _streak freeze_: scăderea monedelor și înregistrarea achiziției trebuie să fie tratate ca o singură operație logică.

### 2.4. Alte instrumente
- Versionare: git
- Colaborare în echipă: GitHub, Discord, WhatsApp
- Testare backend: pytest, Django Test Framework
- Testare frontend: Vitest, React Testing Library
- Testare API: Postman, Insomnia
- Migrații: Django Migrations

## 3. Strategia de versionare și colaborare

Codul sursă va fi gestionat într-un repository Git găzduit pe GitHub. Se va utiliza o strategie simplificată bazată pe ramura principală `main` și ramuri separate pentru funcționalități și remedieri.

Convenții de numire ramuri:
- `main` - versiunea principală a aplicației
- `feature/<nume>` - dezvoltarea unei funcționalități noi
- `fix/<nume>` - remedierea unei erori
- `docs/<nume>` - modificări ale documentației
- `test/<nume>` - adăugarea sau modificarea testelor

## 4. Planul de implementare

| Perioada | Rezultatul urmărit |
|---|---|
| Săptămâna 1 | Cerințe clarificate, design inițial și mediu de dezvoltare configurat |
| Săptămâna 2 | Baza de date, modelele și structura frontendului și backendului realizate |
| Săptămâna 3 | Autentificare, chestionar inițial și integrarea primelor pagini |
| Săptămâna 4 | Gestionarea obiceiurilor și interfața aferentă funcționale |
| Săptămâna 5 | Marcarea activităților, progresul, seriile și sistemul de recompense implementate |
| Săptămâna 6 | Integrare completă, testare, remedierea erorilor și documentație finalizată 

## 5. Prioritizarea activităților

Activitățile proiectului sunt împărțite în două categorii: **obligatorii** și **opționale**. Activitățile obligatorii trebuie finalizate pentru livrarea versiunii inițiale, în timp ce activitățile opționale vor fi implementate dacă timpul disponibil permite asta.
### 5.1. Activități obligatorii

1. Configurarea mediului de dezvoltare.
2. Configurarea bazei de date și definirea modelelor principale.
3. Implementarea înregistrării și autentificării.
4. Implementarea chestionarului inițial de evaluare.
5. Implementarea personalizării obiceiurilor zilnice.
6. Implementarea marcării obiceiurilor ca realizate.
7. Calcularea și afișarea progresului zilnic și a seriilor consecutive.
8. Implementarea sistemului de recompense cu monede virtuale.
9. Testarea fluxurilor principale și a integrității datelor.

### 5.2. Activități opționale

- Istoric al activităților și vizualizarea evoluției în timp.
- Posibilitatea de modificare a obiectivelor și obiceiurilor.
- Gestionarea setărilor de confidențialitate.
- Magazin virtual pentru achiziționarea de streak freeze-uri.
- Sistem de gestionarea a relațiilor sociale.
- Vizualizarea progresului prietenilor.
- Sistem de încurajări (nudges) și notificări.

## 6. Repartizarea responsabilităților

| **Membru**            | **Responsabilități** |
| --------------------- | -------------------- |
| Deliu Marius          | DevOps, testing      |
| Popa Alexandru-Fabian | Software development |
| Văran Lidia           | Design grafic, UX    |

### 6.1. Responsabilități comune

Toți membrii echipei vor contribui la:
- revizuirea modificărilor prin pull requests și verificarea compatibilității modificărilor cu restul aplicației
- testarea funcționalităților la care contribuie
- menținerea documentației actualizate
