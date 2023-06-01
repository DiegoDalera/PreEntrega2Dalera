
const propiedadesCardsPrincipal = document.querySelector(".container");
const propiedadesCardsUltimosIngresos = document.querySelector(".container_ultimas_propiedades");
const formularioBusquedaPropiedades = document.getElementById("formulario_busqueda_propiedades");


let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


function saludarInvitado() {
  nombre = prompt("Ingresa tu nombre por favor").trim();
  apellido = prompt("ingresa tu apellido por favor").trim();
  let usuarioInvitado = new Invitado(nombre, apellido);
  usuarioInvitado.saludar();
}

function mostrarEmpleados() {
  alert('Los  vendedores de nuestra inmobiliaria son: ')
  let empleados = vendedoresArray.forEach((vendedor) => alert(`${vendedor.nombre} ${vendedor.apellido}. Cargo: ${vendedor.cargo}`));
  return empleados;
}


function buscarPropiedadesConPrompt() {

  let barrio = prompt("Ingresa el barrio dende deseas buscar propiedads (Te sugiero => devoto, villa del parque o paternal)").toLocaleLowerCase().trim();
  let propiedadesEncontradas = propiedadesArray.filter(propiedad => propiedad.zone === barrio)
  alert(`Las propiedades que encontramos en esa ubicacion son:  ${propiedadesEncontradas.length}`);

  if (propiedadesEncontradas.length === 0) {
    return alert("Gracias por visitarnos");
  } else {
    let seguir = prompt("Desea que le mostremos la descripcion (s/n)?").toLowerCase().trim();
    if (seguir === "s") {
      return mostrarPropiedadesPrompt(propiedadesEncontradas);
    } else {
      return alert("Gracias por visitarnos");
    }
  }
}


function mostrarPropiedadesPrompt(propiedadesEncontradas) {

  let resultadoBusqueda = propiedadesEncontradas.forEach((propiedad) => {
    alert(`Titulo: ${propiedad.title}, Descripcion: ${propiedad.descripcion}, Superficie: ${propiedad.area} M2, Baños: ${propiedad.bathrooms}, Habitaciones: ${propiedad.bedrooms}, Precio: $ ${propiedad.price}`)
  })

  return resultadoBusqueda;
}


function cargarPropiedadesPromocionadas() {
  let code = ``;
  propiedadesArray.forEach(function (propiedadesUnicas) {

    // Solo cargamos las propiedades promocionadas
    if (propiedadesUnicas.promocion == 'si') {
      code = code +
        `
              <div class="box">
                <div class="top">
                  <img src="${propiedadesUnicas.img}" alt="" />
                  <span
                    ><i class="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
                  ></span>
                </div>
                <div class="bottom">
                  <h3>${propiedadesUnicas.title}</h3>
                  <p> ${propiedadesUnicas.descripcion}
                  </p>
                  <div class="advants">
                    <div>
                      <span>Bedrooms</span>
                      <div><i class="fas fa-th-large"></i><span>${propiedadesUnicas.bedrooms}</span></div>
                    </div>
                    <div>
                      <span>Bathrooms</span>
                      <div><i class="fas fa-shower"></i><span>${propiedadesUnicas.bathrooms}</span></div>
                    </div>
                    <div>
                      <span>Area</span>
                      <div>
                        <i class="fas fa-vector-square"></i
                        ><span>${propiedadesUnicas.area}<span>Sq Ft</span></span>
                      </div>
                    </div>
                  </div>
                  <div class="price">
                    <span>${propiedadesUnicas.type}</span>
                    <span>${propiedadesUnicas.price}</span>
                  </div>
                </div>
              </div>`

    } else {

    }
  });

  propiedadesCardsPrincipal.innerHTML = code;
}


//Cargar opciones en los campos <select>
function cargarOpcionesBusqueda() {

  arrayTipoPropiedad.sort();
  addOpcionesPropiedad("tipo_propiedad", arrayTipoPropiedad);

  arrayTipoOperacion.sort();
  addOpcionesTipoOperacion("tipo_operacion", arrayTipoOperacion);

  arrayPrecioMinimo.sort();
  addOpcionesPrecioMinimo("precio_minimo", arrayPrecioMinimo);

  arrayPrecioMaximo.sort();
  addOpcionesPrecioMaximo("precio_maximo", arrayPrecioMaximo);
}


function addOpcionesPropiedad(domElement, arrayTipoPropiedad) {
  var select = document.getElementsByName(domElement)[0];

  for (value in arrayTipoPropiedad) {
    var option = document.createElement("option");
    option.text = arrayTipoPropiedad[value];
    select.add(option);
  }
}

function addOpcionesTipoOperacion(domElement, arrayTipoOperacion) {
  var select = document.getElementsByName(domElement)[0];

  for (value in arrayTipoOperacion) {
    var option = document.createElement("option");
    option.text = arrayTipoOperacion[value];
    select.add(option);
  }
}

function addOpcionesPrecioMinimo(domElement, arrayPrecioMinimo) {
  var select = document.getElementsByName(domElement)[0];

  for (value in arrayPrecioMinimo) {
    var option = document.createElement("option");
    option.text = arrayPrecioMinimo[value];
    select.add(option);
  }
}

function addOpcionesPrecioMaximo(domElement, arrayPrecioMaximo) {
  var select = document.getElementsByName(domElement)[0];

  for (value in arrayPrecioMaximo) {
    var option = document.createElement("option");
    option.text = arrayPrecioMaximo[value];
    select.add(option);
  }
}


// Carga solo las ultimas 4 propiedades ingresadas (por fecha ingreso)
function cargarUltimasPropiedades() {

  let code = ``;

  for (let i = 0; i <= 3; i++) {

    code = code +
          `
                <div class="box">
                      <div class="top">
                        <img src="${arrayPropiedadesOrdenadasFecha[i].img}" alt="" />
                        <span
                          ><i class="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
                        ></span>
                      </div>
                      <div class="bottom">
                        <h3>${arrayPropiedadesOrdenadasFecha[i].title}</h3>
                        <p> ${arrayPropiedadesOrdenadasFecha[i].descripcion}
                        </p>
                        <div class="advants">
                          <div>
                            <span>Bedrooms</span>
                            <div><i class="fas fa-th-large"></i><span>${arrayPropiedadesOrdenadasFecha[i].bedrooms}</span></div>
                          </div>
                          <div>
                            <span>Bathrooms</span>
                            <div><i class="fas fa-shower"></i><span>${arrayPropiedadesOrdenadasFecha[i].bathrooms}</span></div>
                          </div>
                          <div>
                            <span>Area</span>
                            <div>
                              <i class="fas fa-vector-square"></i
                              ><span>${arrayPropiedadesOrdenadasFecha[i].area}<span>Sq Ft</span></span>
                            </div>
                          </div>
                        </div>
                        <div class="price">
                          <span>${arrayPropiedadesOrdenadasFecha[i].type}</span>
                          <span>${arrayPropiedadesOrdenadasFecha[i].price}</span>
                        </div>
                      </div>
                  </div>`
  }

  propiedadesCardsUltimosIngresos.innerHTML = code;
}

function cargarInicio() {
  saludarInvitado();
  cargarPropiedadesPromocionadas();
  cargarOpcionesBusqueda();
  cargarUltimasPropiedades();
  mostrarEmpleados();
  buscarPropiedadesConPrompt();
}


cargarInicio();
