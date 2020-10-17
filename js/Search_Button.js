function Search_Button_Terminator() {
    let button = document.getElementById('search_input').value;

    if (button.match("terminator")) {

        fetch("json/films.json")
            .then((result) => result.json())
            .then((data) => {
                let content = document.getElementById('Pelicula-1');
                content.innerHTML = `
            
            <img src="${"img/photo-1.jpg"}" width="200px" height="300>

            <div id="titles">
                <h3>${data.films['0'].titulo}</h3>
            </div>
            
            <p>Duraccion: ${data.films['0'].duracion}</p>
            <p> Director: ${data.films['0'].director} </p>
            <p> Genero: ${data.films['0'].genero} </p>
            
            <div id="titles"> 
                <h4> Stars </h4>
            </div>

            <div class="something"> <p>${data.films['0'].stars['0']}</p> </div>
            <div class="something"> <p>${data.films['0'].stars['1']}</p> </div>
            <div class="something"> <p>${data.films['0'].stars['2']}</p> </div>

            <button id="button_Terminator" type="button" class="btn btn-info btn-sm">Comprar</button>

              `
            });

    }

    else {

        return true;
    }
}


function Search_Button_Alien() {
    let button = document.getElementById('search_input').value;

    if (button.match("alien")) {

        fetch("json/films.json")
            .then((result) => result.json())
            .then((data) => {
                let content = document.getElementById('Pelicula-2');
                content.innerHTML = `
            <img src="${"img/photo-2.jpg"}" width="200px" height="300>

            <div id="titles">
                <h3>${data.films['1'].titulo}</h3>
            </div>

               <p>Duraccion: ${data.films['1'].duracion}</p>
                <p> Director: ${data.films['1'].director} </p>
                <p> Genero: ${data.films['1'].genero} </p>
                
                <div id="titles"> 
                    <h4> Stars </h4>
                </div>
                
                <p>${data.films['1'].stars['0']}</p>
                <p>${data.films['1'].stars['1']}</p>
                <p>${data.films['1'].stars['2']}</p>

                <button id="button_Alien" type="button" class="btn btn-info btn-sm">Comprar</button>

                `
            });

    }

    else {

        return true;
    }
}


function Search_Button_Matrix() {
    let button = document.getElementById('search_input').value;

    if (button.match("matrix")) {

        fetch("json/films.json")
            .then((result) => result.json())
            .then((data) => {
                let content = document.getElementById('Pelicula-3');
                content.innerHTML = `
            <img src="${"img/photo-3.jpg"}" width="200px" height="300>

            <div id="titles">
                <h3>${data.films['2'].titulo}</h3>
            </div>

               <p>Duraccion: ${data.films['2'].duracion}</p>
                <p> Director: ${data.films['2'].director} </p>
                <p> Genero: ${data.films['2'].genero} </p>
                
                <div id="titles"> 
                    <h4> Stars </h4>
                </div>
                
                <p>${data.films['2'].stars['0']}</p>
                <p>${data.films['2'].stars['1']}</p>
                <p>${data.films['2'].stars['2']}</p>

                <button  id="button_Matrix" type="button" class="btn btn-info btn-sm">Comprar</button>
              `
            });

    }

    else {

        return true;
    }
}


export { Search_Button_Terminator, Search_Button_Alien, Search_Button_Matrix };