const urlBase = "http://localhost:5267";

const mostrar = () => {
  const urlgetAll = urlBase + "/api/Eventos";
  //http://localhost:5267/api/Eventos
  fetch(urlgetAll)
    .then((response) => {
      const status = response.status;
      if (status === 200) return response.json();
      else return undefined;
    })
    .then((data) => {
      if (data === undefined) console.log("sin respuesta del servidor");
      else {
        const list_estudiantes = document.getElementById("list-eventos");
        list_estudiantes.innerHTML = "";
        let fragment = document.createDocumentFragment();
        data.forEach((eventos, index) => {
          var city=parseInt (eventos.ubicacion);
          var ciudad="";
          if (city===1) {
            ciudad="San Javier";
          }if (city===2) {
            ciudad="Santiago";
          } if(city===3){
            ciudad="Rancagua";
          };
          

          let contenedor = document.createElement("div");
          contenedor.className = "col-md-12 mt-2";
          let template = `




            <div class="card mb-3" style="max-width: 720px;">
              <div class="row g-0">
                <div class="col-md-4">
                <img src="${eventos.imagen}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title"> ${eventos.tituloEvento}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${ciudad}</h6>
                <p class="card-text"> ${eventos.detalles}</p>
                <p class="card-text"> Evento a realizarse el: ${eventos.fecha} a las: ${eventos.hora}</p>
                <p class="card-text">Estado: ${eventos.estado}
                <a class="btn btn-primary" target="_blank" href="${eventos.link}" role="button">Mas informacion...</a>
                </div>
              </div>
            </div>
</div>
          `;
          contenedor.innerHTML = template;
          fragment.appendChild(contenedor);
        });
        list_estudiantes.appendChild(fragment);

     
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const filtrar= () =>{
  let id_find= parseInt(document.getElementById("filtro").value);
  const url_product_find="/api/Eventos/Buscar/"+id_find;
  const options={
      method: "GET", // or 'PUT
      headers: {
        "Content-Type": "application/json",
  }
}
fetch(urlBase + url_product_find, options)
.then((respuesta) => {
if (respuesta.status === 200) {
  return respuesta.json();
} else {
  return undefined;
}
})
.then((data) => {
  if (data === undefined) console.log("sin respuesta del servidor");
  else {
    const list_estudiantes = document.getElementById("list-eventos");
    list_estudiantes.innerHTML = "";
    let fragment = document.createDocumentFragment();
    data.forEach((eventos, index) => {
      var city=parseInt (eventos.ubicacion);
      var ciudad="";
      if (city===1) {
        ciudad="San Javier";
      }if (city===2) {
        ciudad="Estadio Nacional, Santiago";
      } if(city===3){
        ciudad="Rancagua";
      };
      

      let contenedor = document.createElement("div");
      contenedor.className = "col-md-12 mt-2";
      let template = `




        <div class="card mb-3" style="max-width: 720px;">
          <div class="row g-0">
            <div class="col-md-4">
            <img src="${eventos.imagen}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title"> ${eventos.tituloEvento}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${ciudad}</h6>
            <p class="card-text"> ${eventos.detalles}</p>
            <p class="card-text"> Evento a realizarse el: ${eventos.fecha} a las: ${eventos.hora}</p>
            <p class="card-text">Estado: ${eventos.estado}
            <a class="btn btn-primary" target="_blank" href="${eventos.link}" role="button">Mas informacion...</a>
            </div>
          </div>
        </div>
</div>
      `;
      contenedor.innerHTML = template;
      fragment.appendChild(contenedor);
    });
    list_estudiantes.appendChild(fragment);

 
  }
})
.catch((error) => console.log(error));

};
FontFaceSetLoadEvent(mostrar());