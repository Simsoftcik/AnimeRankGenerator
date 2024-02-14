let qualitiesNum = 0;

function addQuality(){
    let qualities = document.getElementById('qualities');
    let newQuality = document.createElement('div');
    qualities?.appendChild(newQuality);

    let qualityName = document.createElement('select');
    newQuality.appendChild(qualityName);
    qualityName.setAttribute('id', `quality${qualitiesNum}`);

    let option2 = document.createElement("option");
    // option2.selected = true;
    option2.text = "Fabuła";
    option2.value = "fabula";
    qualityName.appendChild(option2);

    let option3 = document.createElement("option");
    option3.text = "Świat";
    option3.value = "swiat";
    qualityName.appendChild(option3);

    let option4 = document.createElement("option");
    option4.text = "Postacie";
    option4.value = "postacie";
    qualityName.appendChild(option4);

    let option5 = document.createElement("option");
    option5.text = "Protagonista";
    option5.value = "protagonista";
    qualityName.appendChild(option5);

    let option6 = document.createElement("option");
    option6.text = "Deuteragoniści";
    option6.value = "deuteragonisci";
    qualityName.appendChild(option6);

    let option7 = document.createElement("option");
    option7.text = "Antagoniści";
    option7.value = "antagonisci";
    qualityName.appendChild(option7);

    let option8 = document.createElement("option");
    option8.text = "Zwroty akcji";
    option8.value = "zwroty_akcji";
    qualityName.appendChild(option8);

    let option9 = document.createElement("option");
    option9.text = "Tempo akcji";
    option9.value = "tempo_akcji";
    qualityName.appendChild(option9);

    let option10 = document.createElement("option");
    option10.text = "Humor";
    option10.value = "humor";
    qualityName.appendChild(option10);

    let option11 = document.createElement("option");
    option11.text = "Klimat";
    option11.value = "klimat";
    qualityName.appendChild(option11);

    let option12 = document.createElement("option");
    option12.text = "Tajemnice";
    option12.value = "tajemnice";
    qualityName.appendChild(option12);

    let option13 = document.createElement("option");
    option13.text = "Napięcie";
    option13.value = "napiecie";
    qualityName.appendChild(option13);

    let option14 = document.createElement("option");
    option14.text = "Oryginalność";
    option14.value = "oryginalnosc";
    qualityName.appendChild(option14);

    let option15= document.createElement("option");
    option15.text = "Emocje";
    option15.value = "emocje";
    qualityName.appendChild(option15);

    let option16 = document.createElement("option");
    option16.text = "Epickość";
    option16.value = "epickosc";
    qualityName.appendChild(option16);

    let option17 = document.createElement("option");
    option17.text = "Finał";
    option17.value = "final";
    qualityName.appendChild(option17);

    let option18 = document.createElement("option");
    option18.text = "Rozwiązanie akcji";
    option18.value = "rozwiazanie_akcji";
    qualityName.appendChild(option18);

    let option19 = document.createElement("option");
    option19.text = "Kreska";
    option19.value = "kreska";
    qualityName.appendChild(option19);

    let option20 = document.createElement("option");
    option20.text = "Openingi";
    option20.value = "openingi";
    qualityName.appendChild(option20);

    let option21 = document.createElement("option");
    option21.text = "Endingi";
    option21.value = "endingi";
    qualityName.appendChild(option21);

    let option22 = document.createElement("option");
    option22.text = "Aktorzy głosowi";
    option22.value = "aktorzy_glosowi";
    qualityName.appendChild(option22);

    let option23 = document.createElement("option");
    option23.text = "Struktura";
    option23.value = "struktura";
    qualityName.appendChild(option23);

    let option24 = document.createElement("option");
    option24.text = "Czas rozkręcenia";
    option24.value = "czas_rozkrecenia";
    qualityName.appendChild(option24);

    let option25 = document.createElement("option");
    option25.text = "Moralność";
    option25.value = "moralnosc";
    qualityName.appendChild(option25);

    let option26 = document.createElement("option");
    option26.text = "Psychodelizm";
    option26.value = "psychodelizm";
    qualityName.appendChild(option26);

    let option27 = document.createElement("option");
    option27.text = "Jasność przekazu";
    option27.value = "jasnosc_przekazu";
    qualityName.appendChild(option27);

    let option28 = document.createElement("option");
    option28.text = "Rozwój postaci";
    option28.value = "rozwoj_postaci";
    qualityName.appendChild(option28);

    let option29 = document.createElement("option");
    option29.text = "Rozwój relacji";
    option29.value = "rozwoj_relacji";
    qualityName.appendChild(option29);

    let option30 = document.createElement("option");
    option30.text = "Odstąpienie od wzorców gatunku";
    option30.value = "odstapienie";
    qualityName.appendChild(option30);

    let option31 = document.createElement("option");
    option31.text = "Kontrowersyjność";
    option31.value = "kontrowersyjnosc";
    qualityName.appendChild(option31);

    let option32 = document.createElement("option");
    option32.text = "Brutalność";
    option32.value = "brutalnosc";
    qualityName.appendChild(option32);

    let option33 = document.createElement("option");
    option33.text = "Symbolika";
    option33.value = "symbolika";
    qualityName.appendChild(option33);

    let option34 = document.createElement("option");
    option34.text = "Erotyczność";
    option34.value = "erotycznosc";
    qualityName.appendChild(option34);

    let deleteButton = document.createElement('button');
    newQuality.appendChild(deleteButton);
    deleteButton.setAttribute('type', 'button');
    deleteButton.textContent = 'Usuń cechę';
    deleteButton.addEventListener('click', ()=>{
        newQuality.remove();
        qualitiesNum--;
    })
    deleteButton.classList.add('deleteButton');
    
    let weight = document.createElement('input');
    newQuality.appendChild(weight);
    weight.setAttribute('placeholder', 'Waga');
    weight.setAttribute('type','text');
    weight.setAttribute('id',`weight${qualitiesNum}`)

    qualitiesNum++;
}

