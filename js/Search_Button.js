function Search_Button() {
    fetch('json/films.json')
        .then(result => result.json())
        .then(data => {
            let txtSearch = document.getElementById("search_input").value;
            txtSearch = txtSearch.toLowerCase();

            let listFilms = data.films.titulo;

            let titulo = listFilms.filter(
                (item) =>
                    txtSearch.toLowerCase() == item.name.toLowerCase()
            );
            if (titulo && titulo.length > 0) {
                printFilms(titulo);
            }
            else {
                return false;
            }
        })
}

export { Search_Button };