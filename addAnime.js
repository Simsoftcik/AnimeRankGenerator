function addAnime(){
    var nazwa = document.getElementById("nazwa").value;
    var fabula = parseInt(document.getElementById("fabula").value);
    var swiat = parseInt(document.getElementById("swiat").value);
    var postacie = parseInt(document.getElementById("postacie").value);
    var protagonista = parseInt(document.getElementById("protagonista").value);
    var deuteragonisci = parseInt(document.getElementById("deuteragonisci").value);
    var antagonisci = parseInt(document.getElementById("antagonisci").value);
    var zwroty_akcji = parseInt(document.getElementById("zwroty_akcji").value);
    var tempo_akcji = parseInt(document.getElementById("tempo_akcji").value);
    var humor = parseInt(document.getElementById("humor").value);
    var klimat = parseInt(document.getElementById("klimat").value);
    var tajemnice = parseInt(document.getElementById("tajemnice").value);
    var napiecie = parseInt(document.getElementById("napiecie").value);
    var oryginalnosc = parseInt(document.getElementById("oryginalnosc").value);
    var emocje = parseInt(document.getElementById("emocje").value);
    var epickosc = parseInt(document.getElementById("epickosc").value);
    // update 2.0
    var final = parseInt(document.getElementById("final").value);
    var rozwiazanie_akcji = parseInt(document.getElementById("rozwiazanie_akcji").value);
    var kreska = parseInt(document.getElementById("kreska").value);
    var openingi  =  parseInt(document.getElementById("openingi").value);
    var endingi =  parseInt(document.getElementById("endingi").value);
    var aktorzy_glosowi =  parseInt(document.getElementById("aktorzy_glosowi").value);
    var struktura =  parseInt(document.getElementById("struktura").value);
    var czas_rozkrecenia =  parseInt(document.getElementById("czas_rozkrecenia").value);
    var moralnosc =  parseInt(document.getElementById("moralnosc").value);
    var psychodelizm =  parseInt(document.getElementById("psychodelizm").value);
    var jasnosc_przekazu =  parseInt(document.getElementById("jasnosc_przekazu").value);
    var rozwoj_postaci =  parseInt(document.getElementById("rozwoj_postaci").value);
    var rozwoj_relacji =  parseInt(document.getElementById("rozwoj_relacji").value);
    var odstapienie =  parseInt(document.getElementById("odstapienie").value);
    var kontrowersyjnosc =  parseInt(document.getElementById("kontrowersyjnosc").value);
    var brutalnosc =  parseInt(document.getElementById("brutalnosc").value);
    var symbolika =  parseInt(document.getElementById("symbolika").value);
    var erotycznosc =  parseInt(document.getElementById("erotycznosc").value);
    if (
        !isNaN(fabula) && fabula >= -1 && fabula <= 1000 &&
        !isNaN(swiat) && swiat >= -1 && swiat <= 1000 &&
        !isNaN(postacie) && postacie >= -1 && postacie <= 1000 &&
        !isNaN(protagonista) && protagonista >= -1 && protagonista <= 1000 &&
        !isNaN(deuteragonisci) && deuteragonisci >= -1 && deuteragonisci <= 1000 &&
        !isNaN(antagonisci) && antagonisci >= -1 && antagonisci <= 1000 &&
        !isNaN(zwroty_akcji) && zwroty_akcji >= -1 && zwroty_akcji <= 1000 &&
        !isNaN(tempo_akcji) && tempo_akcji >= -1 && tempo_akcji <= 1000 &&
        !isNaN(humor) && humor >= -1 && humor <= 1000 &&
        !isNaN(klimat) && klimat >= -1 && klimat <= 1000 &&
        !isNaN(tajemnice) && tajemnice >= -1 && tajemnice <= 1000 &&
        !isNaN(napiecie) && napiecie >= -1 && napiecie <= 1000 &&
        !isNaN(oryginalnosc) && oryginalnosc >= -1 && oryginalnosc <= 1000 &&
        !isNaN(emocje) && emocje >= -1 && emocje <= 1000 &&
        !isNaN(epickosc) && epickosc >= -1 && epickosc <= 1000 &&
        // update 2.0
        !isNaN(final) && final >= -1 && final <= 1000 &&
        !isNaN(rozwiazanie_akcji) && rozwiazanie_akcji >= -1 && rozwiazanie_akcji <= 1000 &&
        !isNaN(kreska) && kreska >= -1 && kreska <= 1000 &&
        !isNaN(openingi) && openingi >= -1 && openingi <= 1000 &&
        !isNaN(endingi) && endingi >= -1 && endingi <= 1000 &&
        !isNaN(aktorzy_glosowi) && aktorzy_glosowi >= -1 && aktorzy_glosowi <= 1000 &&
        !isNaN(struktura) && struktura >= -1 && struktura <= 1000 &&
        !isNaN(czas_rozkrecenia) && czas_rozkrecenia >= -1 && czas_rozkrecenia <= 1000 &&
        !isNaN(moralnosc) && moralnosc >= -1 && moralnosc <= 1000 &&
        !isNaN(psychodelizm) && psychodelizm >= -1 && psychodelizm <= 1000 &&
        !isNaN(jasnosc_przekazu) && jasnosc_przekazu >= -1 && jasnosc_przekazu <= 1000 &&
        !isNaN(rozwoj_postaci) && rozwoj_postaci >= -1 && rozwoj_postaci <= 1000 &&
        !isNaN(rozwoj_relacji) && rozwoj_relacji >= -1 && rozwoj_relacji <= 1000 &&
        !isNaN(odstapienie) &&  odstapienie >= -1 && odstapienie <= 1000 &&
        !isNaN(kontrowersyjnosc) && kontrowersyjnosc >= -1 && kontrowersyjnosc <= 1000 &&
        !isNaN(brutalnosc) && brutalnosc >= -1 && brutalnosc <= 1000 &&
        !isNaN(symbolika) && symbolika >= -1 && symbolika <= 1000 &&
        !isNaN(erotycznosc) && erotycznosc >= -1 && erotycznosc <= 1000
    ){

        const animeToAdd = new Anime(nazwa, fabula, swiat, postacie, protagonista, deuteragonisci, antagonisci, zwroty_akcji, tempo_akcji, humor, klimat, tajemnice, napiecie, oryginalnosc, emocje, epickosc, final, rozwiazanie_akcji, kreska, openingi, endingi, aktorzy_glosowi, struktura, czas_rozkrecenia, moralnosc, psychodelizm, jasnosc_przekazu, rozwoj_postaci, rozwoj_relacji, odstapienie, kontrowersyjnosc, brutalnosc, symbolika, erotycznosc);

        const animeList = (() => {
            const fieldValue = localStorage.getItem('animeList2');
            return fieldValue === null
            ? []
            : JSON.parse(fieldValue);
        })();

        animeList.push(animeToAdd);
        localStorage.setItem('animeList2', JSON.stringify(animeList));
        listAnime();
    }
    else{
        alert("Podano złe dane")
    }
}