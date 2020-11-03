function Print_Modal() {

    let var_modal = document.getElementById("print_modal");
    var_modal.innerHTML += `
        <div class="modal fade" id="comand" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Pedido</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                
                <div id="Poster">
                    <form class="form-inline my-2 my-lg-0">
                    <h5>Póster: </h5>
                    <h5 id="poster_title">  </h5>
                    </form>
                </div>

                <div id="Cantidad">
                    <form class="form-inline my-2 my-lg-0">
                    <h5>Cantidad: </h5>
                    <input id="search_input" size="4">
                    </form>
                </div>
                <div id="Precio">
                    <form class="form-inline my-2 my-lg-0">
                    <h5>Precio: </h5>
                    <h5>130 €</h5>
                    </form>
                </div>
                <div id="Medida">
                    <form class="form-inline my-2 my-lg-0">
                    <h5>Medida: </h5>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-info">
                        <input type="radio" name="options" id="option1" autocomplete="off"> Pequeño
                        </label>
                        <label class="btn btn-info">
                        <input type="radio" name="options" id="option2" autocomplete="off"> Medio
                        </label>
                        <label class="btn btn-info">
                        <input type="radio" name="options" id="option3" autocomplete="off"> Grande
                        </label>
                    </div>
                    </form>
                </div>
                <div id="Condiciones">
                    <form class="form-inline my-2 my-lg-0">
                    <a href="#">Leer Condiciones</a>
                    </form>
                </div>

                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary">Realizar Pedido</button>
                </div>
            </div>
            </div>
        </div> 
        `
}

Print_Modal();

function handdleButtonOrder() {
    let aBtn = document.querySelectorAll(".btn-buy");
    if (aBtn) {
        aBtn.forEach(item => {
            item.addEventListener("click", function () {

                let idFilm = item.getAttribute("data-card");
                let tagPostName = document.querySelector("#poster_title");

                let title = document.querySelector("#card-" + idFilm + " h3").innerHTML;
                tagPostName.innerHTML = title;
            });
        });
    }
}