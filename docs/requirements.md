# PasCuPas — Cerințe funcționale

To do:

- [ ] de creat o pagină de calendar pentru obiceiuri
- [ ] de definit comportamentul pentru modificarea listei de obiceiuri active
- [ ] de definit acțiunile recompensate și numărul de monede acordate
- [ ] de creat o pagină de setări
  - [ ] de adăugat setări de confidențialitate a informației

---

## 1. Scopul documentului

Documentul detaliază cerințele funcționale propuse pentru aplicația web **PasCuPas**. Pentru fiecare cerință sunt prezentate scopul, descrierea comportamentului, fluxul principal de utilizare, situațiile alternative și criteriile de acceptare.

- **Obligatorie** — necesară pentru versiunea inițială a aplicației (MVP).
- **Opțională** — poate fi implementată dacă timpul și resursele permit.

## 2. Cerințele funcționale

| ID | Cerință | Prioritate |
|---|---|---|
| CF01 | Completarea chestionarului inițial | Obligatorie |
| CF02 | Generarea și configurarea obiceiurilor zilnice | Obligatorie |
| CF03 | Marcarea obiceiurilor ca realizate | Obligatorie |
| CF04 | Calcularea progresului zilnic și a seriilor consecutive | Obligatorie |
| CF05 | Acordarea și gestionarea monedelor virtuale | Obligatorie |
| CF06 | Achiziționarea și utilizarea unui *streak freeze* | Opțională |
| CF07 | Adăugarea și gestionarea prietenilor | Opțională |
| CF08 | Vizualizarea progresului prietenilor | Opțională |
| CF09 | Trimiterea de încurajări (*nudges*) | Opțională |

## 3. Descrierea detaliată a cerințelor

### CF01 - Completarea chestionarului inițial

**Prioritate:** Obligatorie

**Scop:** Colectarea informațiilor necesare pentru adaptarea obiceiurilor zilnice la nivelul de activitate, disponibilitatea și obiectivele utilizatorului.

**Descriere:** La prima utilizare, aplicația solicită completarea unui chestionar. Acesta poate include întrebări despre nivelul actual de activitate fizică, timpul petrecut la birou, timpul disponibil pentru activități, tipurile de activități preferate și obiectivele personale. Răspunsurile sunt salvate și utilizate pentru personalizarea obiceiurilor.

**Flux principal:**
1. Utilizatorul autentificat accesează secțiunea de configurare inițială.
2. Aplicația afișează chestionarul.
3. Utilizatorul completează întrebările obligatorii.
4. Aplicația validează răspunsurile.
5. Utilizatorul trimite chestionarul.
6. Aplicația salvează răspunsurile și permite continuarea către configurarea obiceiurilor.

**Situații alternative:**
- Dacă lipsesc răspunsuri obligatorii, aplicația indică întrebările care trebuie completate.
- Dacă un răspuns nu respectă formatul sau valorile permise, aplicația afișează un mesaj explicativ.
- Dacă salvarea eșuează, utilizatorul este informat și poate încerca din nou.

**Criterii de acceptare:**
- Chestionarul este disponibil utilizatorilor care nu l-au completat.
- Câmpurile obligatorii sunt validate înainte de trimitere.
- Răspunsurile valide sunt salvate și asociate contului autentificat.
- După salvare, utilizatorul poate continua către configurarea obiceiurilor.

### CF02 - Generarea și configurarea obiceiurilor zilnice

**Prioritate:** Obligatorie

**Scop:** Transformarea răspunsurilor din chestionar în activități concrete și realizabile, adaptate utilizatorului.

**Descriere:** Pe baza răspunsurilor din chestionar, aplicația generează o listă de obiceiuri zilnice. Exemple: o plimbare scurtă, ridicarea de pe scaun la intervale regulate sau efectuarea unor exerciții simple de mobilitate. Utilizatorul poate consulta lista și o poate configura prin opțiunile disponibile, de exemplu activarea sau dezactivarea unor obiceiuri și modificarea duratei ori frecvenței, dacă acestea sunt configurabile.

