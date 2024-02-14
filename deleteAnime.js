function deleteAnime(){
    var idx = document.getElementById("usun_anime").value;
    const fieldValue = localStorage.getItem('animeList2');
    const animeList = (() => {
        return fieldValue === null
          ? []
          : JSON.parse(fieldValue);
    })();
    if (idx >= 0 && idx < animeList.length){
        animeList.splice(idx, 1);
    }
    else{
        alert('Niepoprawny indeks');
    }
    localStorage.setItem('animeList2', JSON.stringify(animeList));
    listAnime();
}