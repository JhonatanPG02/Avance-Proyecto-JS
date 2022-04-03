// Realizaremos un pedido de combo: Hamburguesa + Bebida

let nombre;

// Aplicaremos un while para descartar ingreso de numeros o cancele la solicitud
while(nombre == undefined || nombre == parseInt(nombre)) {

    nombre = prompt("Ingrese su nombre")
    if (nombre == undefined || nombre == parseInt(nombre)){
        alert(`ERROR! debe ingresar un nombre valido`);
    } else {
        alert(`Bienvenido a la tienda REY BURGER online ${nombre}! \n
        Vamos a tomar el pedido de tu combo`);
    }
}



let hamburguesa;

// Armaremos la funcion Hamburguesa para luego invocarla.
function pedidoHamburguesa(){

   alert(`Paso 1: Vamos a tomar el pedido de tu Hamburguesa \n
   Tienes las siguientes opciones: \n
   * Hamburguesa Clasica = 8$ \n
   * Hamburguesa Royal = 10$ \n
   * Hamburguesa Suprema = 15$`)
// Si el pedido es distinto a las 3 opciones o cancela el promp, se repite el bucle
    while ((hamburguesa != "clasica" && hamburguesa != "royal" && hamburguesa != "suprema") || (hamburguesa == undefined)) {
        hamburguesa = prompt(`Ingrese una de las 3 disponibles: "Clasica", "Royal", "Suprema"`);
    
        if(hamburguesa) hamburguesa = hamburguesa.toLowerCase()
    
    
        if((hamburguesa != "clasica" && hamburguesa != "royal" && hamburguesa != "suprema") || (hamburguesa == undefined)) {
            alert(`ERROR! debes elegir entre las 3 opciones`);
        } else {  
            alert(`El pedido de tu hamburguesa es una "${hamburguesa}"`);
        }
}
}

pedidoHamburguesa();


let bebida;

// Armaremos la funcion Bebida para luego invocarla.
function pedidoBebida(){

    alert(`Paso 2: Vamos a tomar el pedido de tu Bebida \n
    Tienes las siguientes opciones: \n
    * Bebida Coca Cola = 3$ \n
    * Bebida Pepsi = 2$`)
// Si el pedido es distinto a las 2 opciones o cancela el promp, se repite el bucle
    while ((bebida != "coca cola" && bebida != "pepsi") || (bebida == undefined)) {
        bebida = prompt(`Ingrese una de las 2 disponibles: "Coca Cola", "Pepsi"`)

        if(bebida) bebida = bebida.toLowerCase()
    
        if ((bebida != "coca cola" && bebida != "pepsi") || (bebida == undefined)){
            alert(`ERROR! debes elegir entre las 2 bebidas`);
        } else {
            alert(`El pedido de tu bebida es una "${bebida}"`)
        }
    }
    }

    pedidoBebida();

    // Calculando el precio del combo solicitado.
  
    let precioHamburguesa = 0;
    let precioBebida = 0;


    function precioTotal(){
         
        if(hamburguesa == "clasica") {
            precioHamburguesa = 8
            alert(`El precio de tu Hamburguesa ${hamburguesa} es de: ${precioHamburguesa}$`)
        } else if (hamburguesa == "royal") {
            precioHamburguesa = 10
            alert(`El precio de tu Hamburguesa ${hamburguesa} es de: ${precioHamburguesa}$`)
        } else if (hamburguesa == "suprema"){
            precioHamburguesa = 15
            alert(`El precio de tu Hamburguesa ${hamburguesa} es de: ${precioHamburguesa}$`)
        }

        if(bebida == "coca cola") {
        precioBebida = 3
        alert(`El precio de tu Bebida ${bebida} es de: ${precioBebida}$`)
        } else if (bebida == "pepsi") {
        precioBebida = 2
        alert(`El precio de tu Bebida ${bebida} es de: ${precioBebida}$`)  
        }

        let precioTotal = precioHamburguesa + precioBebida
        alert(`El precio total de tu combo es de ${precioTotal}$`)
        alert(`Gracias por tu compra, que disfrutes tu pedido!`)
    }

    
   
    precioTotal();



