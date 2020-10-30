function Get_Series() {
    fetch("/data/data.json")
        .then(result => result.json())
        .then(data => {
            let content = document.getElementById("print_films");;
            for (let serie of data.films) {
                content.innerHTML += `
                <div id="text-align" class="col-4">

                    <div id="img">
                        <img src="${serie.img}" width="300px" height="450px">
                    </div>

                    <div id="titulo">
                        <h3> ${serie.titulo} </h3>
                    </div>

                    <div id="duracion">
                        <p> Duración: ${serie.duracion} </p>
                    </div>

                    <div id="director">
                        <p> Director: ${serie.director} </p>
                    </div>

                    <div id="genero">
                        <p> Género: ${serie.genero} </p>
                    </div>

                    <div id="div_stars">
                        <h4> STARS </h4>
                    </div>

                    <div id="stars">
                        <p> ${serie.stars[0]} </p>
                        <p> ${serie.stars[1]} </p>
                        <p> ${serie.stars[2]} </p>
                    </div>

                    <button id="btn_modal_comprar" data-toggle="modal" data-target="#comand" type="button" class="btn btn-info btn-sm">Comprar</button>

                </div>
                `
            }
        });
}

export { Get_Series };