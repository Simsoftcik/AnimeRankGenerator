
function generateRanking(){
    var fabulaWaga = parseInt(document.getElementById("fabulaWaga").value);
    var swiatWaga = parseInt(document.getElementById("swiatWaga").value);
    var postacieWaga = parseInt(document.getElementById("postacieWaga").value);
    var protagonistaWaga = parseInt(document.getElementById("protagonistaWaga").value);
    var deuteragonisciWaga = parseInt(document.getElementById("deuteragonisciWaga").value);
    var antagonisciWaga = parseInt(document.getElementById("antagonisciWaga").value);
    var zwroty_akcjiWaga = parseInt(document.getElementById("zwroty_akcjiWaga").value);
    var tempo_akcjiWaga = parseInt(document.getElementById("tempo_akcjiWaga").value);
    var humorWaga = parseInt(document.getElementById("humorWaga").value);
    var klimatWaga = parseInt(document.getElementById("klimatWaga").value);
    var tajemniceWaga = parseInt(document.getElementById("tajemniceWaga").value);
    var napiecieWaga = parseInt(document.getElementById("napiecieWaga").value);
    var oryginalnoscWaga = parseInt(document.getElementById("oryginalnoscWaga").value);
    var emocjeWaga = parseInt(document.getElementById("emocjeWaga").value);
    var epickoscWaga = parseInt(document.getElementById("epickoscWaga").value);
    // update 2.0
    var finalWaga = parseInt(document.getElementById("finalWaga").value);
    var rozwiazanie_akcjiWaga = parseInt(document.getElementById("rozwiazanie_akcjiWaga").value);
    var kreskaWaga = parseInt(document.getElementById("kreskaWaga").value);
    var openingiWaga = parseInt(document.getElementById("openingiWaga").value);
    var endingiWaga = parseInt(document.getElementById("endingiWaga").value);
    var aktorzy_glosowiWaga = parseInt(document.getElementById("aktorzy_glosowiWaga").value);
    var strukturaWaga = parseInt(document.getElementById("strukturaWaga").value);
    var czas_rozkreceniaWaga = parseInt(document.getElementById("czas_rozkreceniaWaga").value);
    var moralnoscWaga = parseInt(document.getElementById("moralnoscWaga").value);
    var psychodelizmWaga = parseInt(document.getElementById("psychodelizmWaga").value);
    var jasnosc_przekazuWaga = parseInt(document.getElementById("jasnosc_przekazuWaga").value);
    var rozwoj_postaciWaga = parseInt(document.getElementById("rozwoj_postaciWaga").value);
    var rozwoj_relacjiWaga = parseInt(document.getElementById("rozwoj_relacjiWaga").value);
    var odstapienieWaga = parseInt(document.getElementById("odstapienieWaga").value);
    var kontrowersyjnoscWaga = parseInt(document.getElementById("kontrowersyjnoscWaga").value);
    var brutalnoscWaga = parseInt(document.getElementById("brutalnoscWaga").value);
    var symbolikaWaga = parseInt(document.getElementById("symbolikaWaga").value);
    var erotycznoscWaga = parseInt(document.getElementById("erotycznoscWaga").value);
    // console.log(fabulaWaga+swiatWaga+postacieWaga+protagonistaWaga+deuteragonisciWaga+antagonisciWaga+zwroty_akcjiWaga+tempo_akcjiWaga+humorWaga+klimatWaga+tajemniceWaga+napiecieWaga+oryginalnoscWaga+emocjeWaga+epickoscWaga+finalWaga+rozwiazanie_akcjiWaga+kreskaWaga+openingiWaga+endingiWaga+aktorzy_glosowiWaga+strukturaWaga+czas_rozkreceniaWaga+moralnoscWaga+psychodelizmWaga+jasnosc_przekazuWaga+rozwoj_postaciWaga+rozwoj_relacjiWaga+odstapienieWaga+kontrowersyjnoscWaga+brutalnoscWaga+symbolikaWaga+erotycznoscWaga)
    // console.log(fabulaWaga);
    // console.log(swiatWaga);
    // console.log(postacieWaga);
    // console.log(protagonistaWaga);
    // console.log(deuteragonisciWaga);
    // console.log(antagonisciWaga);
    // console.log(zwroty_akcjiWaga);
    // console.log(tempo_akcjiWaga);
    // console.log(humorWaga);
    // console.log(klimatWaga);
    // console.log(tajemniceWaga);
    // console.log(napiecieWaga);
    // console.log(oryginalnoscWaga);
    // console.log(emocjeWaga);
    // console.log(epickoscWaga);
    // console.log(finalWaga);
    // console.log(rozwiazanie_akcjiWaga);
    // console.log(kreskaWaga);
    // console.log(openingiWaga);
    // console.log(endingiWaga);
    // console.log(aktorzy_glosowiWaga);
    // console.log(strukturaWaga);
    // console.log(czas_rozkreceniaWaga);
    // console.log(moralnoscWaga);
    // console.log(psychodelizmWaga);
    // console.log(jasnosc_przekazuWaga);
    // console.log(rozwoj_postaciWaga);
    // console.log(rozwoj_relacjiWaga);
    // console.log(odstapienieWaga);
    // console.log(kontrowersyjnoscWaga);
    // console.log(brutalnoscWaga);
    // console.log(symbolikaWaga);
    // console.log(erotycznoscWaga);

    if (
        !isNaN(fabulaWaga) && fabulaWaga >= 0 && 
        !isNaN(swiatWaga) && swiatWaga >= 0 && 
        !isNaN(postacieWaga) && postacieWaga >= 0 && 
        !isNaN(protagonistaWaga) && protagonistaWaga >= 0 && 
        !isNaN(deuteragonisciWaga) && deuteragonisciWaga >= 0 && 
        !isNaN(antagonisciWaga) && antagonisciWaga >= 0 && 
        !isNaN(zwroty_akcjiWaga) && zwroty_akcjiWaga >= 0 && 
        !isNaN(tempo_akcjiWaga) && tempo_akcjiWaga >= 0 &&
        !isNaN(humorWaga) && humorWaga >= 0 && 
        !isNaN(klimatWaga) && klimatWaga >= 0 && 
        !isNaN(tajemniceWaga) && tajemniceWaga >= 0 && 
        !isNaN(napiecieWaga) && napiecieWaga >= 0 &&
        !isNaN(oryginalnoscWaga) && oryginalnoscWaga >= 0 && 
        !isNaN(emocjeWaga) && emocjeWaga >= 0 && 
        !isNaN(epickoscWaga) && epickoscWaga >= 0 && 
        // update 2.0
        !isNaN(finalWaga) && finalWaga >= 0 && 
        !isNaN(rozwiazanie_akcjiWaga) && rozwiazanie_akcjiWaga >= 0 && 
        !isNaN(kreskaWaga) && kreskaWaga >= 0 && 
        !isNaN(openingiWaga) && openingiWaga >= 0 && 
        !isNaN(endingiWaga) && endingiWaga >= 0 && 
        !isNaN(aktorzy_glosowiWaga) && aktorzy_glosowiWaga >= 0 && 
        !isNaN(strukturaWaga) && strukturaWaga >= 0 && 
        !isNaN(czas_rozkreceniaWaga) && czas_rozkreceniaWaga >= 0 && 
        !isNaN(moralnoscWaga) && moralnoscWaga >= 0 && 
        !isNaN(psychodelizmWaga) && psychodelizmWaga >= 0 && 
        !isNaN(jasnosc_przekazuWaga) && jasnosc_przekazuWaga >= 0 && 
        !isNaN(rozwoj_postaciWaga) && rozwoj_postaciWaga >= 0 && 
        !isNaN(rozwoj_relacjiWaga) && rozwoj_relacjiWaga >= 0 && 
        !isNaN(odstapienieWaga) && odstapienieWaga >= 0 && 
        !isNaN(kontrowersyjnoscWaga) && kontrowersyjnoscWaga >= 0 && 
        !isNaN(brutalnoscWaga) && brutalnoscWaga >= 0 && 
        !isNaN(symbolikaWaga) && symbolikaWaga >= 0 && 
        !isNaN(erotycznoscWaga) && erotycznoscWaga >= 0
    ){
        const animeList = (() => {
            const fieldValue = localStorage.getItem('animeList2');
            return fieldValue === null
              ? []
              : JSON.parse(fieldValue);
        })();

        let ranking = []

        for(let i=0; i<animeList.length; i++){
            let fabula = animeList[i].fabula
            let swiat = animeList[i].swiat
            let postacie = animeList[i].postacie
            let protagonista = animeList[i].protagonista
            let deuteragonisci = animeList[i].deuteragonisci
            let antagonisci = animeList[i].antagonisci
            let zwroty_akcji = animeList[i].zwroty_akcji
            let tempo_akcji = animeList[i].tempo_akcji
            let humor = animeList[i].humor
            let klimat = animeList[i].klimat
            let tajemnice = animeList[i].tajemnice
            let napiecie = animeList[i].napiecie
            let oryginalnosc = animeList[i].oryginalnosc
            let emocje = animeList[i].emocje
            let epickosc = animeList[i].epickosc
            let final = animeList[i].final
            let rozwiazanie_akcji = animeList[i].rozwiazanie_akcji
            let kreska = animeList[i].kreska
            let openingi = animeList[i].openingi
            let endingi = animeList[i].endingi
            let aktorzy_glosowi = animeList[i].aktorzy_glosowi
            let struktura = animeList[i].struktura
            let czas_rozkrecenia = animeList[i].czas_rozkrecenia
            let moralnosc = animeList[i].moralnosc
            let psychodelizm = animeList[i].psychodelizm
            let jasnosc_przekazu = animeList[i].jasnosc_przekazu
            let rozwoj_postaci = animeList[i].rozwoj_postaci
            let rozwoj_relacji = animeList[i].rozwoj_relacji
            let odstapienie = animeList[i].odstapienie
            let kontrowersyjnosc = animeList[i].kontrowersyjnosc
            let brutalnosc = animeList[i].brutalnosc
            let symbolika = animeList[i].symbolika
            let erotycznosc = animeList[i].erotycznosc

        if(fabula == -1){fabula = 500}
        if(swiat == -1){swiat = 500}
        if(postacie == -1){postacie = 500}
        if(protagonista == -1){protagonista = 500}
        if(deuteragonisci == -1){deuteragonisci = 500}
        if(antagonisci == -1){antagonisci = 500}
        if(zwroty_akcji == -1){zwroty_akcji = 500}
        if(tempo_akcji == -1){tempo_akcji = 500}
        if(humor == -1){humor = 500}
        if(klimat == -1){klimat = 500}
        if(tajemnice == -1){tajemnice = 500}
        if(napiecie == -1){napiecie = 500}
        if(oryginalnosc == -1){oryginalnosc = 500}
        if(emocje == -1){emocje = 500}
        if(epickosc == -1){epickosc = 500}
        if(final == -1){final = 500}
        if(rozwiazanie_akcji == -1){rozwiazanie_akcji == 500}
        if(kreska == -1){kreska = 500}
        if(openingi == -1){openingi = 500}
        if(endingi == -1){endingi = 500}
        if(aktorzy_glosowi == -1){aktorzy_glosowi = 500}
        if(struktura == -1){struktura = 500}
        if(czas_rozkrecenia == -1){czas_rozkrecenia = 500}
        if(moralnosc == -1){moralnosc = 500}
        if(psychodelizm == -1){psychodelizm = 500}
        if(jasnosc_przekazu == -1){jasnosc_przekazu = 500}
        if(rozwoj_postaci == -1){rozwoj_postaci = 500}
        if(rozwoj_relacji == -1){rozwoj_relacji = 500}
        if(odstapienie == -1){odstapienie == 500}
        if(kontrowersyjnosc == -1){kontrowersyjnosc = 500}
        if(brutalnosc == -1){brutalnosc = 500}
        if(symbolika == -1){symbolika = 500}
        if(erotycznosc == -1){erotycznosc = 500}

            let qualityIndicator = 
            fabula*fabulaWaga +
            swiat*swiatWaga +
            postacie*postacieWaga +
            protagonista*protagonistaWaga +
            deuteragonisci*deuteragonisciWaga +
            antagonisci*antagonisciWaga +
            zwroty_akcji*zwroty_akcjiWaga +
            tempo_akcji*tempo_akcjiWaga +
            humor*humorWaga +
            klimat*klimatWaga +
            tajemnice*tajemniceWaga +
            napiecie*napiecieWaga +
            oryginalnosc*oryginalnoscWaga +
            epickosc*epickoscWaga+
            // update 2.0
            final*finalWaga+
            rozwiazanie_akcji*rozwiazanie_akcjiWaga+
            kreska*kreskaWaga+
            openingi*openingiWaga+
            endingi*endingiWaga+
            aktorzy_glosowi*aktorzy_glosowiWaga+
            struktura*strukturaWaga+
            czas_rozkrecenia*czas_rozkreceniaWaga+
            moralnosc*moralnoscWaga+
            psychodelizm*psychodelizmWaga+
            jasnosc_przekazu*jasnosc_przekazuWaga+
            rozwoj_postaci*rozwoj_postaciWaga+
            rozwoj_relacji*rozwoj_relacjiWaga+
            odstapienie*odstapienieWaga+
            kontrowersyjnosc*kontrowersyjnoscWaga+
            brutalnosc*brutalnoscWaga+
            symbolika*symbolikaWaga+
            erotycznosc*erotycznoscWaga;

            ranking.push({name: animeList[i].nazwa, qualityIndicator});
        }

        ranking.sort((a, b) => b.qualityIndicator - a.qualityIndicator);
        let rankingTable = document.getElementById("ranking");
        rankingTable.innerHTML = `
        <tr>
            <th>Numer</th>
            <th>Nazwa anime</th>
        </tr>`;
        for(let i=0; i<ranking.length;i++){
            var value = document.createElement("tr");
            var numer = document.createElement("td");
            var valueInner = document.createElement("td");
            value.appendChild(numer);
            value.appendChild(valueInner);
            numer.textContent = (i+1).toString();
            valueInner.textContent = ranking[i].name;
            rankingTable?.appendChild(value);
        }

        let sumaWag = document.getElementById('sumaWag');
        sumaWag.textContent = `Suma wybranych wag: ${fabulaWaga+swiatWaga+postacieWaga+protagonistaWaga+deuteragonisciWaga+antagonisciWaga+zwroty_akcjiWaga+tempo_akcjiWaga+humorWaga+klimatWaga+tajemniceWaga+napiecieWaga+oryginalnoscWaga+emocjeWaga+epickoscWaga+finalWaga+rozwiazanie_akcjiWaga+kreskaWaga+openingiWaga+endingiWaga+aktorzy_glosowiWaga+strukturaWaga+czas_rozkreceniaWaga+moralnoscWaga+psychodelizmWaga+jasnosc_przekazuWaga+rozwoj_postaciWaga+rozwoj_relacjiWaga+odstapienieWaga+kontrowersyjnoscWaga+brutalnoscWaga+symbolikaWaga+erotycznoscWaga}`
    }
    else{
        alert("Podano złe wartości")
    }
}