**Flux principal:**
1. Aplicația preia răspunsurile salvate prin CF01.
2. Aplicația selectează sau generează obiceiuri potrivite profilului utilizatorului.
3. Lista propusă este afișată utilizatorului.
4. Utilizatorul selectează și configurează obiceiurile dorite.
5. Utilizatorul confirmă configurația.
6. Aplicația salvează obiceiurile active și le afișează în lista zilnică.

**Situații alternative:**
- Dacă chestionarul nu a fost completat, aplicația solicită completarea CF01.
- Dacă utilizatorul dezactivează un obicei, acesta nu mai apare în lista activă.
- Dacă nu există suficiente informații pentru personalizare, aplicația poate propune un set implicit.

**Criterii de acceptare:**
- Obiceiurile propuse țin cont de răspunsurile utilizatorului.
- Utilizatorul poate consulta și configura lista.
- Configurația confirmată este salvată și folosită la afișarea obiceiurilor zilnice.
- Modificările ulterioare sunt reflectate în lista activă.

### CF03 - Marcarea obiceiurilor ca realizate

**Prioritate:** Obligatorie

**Scop:** Permiterea utilizatorului să înregistreze activitățile pe care le-a finalizat.

**Descriere:** Aplicația afișează obiceiurile active pentru ziua curentă. Pentru fiecare obicei, utilizatorul poate indica dacă l-a realizat. Starea completării este salvată și trebuie să persiste după reîncărcarea paginii sau o nouă autentificare.

**Flux principal:**
1. Utilizatorul accesează lista obiceiurilor zilnice.
2. Aplicația afișează obiceiurile active și starea fiecăruia.
3. Utilizatorul marchează un obicei ca realizat.
4. Aplicația înregistrează completarea pentru ziua curentă.
5. Aplicația actualizează starea obiceiului și progresul zilnic.

**Situații alternative:**
- Dacă obiceiul este deja marcat ca realizat, aplicația nu înregistrează o completare duplicată.
- Dacă salvarea eșuează, aplicația informează utilizatorul și păstrează afișată starea confirmată de server.
- Obiceiurile inactive nu pot fi marcate din lista curentă.

**Criterii de acceptare:**
- Utilizatorul poate marca un obicei activ ca realizat.
- Starea este salvată și persistă după reîncărcarea paginii.
- Un obicei poate avea cel mult o completare validă pe zi.
- Marcarea actualizează progresul zilnic.
- Obiceiurile realizate și cele nefinalizate pot fi diferențiate vizual.

### CF04 - Calcularea progresului zilnic și a seriilor consecutive

**Prioritate:** Obligatorie

**Scop:** Oferirea unui feedback clar asupra activității zilnice și încurajarea consecvenței.

**Descriere:** Aplicația calculează progresul în funcție de numărul obiceiurilor active și de numărul celor realizate. Rezultatul poate fi afișat ca procent sau bară de progres. Aplicația calculează și seria consecutivă (*daily streak*), adică numărul de zile consecutive în care utilizatorul îndeplinește condiția zilnică stabilită.

**Regulă recomandată pentru MVP:** O zi este considerată îndeplinită atunci când toate obiceiurile active ale zilei au fost realizate. Echipa trebuie să confirme această regulă înainte de implementare.

**Flux principal:**
1. Utilizatorul marchează obiceiuri ca realizate.
2. Aplicația compară numărul obiceiurilor realizate cu numărul celor active.
3. Aplicația calculează și afișează progresul zilei.
4. Aplicația verifică îndeplinirea condiției zilnice.
5. Aplicația actualizează seria consecutivă și o afișează utilizatorului.

**Reguli funcționale:**
- Progresul = (obiceiuri realizate / obiceiuri active) × 100.
- Dacă nu există obiceiuri active, aplicația afișează o stare dedicată, fără a efectua o împărțire la zero.
- O zi neîndeplinită întrerupe seria, cu excepția cazului în care este protejată printr-un *streak freeze*.
- Calculele trebuie să folosească în mod consecvent data și fusul orar al utilizatorului.

