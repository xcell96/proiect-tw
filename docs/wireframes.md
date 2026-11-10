# Wireframe-uri și Fluxuri de Navigare — PasCuPas

Acest document descrie arhitectura interfeței utilizator (UI), fluxurile de navigare și scheletul vizual (wireframe-urile) pentru ecranele principale ale aplicației **PasCuPas**, realizate direct prin diagrame Mermaid.js.

---

## 1. Arhitectura Interfeței și Fluxul de Navigare

Aplicația folosește un flux liniar pentru utilizatorii noi (Chestionar de Onboarding -> Dashboard) și o navigare prin **Meniu Principal** (Bottom Navigation Bar pe mobil / Sidebar pe desktop) pentru utilizatorii autentificați.

```mermaid
graph TD
    A[Vizitator / Unauthenticated] --> B[Ecran Login / Înregistrare]
    B --> C{Utilizator Nou?}
    C -- Da --> D[F01: Chestionar Inițial / Onboarding]
    D --> E[F04: Dashboard / Acasă]
    C -- Nu --> E
    
    subgraph Meniu Principal Navigare
        E --> F[F02/F03: Gestionare Obiceiuri]
        E --> G[F05/F06: Magazin Virtual Monede]
        E --> H[F07/F08/F09: Pagină Social & Prieteni]
        E --> I[Setări Profil]
    end

    G -->|Cumpărare Streak Freeze| E
    H -->|Trimitere Nudge| H
    block-beta
columns 1
  header[" HEADER: PasCuPas | 🔥 Streak: 5 Zile | 🪙 Monede: 120 | 👤 Profil "]:1
  block:progressBlock:1
    columns 1
      pTitle["PROGRESUL TĂU ASTĂZI (60%)"]
      pBar["[██████████████░░░░░░] 3 / 5 Obiceiuri îndeplinite"]
  end
  space:1
  block:habitsSection:1
    columns 1
      hTitle["OBICEIURILE DE ASTĂZI"]
      h1["[X] 👟 Mers pe jos 15 minute  -------- (+10 🪙)"]
      h2["[X] 🧘 Pauză de stretching la birou --- (+5 🪙)"]
      h3["[X] 💧 Hydration check (2L apă) ------ (+5 🪙)"]
      h4["[ ] 🏃 Alergare ușoară 20 min -------- (+15 🪙)"]
      h5["[ ] 🧘 5 minute meditație/respirat --- (+5 🪙)"]
  end
  space:1
  block:navigationBar:1
    columns 4
      btn1["[ 🏠 Dashboard ]"]
      btn2["[ ➕ Obiceiuri ]"]
      btn3["[ 🛒 Magazin ]"]
      btn4["[ 👥 Social ]"]
  end
  block-beta
columns 1
  headerOnboarding[" PASUL 1 DIN 3: Evaluare Nivel Activitate "]:1
  space:1
  block:questionBlock:1
    columns 1
      qTitle["Câte ore petreci la birou / pe scaun într-o zi obișnuită?"]
      opt1["(  ) Mai puțin de 4 ore"]
      opt2["( • ) Între 4 și 8 ore (Sedentarism moderat)"]
      opt3["(  ) Peste 8 ore (Sedentarism ridicat)"]
  end
  space:1
  block:actionsBlock:1
    columns 2
      btnBack["[ ⬅️ Înapoi ]"]
      btnNext["[ Pasul Următor ➡️ ]"]
  end
  block-beta
columns 1
  headerShop[" MAGAZIN VIRTUAL | 🪙 Balanță: 120 Monede "]:1
  space:1
  block:item1:1
    columns 2
      i1Desc["🛡️ STREAK FREEZE\nProtejează seria ta dacă uiți să bifezi o zi."]
      i1Btn["[ Cumpără - 50 🪙 ]"]
  end
  space:1
  block:item2:1
    columns 2
      i2Desc["🎨 TEMA GOLDEN DASHBOARD\nSchimbă aspectul vizual al aplicației."]
      i2Btn["[ Cumpără - 200 🪙 ]"]
  end
  space:1
  navigationBarShop["[ 🏠 Dashboard ]  |  [ ➕ Obiceiuri ]  |  [ 🛒 Magazin ]  |  [ 👥 Social ]"]:1
  block-beta
columns 1
  headerSocial[" COMUNITATE & PRIETENI | [ 🔍 Caută prieteni ] "]:1
  space:1
  block:friend1:1
    columns 2
      f1Info["👤 Deliu Marius\n🔥 Streak: 12 Zile | Progres Azi: ████████░░ (80%)"]
      f1Action["[ 👋 Trimite Nudge ]"]
  end
  space:1
  block:friend2:1
    columns 2
      f2Info["👤 Popa Alexandru\n🔥 Streak: 3 Zile | Progres Azi: ████░░░░░░ (40%)"]
      f2Action["[ 💪 Bravo! ]"]
  end
  space:1
  navigationBarSocial["[ 🏠 Dashboard ]  |  [ ➕ Obiceiuri ]  |  [ 🛒 Magazin ]  |  [ 👥 Social ]"]:1
  
