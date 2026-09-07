# Website von Filip Stanicak

Live: https://filipstanicak.github.io/

Statische HTML-Seite ohne Build. `index.html` und der vollständige Ordner `assets/` gehören zusammen. Inter und Newsreader werden lokal aus `assets/fonts/` geladen.

## Inhalt und Redaktion

Stand: 7. September 2026. Abgeglichen mit den Lebenslaufvarianten AI, Industrie OP, Beratung OP und BA.

- Business Analyse bildet den fachlichen Kern; Prozessgestaltung, agile Delivery und KI-Enablement ergänzen ihn.
- Zeitangaben bleiben eindeutig: Automotive seit 2019, Beratung seit 2021.
- Acht Kundenprojekte, zusätzlich Bosch-Studienzeit und interne Themen. Diese zusätzlichen Einträge werden nicht als Kundenprojekte gezählt.
- Vier Beispiele erläutern den Ansatz; Stationen fassen die wichtigsten Beiträge zusammen. Projektbeiträge sind über native `details`-Elemente aufklappbar.
- Kundennamen bleiben anonymisiert. Telefonnummer und Privatanschrift werden nicht veröffentlicht.
- Keine separate Sektion für eigene Entwicklungen, entsprechend der bisherigen Entscheidung.
- Newsreader und die Kupferakzente bleiben erhalten.

## Sprachen

Deutsch steht im HTML, Englisch in `data-en`; Attribute verwenden `data-en-alt` und `data-en-aria`. Neue Inhalte immer in beiden Fassungen pflegen. Titel und Beschreibung stehen zusätzlich im `META`-Objekt.

Direktlinks: `/?lang=de` und `/?lang=en`. Ein expliziter URL-Parameter hat Vorrang vor der lokal gespeicherten Sprachwahl. Ohne JavaScript bleibt die deutsche Fassung einschließlich aufklappbarer Projektdetails nutzbar.

## Veröffentlichung

GitHub Pages veröffentlicht `main` aus dem Repository-Stamm. Nur Website-Dateien committen; keine Lebenslauf-PDFs, lokalen Prüffassungen oder privaten Ausgangsdaten.

## Prüfungen bei Änderungen

Deutsch und Englisch, schmale und breite Ansicht, helle und dunkle Farben, Projektfilter, aufklappbare Details, Navigation zum Seitenanfang und lokale Bild-/Schriftpfade prüfen. Die Sprachlabels der mobilen Ansatz-Zeilen kommen aus sprachabhängigen CSS-Regeln.