**Criterii de acceptare:**
- Progresul se recalculează după fiecare completare.
- Valoarea afișată corespunde obiceiurilor active și realizate.
- Seria este actualizată conform regulii zilnice stabilite.
- Completările duplicate nu modifică incorect progresul sau seria.
- Schimbarea datei este tratată corect.

### CF05 - Acordarea și gestionarea monedelor virtuale

**Prioritate:** Obligatorie

**Scop:** Introducerea unui mecanism de recompensare care să motiveze utilizatorii să își mențină obiceiurile.

**Descriere:** Utilizatorii primesc monede virtuale pentru îndeplinirea unor acțiuni definite de aplicație. Soldul este asociat contului și poate fi folosit pentru funcționalități disponibile în aplicație, inclusiv achiziționarea unui *streak freeze* dacă CF06 este implementată. O recompensă poate fi, de exemplu, acordată pentru finalizarea tuturor obiceiurilor active într-o zi.

**Flux principal:**
1. Utilizatorul îndeplinește o condiție care acordă o recompensă.
2. Aplicația verifică dacă recompensa pentru acțiunea respectivă a fost deja acordată.
3. Dacă nu a fost acordată, aplicația adaugă monede în sold.
4. Aplicația înregistrează tranzacția și actualizează soldul afișat.
5. Utilizatorul poate consulta soldul disponibil.

**Situații alternative:**
- Dacă recompensa a fost deja acordată, aplicația nu acordă monede suplimentare.
- Dacă actualizarea soldului eșuează, aplicația nu păstrează o tranzacție parțială.
- O cheltuire care ar duce la un sold negativ este respinsă.

**Criterii de acceptare:**
- Monedele sunt acordate numai după îndeplinirea condițiilor definite.
- Aceeași acțiune nu poate genera aceeași recompensă de mai multe ori.
- Soldul este actualizat corect și poate fi consultat de utilizator.
- Acordarea și cheltuirea monedelor sunt înregistrate.
- Soldul nu poate deveni negativ.

### CF06 - Achiziționarea și utilizarea unui streak freeze

**Prioritate:** Opțională

**Scop:** Protejarea seriei consecutive atunci când utilizatorul nu reușește să își îndeplinească obiceiurile într-o anumită zi.

**Descriere:** Un *streak freeze* este un element virtual achiziționat cu monede. Atunci când este disponibil și sunt îndeplinite regulile aplicației, acesta protejează seria consecutivă pentru o zi neîndeplinită.

**Flux principal:**
1. Utilizatorul accesează magazinul virtual.
2. Aplicația afișează prețul și numărul de elemente disponibile.
3. Utilizatorul selectează achiziția.
4. Aplicația verifică soldul.
5. Dacă soldul este suficient, aplicația scade prețul și adaugă elementul în inventar.
6. La apariția unei zile neîndeplinite, aplicația verifică disponibilitatea și condițiile de utilizare.
7. Dacă utilizarea este permisă, aplicația consumă un element și protejează seria.

**Aspecte care trebuie stabilite:** prețul, limita de elemente deținute, utilizarea automată sau manuală, posibilitatea protejării unei zile anterioare și eventualele limite de utilizare în zile consecutive.

**Criterii de acceptare:**
- Utilizatorul poate consulta prețul și disponibilitatea.
- Achiziția este permisă numai dacă soldul este suficient.
- Monedele sunt scăzute o singură dată pentru fiecare achiziție.
- Elementul este adăugat inventarului.
- Utilizarea consumă un singur element și protejează seria doar dacă regulile sunt respectate.
- O operațiune eșuată nu modifică soldul sau inventarul.

### CF07 - Adăugarea și gestionarea prietenilor

**Prioritate:** Opțională

**Scop:** Facilitarea interacțiunii dintre utilizatori și crearea unui mediu de susținere reciprocă.

**Descriere:** Utilizatorii pot căuta alte conturi și pot trimite cereri de prietenie. Relația devine activă numai după acceptarea cererii. Utilizatorii pot consulta lista de prieteni, pot accepta sau respinge cereri și pot elimina relații existente.

