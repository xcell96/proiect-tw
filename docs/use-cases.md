# PasCuPas — Scenarii de utilizare

## 1. Scopul documentului

Documentul prezintă scenarii de utilizare pentru aplicația **PasCuPas**. Fiecare scenariu include actorii implicați, precondițiile, declanșatorul, pașii principali, fluxurile alternative, rezultatul final și criteriile de verificare.

## 2. Actori

| Actor | Descriere |
|---|---|
| Utilizator | Persoană cu un cont PasCuPas, care își configurează și urmărește obiceiurile zilnice. |
| Sistemul PasCuPas | Aplicația care validează datele, salvează completările, calculează progresul și gestionează recompensele. |
| Prieten | Alt utilizator PasCuPas cu care utilizatorul curent are o relație de prietenie acceptată. |

## 3. UC01 - Configurarea inițială a obiceiurilor

**Cerințe asociate:** CF01, CF02
**Actor principal:** Utilizator

### Scop
Utilizatorul completează chestionarul inițial și primește o listă de obiceiuri zilnice pe care o poate configura.

### Precondiții
- Utilizatorul deține un cont și este autentificat.
- Chestionarul inițial nu a fost completat anterior.

### Declanșator
Utilizatorul accesează pentru prima dată secțiunea de configurare a obiceiurilor.

### Flux principal
1. Sistemul verifică dacă utilizatorul a completat chestionarul.
2. Sistemul afișează chestionarul inițial.
3. Utilizatorul completează întrebările.
4. Utilizatorul trimite răspunsurile.
5. Sistemul validează datele introduse.
6. Sistemul salvează răspunsurile asociate contului.
7. Sistemul generează sau selectează obiceiuri pe baza răspunsurilor.
8. Sistemul afișează lista de obiceiuri propuse.
9. Utilizatorul activează sau dezactivează obiceiurile dorite și modifică parametrii disponibili.
10. Utilizatorul confirmă configurația.
11. Sistemul salvează configurația și afișează obiceiurile active.

### Fluxuri alternative
- **A1 - Răspunsuri incomplete:** Sistemul indică întrebările obligatorii necompletate și solicită corectarea formularului. Nu salvează chestionarul ca fiind finalizat.
- **A2 - Date invalide:** Sistemul afișează un mesaj pentru fiecare câmp invalid și solicită introducerea unei valori acceptate.
- **A3 - Eroare la salvare:** Sistemul informează utilizatorul și permite reîncercarea. Nu afișează chestionarul sau configurația ca fiind salvate dacă operațiunea a eșuat.

### Postcondiții
- Răspunsurile chestionarului sunt salvate și asociate contului.
- Configurația obiceiurilor este salvată.
- Utilizatorul are o listă de obiceiuri active pentru monitorizarea zilnică.

### Criterii de acceptare
Scenariul este trecut dacă:
- un utilizator nou poate accesa chestionarul;
- trimiterea cu răspunsuri obligatorii lipsă sau invalide este respinsă;
- răspunsurile valide sunt salvate;
- obiceiurile propuse țin cont de răspunsurile utilizatorului;
- configurația confirmată persistă după reîncărcarea paginii și o nouă autentificare.

## 4. UC02 - Realizarea obiceiurilor și actualizarea progresului

**Cerințe asociate:** CF03, CF04, CF05
**Actor principal:** Utilizator

### Scop
Utilizatorul marchează obiceiurile realizate, iar sistemul actualizează progresul zilnic, seria consecutivă și, dacă este cazul, soldul de monede.

### Precondiții
- Utilizatorul este autentificat.
- Chestionarul a fost completat și există cel puțin un obicei activ.
- Regulile de calcul al progresului și de acordare a monedelor sunt configurate.
- Pentru testul recompensei, ziua curentă nu a fost deja recompensată.

### Declanșator
Utilizatorul accesează lista obiceiurilor pentru ziua curentă.

### Flux principal
1. Sistemul afișează obiceiurile active și starea fiecăruia.
2. Sistemul afișează progresul curent.
3. Utilizatorul marchează un obicei ca realizat.
4. Sistemul salvează completarea pentru data curentă.
5. Sistemul recalculează progresul și actualizează interfața.
6. Utilizatorul repetă pașii 3–5 pentru celelalte obiceiuri.
7. După realizarea tuturor obiceiurilor active, sistemul verifică îndeplinirea condiției zilnice.
8. Sistemul marchează ziua ca îndeplinită și actualizează seria consecutivă conform regulilor aplicației.
9. Sistemul verifică dacă recompensa pentru ziua respectivă a fost deja acordată.
10. Dacă recompensa nu a fost acordată, sistemul adaugă monede în sold și înregistrează tranzacția.
11. Sistemul afișează progresul, seria actualizată și noul sold.

### Fluxuri alternative
- **A1 - Zi incompletă:** Sistemul afișează progresul parțial și nu acordă recompensa condiționată de finalizarea tuturor obiceiurilor.
- **A2 - Niciun obicei activ:** Sistemul solicită configurarea a cel puțin unui obicei și nu încearcă să calculeze un procent prin împărțire la zero.

