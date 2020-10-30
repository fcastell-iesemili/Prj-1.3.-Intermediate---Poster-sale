function Get_Films() {
    fetch("/data/data.json")
        .then(result => result.json())
        .then(data => {
            let content = document.getElementById("print_films");;
            for (let film of data.films) {
                content.innerHTML += `
                <div id="text-align" class="col-4">

                    <div id="img">
                        <img src="${film.img}" width="300px" height="450px">
                    </div>

                    <div id="titulo">
                        <h3> ${film.titulo} </h3>
                    </div>

                    <div id="duracion">
                        <p> Duración: ${film.duracion} </p>
                    </div>

                    <div id="director">
                        <p> Director: ${film.director} </p>
                    </div>

                    <div id="genero">
                        <p> Género: ${film.genero} </p>
                    </div>

                    <div id="div_stars">
                        <h4> STARS </h4>
                    </div>

                    <div id="stars">
                        <p> ${film.stars[0]} </p>
                        <p> ${film.stars[1]} </p>
                        <p> ${film.stars[2]} </p>
                    </div>

                    <button id="btn_modal_comprar" data-toggle="modal" data-target="#comand" type="button" class="btn btn-info btn-sm">Comprar</button>

                </div>
                `
            }
        });
}

export { Get_Films };