**Flux principal:**
1. Utilizatorul accesează secțiunea de prieteni.
2. Caută un alt cont după un identificator disponibil în aplicație.
3. Trimite o cerere de prietenie.
4. Destinatarul acceptă sau respinge cererea.
5. Dacă cererea este acceptată, utilizatorii apar în listele reciproce de prieteni.
6. Oricare dintre ei poate elimina ulterior relația.

**Situații alternative:**
- Utilizatorul nu poate trimite o cerere către propriul cont.
- Nu pot exista cereri duplicate între aceiași utilizatori.
- Dacă există deja o cerere în așteptare, aplicația afișează starea acesteia.
- După eliminarea relației, accesul la informațiile rezervate prietenilor este actualizat.

**Criterii de acceptare:**
- Utilizatorul poate căuta alte conturi.
- Poate trimite, accepta și respinge cereri.
- Cererile și relațiile au stări clare.
- Nu sunt permise cereri către propriul cont sau duplicate.
- Utilizatorul poate elimina un prieten.

### CF08 - Vizualizarea progresului prietenilor

**Prioritate:** Opțională

**Scop:** Încurajarea consecvenței prin posibilitatea de a urmări progresul prietenilor.

**Descriere:** Utilizatorul poate consulta informații limitate despre activitatea prietenilor, precum progresul zilnic, seria consecutivă sau numărul de obiceiuri realizate. Afișarea datelor trebuie să respecte setările de confidențialitate.

**Flux principal:**
1. Utilizatorul accesează lista de prieteni.
2. Selectează un prieten.
3. Aplicația verifică dacă informațiile pot fi afișate.
4. Aplicația prezintă datele de progres disponibile.

**Situații alternative:**
- Dacă relația de prietenie nu mai este activă, informațiile nu mai sunt accesibile prin această funcționalitate.
- Dacă prietenul nu are activitate în ziua curentă, aplicația afișează o stare corespunzătoare.
- Dacă prietenul și-a restricționat vizibilitatea progresului, datele respective nu sunt afișate.

**Criterii de acceptare:**
- Progresul poate fi consultat numai pentru prietenii existenți.
- Datele afișate corespund activității înregistrate.
- Setările de confidențialitate sunt respectate.
- Lipsa activității este reprezentată clar.

### CF09 - Trimiterea de încurajări (*nudges*)

**Prioritate:** Opțională

**Scop:** Permiterea utilizatorilor să își încurajeze prietenii și să contribuie la menținerea motivației.

**Descriere:** Utilizatorul poate trimite unui prieten o încurajare cu mesaj prestabilit, pe care o va alege dintr-o listă deja definită.

**Flux principal:**
1. Utilizatorul accesează profilul sau cardul unui prieten.
2. Selectează opțiunea de trimitere a unei încurajări.
3. Aplicația afișează mesajele disponibile.
4. Utilizatorul selectează un mesaj.
5. Aplicația înregistrează și transmite încurajarea.
6. Destinatarul poate consulta mesajul în aplicație.

**Situații alternative:**
- Nu pot fi trimise încurajări către persoane care nu sunt prieteni.
- Aplicația poate limita frecvența trimiterilor pentru a preveni spamul.
- Dacă trimiterea eșuează, expeditorul este informat, iar mesajul nu este marcat ca livrat.

**Criterii de acceptare:**
- Utilizatorul poate selecta și trimite un mesaj predefinit unui prieten.
- Destinatarul poate consulta încurajarea primită.
- Încurajările sunt asociate expeditorului și destinatarului.
- Trimiterea către utilizatori care nu sunt prieteni este împiedicată.
- Erorile de trimitere sunt comunicate utilizatorului.

## 4. Reguli și aspecte generale

Următoarele reguli și aspecte afectează implementarea mai multor cerințe:

1. **Delimitarea zilei:** ziua se va termina la 05:00, fusul orar al României.
2. **Modificarea obiceiurilor:** (WIP)
3. **Recompensele:** (WIP)
4. **(WIP) Confidențialitatea:** .

## 5. Criterii generale de finalizare

O cerință poate fi considerată implementată atunci când:
- comportamentul descris este disponibil în aplicație;
- datele sunt validate și salvate corect;
- utilizatorul primește feedback pentru acțiunile efectuate;
- funcționalitatea a fost verificată prin teste;
