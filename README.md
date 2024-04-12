<h1>Moment 2 Backendbaserad webbutveckling</h1>
I denna deluppgift så har ett enkelt API som ska behandla tidigare arbetslivserfarenhet skapats. 
Det går att göra anropt till API:et för att hämta(GET), lägga till(POST) och ta bort(DELETE). 

API:et är skapat med Express och är kopplad till en databas i SQLite. Databasen är implementerad med ett installations script (install.js). 

Scriptet skapar följande tabellstruktur: 
<table>
  <thead>
    <th>Namn</th>
    <th>Input-fält</th>
  </thead>
  <tbody>
    <tr>
      <td>workexp</td>
      <td><b>id</b>(INTEGER AUTOINCREMENT), <b>fält 1</b>(TEXT NOT NULL),<b>fält 2</b>(TEXT NOT NULL) <b>fält 3</b>(TEXT NOT NULL) <b>fält 4</b>(TEXT NOT NULL)</td>
    </tr>
  </tbody>
</table>


<h2>Anrop som kan göras till API:et:</h2>
<table>
  <thead>
    <th>Metod</th>
    <th>Ändpunkt</th>
    <th>Beskrivning</th>
  </thead> 
  <tbody>
    <tr>
      <td>GET</td>
      <td>/api/workexp</td>
      <td>Hämtar all data som finns sparat i API:et</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/api/workexp</td>
      <td>Lägger till ny erfarenhet i API:et</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/api/workexp/:id</td>
      <td>Raderar värdet med angivet id</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/api/workexp/:id</td>
      <td>Uppdaterar värde med angivet id</td>
    </tr>
  </tbody>
</table> 

Svaret från API:et kommer i JSON-format: 
```
  {
    "id": 37,
    "companyname": "Flygvapenmuseum",
    "jobtitle": "Museiassistent",
    "description": "Hålle intervjuer om arbetslivshistoria",
    "location": "Linköping"
  },
```
