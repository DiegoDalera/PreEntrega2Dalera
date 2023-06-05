

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



function cargarInicio() {
  saludarInvitado();
  mostrarEmpleados();
  buscarPropiedadesConPrompt();
}


cargarInicio();
