
class Invitado {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }

    saludar() {
       return  alert (`Bienvenido Sr: ${this.apellido}, ${this.nombre}`);
    }
}


const arrayTipoPropiedad = ["Casa", "Departamento", "PH","Terreno"];
const arrayTipoOperacion = ["Venta", "Alquiler"];
const arrayPrecioMinimo= [0, 10000, 50000, 100000,500000];
const arrayPrecioMaximo= [0, 10000, 50000, 100000,500000,1000000,5000000];

//Array de propiedades
const propiedadesArray = [
    {
        img: "img/casas/casa2.jpg",
        title: "Casa con cochera",
        descripcion: "Hermosa casa en barrio de Villa Devoto",
        bedrooms: "4",
        bathrooms: "2",
        area: 20,
        price: 310000,
        type: "Casa",
        zone: "devoto",
        operacion:"Venta",
        fecha: new Date("2023-6-15"),
        promocion:"si"
    },
    {
        img: "img/casas/casa3.jpg",
        title: "Vivienda familiar - 3 AMB",
        descripcion: "Vivienda urbana moderna, recientemente reformada",
        bedrooms: "2",
        bathrooms: "1",
        area: 120,
        price: 122000,
        type: "Casa",
        zone: "devoto",
        operacion:"Venta",
        fecha:new Date("2023-6-15"),
        promocion:"si"
    },
    {
        img: "img/casas/casa4.jpg",
        title: "Casa  Reciclada",
        descripcion: "Vivienda familiar en barrio residencial muy solicitado",
        bedrooms: "3",
        bathrooms: "2",
        area: 150,
        price: 150000,
        type: "Casa",
        zone: "devoto",
        operacion:"Venta",
        fecha:new Date("2023-6-15"),
        promocion:"si"
    },
    {
        img: "img/casas/casa5.jpg",        
        title: "Residencia de Lujo",
        descripcion: "Residencia de Lujo con cochera y pileta",
        bedrooms: "2",
        bathrooms: "4",
        area: 280,
        price: 340000,
        type: "Casa",
        zone: "paternal",
        operacion:"Venta",
        fecha:new Date("2022-1-15"),
        promocion:"si"
    },
    {
        img: "img/casas/casa6.jpg",        
        title: "Lujosa propiedad",
        descripcion: "En el centro del barrio de devoto",
        bedrooms: "2",
        bathrooms: "12",
        area: 250,
        price: 250000,
        type: "Casa",
        zone: "paternal",
        operacion:"Venta",
        fecha:new Date("2022-1-15"),
        promocion:"si"
    },
    {
        img: "img/casas/casa1.jpg",
        title: "Amplio casa de Barrio",
        descripcion: "Casa con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista ",
        bedrooms: "2",
        bathrooms: "2",
        area: 250,
        price: 120000,
        type: "Casa",
        zone: "villa del parque",
        operacion:"Alquiler",
        fecha:new Date("2022-1-15"),
        promocion:"si"
    },
    {
        img: "img/departamentos/dto1.jpg",
        title: "heroso departamento con cochera",
        descripcion: "Cercana a colegios, parques, hospitales",
        bedrooms: "2",
        bathrooms: "12",
        area: 80,
        price: 110000,
        type: "Departamento",
        zone: "villa del Parque",
        operacion:"Alquiler",
        fecha:new Date("2022-1-15"),
        promocion:"no"
    },
    {
        img: "img/departamentos/dto2.jpg",
        title: "herosa casa con cochera",
        descripcion: "casa en barrio de devoto...",
        bedrooms: "2",
        bathrooms: "1",
        area: 120,
        price: 190000,
        type: "Departamento ",
        zone: "devoto",
        operacion:"Alquiler",
        fecha:new Date("2023-1-15"),
        promocion:"no"
    },
    {
        img: "img/departamentos/dto3.jpg",
        title: "Departamenro a estrenar",
        descripcion: "apartamento para estrenar , luminoso",
        bedrooms: "2",
        bathrooms: "1",
        area: 250,
        price: 150000,
        type: "Departamento",
        zone: "paternal",
        operacion:"Alquiler",
        fecha:new Date("2023-1-15"),
        promocion:"no"
    },
    {
        img: "img/departamentos/dto4.jpg",
        title: "Departamento como nuevo",
        descripcion: "departamento  de 3 habitaciones que goza de increíbles vistas sobre la ciudad",
        bedrooms: "2",
        bathrooms: "12",
        area: 50,
        price: 350000,
        type: "Casa",
        zone: "villa del parque",
        operacion:"Alquiler",
        fecha:new Date("2023-1-15"),
        promocion:"no"
    },
    {
        img: "img/departamentos/dto5.jpg",
        title: "4 Ambientes con cochera",
        descripcion: "Se vende un 7º piso recién reformado con 3 habitaciones y garaje",
        bedrooms: "3",
        bathrooms: "2",
        area: 130,
        price: 300000,
        type: "Departamento",
        zone: "devoto",
        operacion:"Venta",
        fecha:new Date("2023-1-15"),
        promocion:"no"
    },
    {
        img: "img/ph/ph1.webp",
        title: "Ph 3 Ambientes",
        descripcion: "Ph 3 Amb · Terraza Propia",
        bedrooms: "2",
        bathrooms: "1",
        area: 90,
        price: 300000,
        type: "PH",
        zone: "devoto",
        operacion:"Venta",
        fecha:new Date("2023-1-15"),
        promocion:"no"
    },
    {
        img: "img/departamentos/dto5.jpg",
        title: "Ph 4 Ambientes",
        descripcion: "Ph 4 Ambientes - Jardín Al Frente Y Al Fondo",
        bedrooms: "3",
        bathrooms: "2",
        area: 120,
        price: 170000,
        type: "PH",
        zone: "villa del parque",
        operacion:"Venta",
        fecha:new Date("2010-1-15"),
        promocion:"no"
    },
]

//Creo copia  del array propiedades para poder ordenarlo por fecha y mostrarlo en "ultimas Propiedades"
let arrayPropiedadesOrdenadasFecha = propiedadesArray.map(function (objeto) {
    return { ...objeto };
});

arrayPropiedadesOrdenadasFecha.sort(function (a, b) {
    var fechaA = a.fecha;
    var fechaB = b.fecha;
    return fechaB - fechaA;
});


//Array de vendedores
const vendedoresArray = [
    {
        nombre: "Diego",
        apellido: "Dalera",
        edad:25,
        cargo: "Supervisor",
    },
    {
        nombre: "Fabian",
        apellido: "Rago",
        edad:29,
        cargo: "gerente",
    },
    {
        nombre: "Maria",
        apellido: "Tobal",
        edad:45,
        cargo: "vendedor",
    },
    {
        nombre: "Nora",
        apellido: "Carpena",
        edad:32,
        cargo: "vendedor",
    },
    {
        nombre: "Daniela",
        apellido: "Vargas",
        edad:26,
        cargo: "vendedor",
    }
]
