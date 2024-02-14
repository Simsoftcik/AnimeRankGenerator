window.addEventListener('storage', listAnime);
window.addEventListener('DOMContentLoaded', listAnime);


function listAnime(){
    const table = document.getElementById("allAnimeList");
    table.innerHTML = `
    <tr>
        <th>Numer</th>
        <th>Nazwa</th>
        <th>Fabuła</th>
        <th>Świat</th>
        <th>Postacie</th>
        <th>Protagonista</th>
        <th>Deuteragoniści</th>
        <th>Antagoniści</th>
        <th>Zwroty akcji</th>
        <th>Tempo akcji</th>
        <th>Humor</th>
        <th>Klimat</th>
        <th>Tajemnice</th>
        <th>Napięcie</th>
        <th>Oryginalność</th>
        <th>Emocje</th>
        <th>Epickość</th>

        <th>Finał</th>
        <th>Rozwiązanie akcji</th>
        <th>Kreska</th>
        <th>Openingi</th>
        <th>Endingi</th>
        <th>Aktorzy głosowi</th>
        <th>Struktura</th>
        <th>Czas rozkręcenia</th>
        <th>Moralność</th>
        <th>Psychodelizm</th>
        <th>Jasność przekazu</th>
        <th>Rozwój postaci</th>
        <th>Rozwój relacji</th>
        <th>Odstąpienie od wzorców garunku</th>
        <th>Kontrowersyjność</th>
        <th>Brutalność</th>
        <th>Symbolika</th>
        <th>Erotyczność</th>
    </tr>`;
    const animeList = (() => {
        const fieldValue = localStorage.getItem('animeList2');
        return fieldValue === null
          ? []
          : JSON.parse(fieldValue);
    })();
    for(let i=0; i<animeList.length; i++){
        var newRecord = document.createElement("tr");

        var value = document.createElement("td");
        value.textContent = i.toString();
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].nazwa;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].fabula;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].swiat;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].postacie;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].protagonista;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].deuteragonisci;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].antagonisci;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].zwroty_akcji;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].tempo_akcji;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].humor;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].klimat;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].tajemnice;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].napiecie;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].oryginalnosc;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].emocje;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].epickosc;
        newRecord.appendChild(value);

        // update 2.0

        var value = document.createElement("td");
        value.textContent = animeList[i].final;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].rozwiazanie_akcji;
        newRecord.appendChild(value);
        
        var value = document.createElement("td");
        value.textContent = animeList[i].kreska;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].openingi;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].endingi;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].aktorzy_glosowi;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].struktura;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].czas_rozkrecenia;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].moralnosc;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].psychodelizm;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].jasnosc_przekazu;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].rozwoj_postaci;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].rozwoj_relacji;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].odstapienie;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].kontrowersyjnosc;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].brutalnosc;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].symbolika;
        newRecord.appendChild(value);

        var value = document.createElement("td");
        value.textContent = animeList[i].erotycznosc;
        newRecord.appendChild(value);

        table.appendChild(newRecord);
    }
}