### Postcondiții
- Completările sunt salvate pentru data corectă.
- Progresul reflectă numărul obiceiurilor realizate.
- Seria este actualizată conform regulii zilnice.
- Monedele sunt acordate cel mult o dată pentru aceeași condiție de recompensare.
- Soldul și tranzacțiile sunt consistente.

### Criterii de acceptare
Scenariul este trecut dacă:
- marcarea unui obicei actualizează progresul;
- procentul corespunde numărului obiceiurilor active și realizate;
- completările persistă după reîncărcarea paginii;
- finalizarea tuturor obiceiurilor actualizează ziua și seria conform regulii stabilite;
- recompensa este acordată o singură dată;
- soldul afișat corespunde tranzacțiilor înregistrate.

## 5. UC03 - Achiziționarea și utilizarea unui streak freeze

**Cerință asociată:** CF06
**Actor principal:** Utilizator

### Scop
Utilizatorul achiziționează un streak freeze cu monede virtuale și îl folosește pentru a proteja seria consecutivă într-o zi neîndeplinită.

### Precondiții
- Utilizatorul este autentificat.
- Funcționalitatea CF06 și magazinul virtual sunt disponibile.
- Utilizatorul deține suficiente monede.
- Prețul, limita de inventar și regulile de utilizare sunt configurate.

### Declanșator
Utilizatorul accesează magazinul virtual și selectează produsul streak freeze.

### Flux principal
1. Sistemul afișează soldul și produsele disponibile.
2. Utilizatorul selectează *streak freeze*.
3. Sistemul afișează prețul și condițiile de utilizare.
4. Utilizatorul confirmă achiziția.
5. Sistemul verifică soldul și limita de inventar.
6. Sistemul scade prețul din sold și înregistrează tranzacția.
7. Sistemul adaugă un element în inventarul utilizatorului.
8. Într-o zi ulterioară, utilizatorul nu îndeplinește condiția zilnică.
9. Sistemul verifică dacă există un element disponibil și dacă utilizarea este permisă.
10. Sistemul consumă un element și protejează seria.
11. Sistemul afișează seria protejată și inventarul actualizat.

### Fluxuri alternative
- **A1 - Sold insuficient:** Achiziția este respinsă, iar soldul și inventarul rămân neschimbate.
- **A2 - Limită de inventar atinsă:** Sistemul respinge achiziția și afișează limita permisă.
- **A3 - Eroare la achiziție:** Sistemul nu scade monedele fără să adauge elementul în inventar.

### Postcondiții
- După achiziție, soldul este diminuat cu prețul produsului, iar inventarul crește cu un element.
- După utilizare, inventarul scade cu un element.
- Seria este protejată numai dacă regulile de utilizare sunt respectate.

### Criterii de acceptare
Scenariul este trecut dacă:
- achiziția este permisă când soldul este suficient;
- achiziția este respinsă când soldul este insuficient;
- soldul și inventarul sunt actualizate corect;
- utilizarea consumă exact un element;
- operațiunile eșuate nu produc modificări parțiale;
- seria este protejată numai în condițiile definite.

## 6. UC04 - Adăugarea unui prieten

**Cerințe asociate:** CF07
**Prioritate:** Opțională  
**Actori:** Utilizator și Prieten

### Scop
Utilizatorul trimite o cerere de prietenie, iar celălalt utilizator poate să accepte sau să refuze cererea. Dacă celălalt utilizator acceptă cererea, acesta va deveni Prieten.

### Precondiții
- Ambii actori dețin conturi PasCuPas.
- Utilizatorul principal este autentificat.
- Funcționalitățile sociale sunt implementate.
- Setările de confidențialitate permit afișarea conturilor.

### Declanșator
Utilizatorul accesează secțiunea de prieteni și caută un alt utilizator.

### Flux principal
1. Sistemul afișează secțiunea de prieteni și opțiunea de căutare.
2. Utilizatorul caută contul prietenului.
3. Sistemul afișează rezultatul.
4. Utilizatorul trimite o cerere de prietenie.
5. Sistemul înregistrează cererea cu starea „în așteptare”.
6. Prietenul accesează cererile primite și acceptă cererea.
7. Sistemul activează relația și o afișează în listele ambilor utilizatori.

### Fluxuri alternative
- **A1 - Cont inexistent:** Sistemul afișează un mesaj care indică faptul că nu a fost găsit niciun cont corespunzător.
- **A2 - Cerere duplicată:** Dacă există deja o cerere în așteptare sau o relație activă, sistemul nu creează o cerere nouă.
- **A3 - Cerere respinsă:** Relația nu devine activă, iar progresul și încurajările destinate prietenilor nu sunt disponibile.

### Postcondiții
- Cererea și decizia destinatarului sunt înregistrate.
- Relația devine activă numai după acceptare.

### Verificare / criterii de acceptare
Scenariul este trecut dacă:
- utilizatorul poate trimite o cerere către un cont existent;
- destinatarul poate accepta cererea;
- relația activă apare în listele ambilor utilizatori;