function generateCustomRanking(){
    if(qualitiesNum>0){
        if(allWeightsArePositive()){
            if(areQualitiesDefined()){
                const animeList = (() => {
                    const fieldValue = localStorage.getItem('animeList2');
                    return fieldValue === null
                      ? []
                      : JSON.parse(fieldValue);
                })();
            
                let ranking = []
                for(let a=0; a<animeList.length; a++){
                    let isDefined = true;
                    let qualityIndicator=0;
                    console.log(qualityIndicator);
                    for(let q=0; q<qualitiesNum; q++){
                        const quality = document.getElementById(`quality${q}`);
                        const weight = document.getElementById(`weight${q}`);
                        console.log(quality.value);
                        console.log(weight.value);
                        qualityIndicator += animeList[a][quality.value]*weight.value
                        if(animeList[a][quality.value]==-1){
                            isDefined = false;
                        }
                    }
                    if(isDefined){
                        ranking.push({name: animeList[a].nazwa, qualityIndicator});
                    }
                    console.log(qualityIndicator);
                }
            
                ranking.sort((a, b) => b.qualityIndicator - a.qualityIndicator);
            
                let rankingTable = document.getElementById("customRanking");
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
            }
            else{
                alert("Wybrano cechy, dla których niektóre anime nie są określone (mają wartość -1)");
            }
        }
        else{
            alert("Wagi nie są poprawnie podane (muszą być dodatnią wartością liczbową)");
        }
    }
    else{
        alert("Musisz dodać jakieś cechy")
    }
    
}

function allWeightsArePositive(){
    let result = true;
    for(let q=0; q<qualitiesNum; q++){
        const weight = document.getElementById(`weight${q}`);
        if(weight.value <= 0 || isNaN(weight.value)){
            result = false;
        }
    }
    return result;
}

function areQualitiesDefined(){
    let result = true;
    let ignoreUndefined = document.getElementById('ignoreUndefined');
    if(ignoreUndefined.checked){
        return true;
    }
    const animeList = (() => {
        const fieldValue = localStorage.getItem('animeList2');
        return fieldValue === null
          ? []
          : JSON.parse(fieldValue);
    })();
    for(let a=0; a<animeList.length; a++){
        for(let q=0; q<qualitiesNum; q++){
            const quality = document.getElementById(`quality${q}`);
            if(animeList[a][quality.value]==-1){
                result = false;
            }
        }
    }
    return result;
}