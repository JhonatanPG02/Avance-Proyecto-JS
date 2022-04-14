// Realizaremos un pedido de combo: Hamburguesa + Bebida


let nombre;

// Aplicaremos un Do while para descartar ingreso de numeros o datos vacios.

do {
    nombre = prompt("Ingrese su nombre")
    if (nombre === "" || nombre === null){
        alert(`ERROR! debe ingresar un nombre valido`);
    } else {
        alert(`Bienvenido a la tienda REY BURGER online ${nombre}! \n
        Vamos a tomar el pedido de tu combo`)
    }
} while(nombre === "" || nombre === null) 


// Incluiremos 2 Array de objetos, con los valores de las Hamburguesas y Bebidas, además de ID, precio y tamaño.
// Esto permitirá dar opciones al cliente y tener datos necesarios para aplicar precio y generar el ticket.


const totalBurger = [{ID: 1, Burger: "clasica", Price: "8", Size: "mediano"},
                     {ID: 2, Burger: "clasica", Price: "10", Size: "grande"},
                     {ID: 3, Burger: "royal", Price: "10", Size: "mediano"},
                     {ID: 4, Burger: "royal", Price: "14", Size: "grande"},
                     {ID: 5, Burger: "suprema", Price: "16", Size: "mediano"},
                     {ID: 6, Burger: "suprema", Price: "20", Size: "grande"}]





const totalDrink = [{ID: 1, Drink: "coca cola", Price: "3", Size: "mediano"},
                    {ID: 2, Drink: "coca cola", Price: "5", Size: "grande"},
                    {ID: 3, Drink: "pepsi", Price: "2", Size: "mediano"},
                    {ID: 4, Drink: "pepsi", Price: "4", Size: "grande"},
                    {ID: 5, Drink: "fanta", Price: "1.5", Size: "mediano"},
                    {ID: 6, Drink: "fanta", Price: "3", Size: "grande"}]

let burger;
let drink;


let burgerSize;

// Aplicaremos un Do while para solicitar el tipo de tamaño de hamburguesa, con la finalidad de aplicar filter más adelante.

do {
    burgerSize = prompt(`Indique el tamaño de su Hamburguesa: "Mediano" o "Grande"`)

    if(burgerSize) burgerSize = burgerSize.toLowerCase();

    if ((burgerSize != "mediano" && burgerSize != "grande") || burgerSize === "" || burgerSize === null){
        alert(`ERROR! debe ingresar un tamaño valido`);
    } else {
        alert(`Gracias, el siguiente paso es elegir el tipo de hamburguesa`)
    }
} while((burgerSize != "mediano" && burgerSize != "grande") || burgerSize === "" || burgerSize === null)




// Armaremos la funcion Hamburguesa para luego invocarla.
function pedidoHamburguesa(){

   
//Aplicaremos el Do while, si el pedido es distinto a las 3 opciones o no ingresa dato/cancela, se repite el bucle

do {
    burger = prompt(`Ingrese una de las 3 disponibles: "Clasica", "Royal", "Suprema"`);
    
    if(burger) burger = burger.toLowerCase()

    if((burger != "clasica" && burger != "royal" && burger != "suprema") || burger === "" || burger === null) {
        alert(`ERROR! debes elegir entre las 3 opciones`);
    } else {  
        
        alert(`El pedido de tu hamburguesa es una "${burger}"`);
    }
} while ((burger != "clasica" && burger != "royal" && burger != "suprema") || burger === "" || burger === null)
       
}


pedidoHamburguesa();



let drinkSize;

// Aplicaremos un Do while para solicitar el tipo de tamaño de Bebida, con la finalidad de aplicar filter más adelante.


do {
    drinkSize = prompt(`Indique el tamaño de su Bebida: "Mediano" o "Grande"`)

    if(drinkSize) drinkSize = drinkSize.toLowerCase()

    if ((drinkSize != "mediano" && drinkSize != "grande") || drinkSize === "" || drinkSize === null){
        alert(`ERROR! debe ingresar un tamaño valido`);
    } else {
        alert(`Gracias, el siguiente paso es elegir el tipo de bebida`)
    }
} while((drinkSize != "mediano" && drinkSize != "grande") || drinkSize === "" || drinkSize === null)





// Armaremos la funcion Bebida para luego invocarla.
function pedidoBebida(){

    
// Aplicaremos un Do while, si el pedido es distinto a las 3 opciones o no ingresa dato/cancela, se repite el bucle

    do{
        drink = prompt(`Ingrese una de las 2 disponibles: "Coca Cola", "Pepsi", "Fanta"`);
    
        if(drink) drink = drink.toLowerCase();

        if ((drink != "coca cola" && drink != "pepsi" && drink != "fanta") || (drink === "")){
            alert(`ERROR! debes elegir entre las 3 bebidas`);
        } else {
            alert(`El pedido de tu bebida es una "${drink}"`)
        }
    } while ((drink != "coca cola" && drink != "pepsi" && drink != "fanta") || (drink === ""))
    
    }

    pedidoBebida();

    let ticket = []
    

    function precioProducto(){

  // Para el precio, aplicaremos un for para determinar la concidencia del valor Hamburguesa/refreso y obtener su precio.
  // Aplicaremos el metodo "FILTER" para obtener nuevo array con los productos según tamaño que el ciente eligió y aplicar precio.
  // Aplicaremos también el metodo "FIND" para obtener solo el objeto segun el ID del nuevo array obtenido por FILTER.
  // Por último aplicaremos el metodo "PUSH" para agregar los objetos de hamburguesa y refresco en nuevo array que será el ticket.
  // Estamos aplicando el metodo length para la validacion del dato requerido en toda su lengitud del array de objetos.

    let typeBurger = totalBurger.filter(Element => Element.Size === burgerSize)

        for(let i=0; i<typeBurger.length; i++) {
            if(typeBurger[i].Burger === burger) {
                alert(`El precio de tu Hamburguesa ${burger} ${burgerSize} es de: ${typeBurger[i].Price}$`)
                let burgerTicket = typeBurger.find((el) => el.ID === typeBurger[i].ID)
                ticket.push(burgerTicket)
         }
        }

        let typeDrink = totalDrink.filter(Element => Element.Size === drinkSize)

        for(let i=0; i<typeDrink.length; i++) {
            if(typeDrink[i].Drink === drink) {
                alert(`El precio de tu Bebida ${drink} ${drinkSize} es de: ${typeDrink[i].Price}$`)
                let drinkTicket = typeDrink.find((el) => el.ID === typeDrink[i].ID)
                ticket.push(drinkTicket)
            }
        }
    
        alert(`Gracias por tu compra!`) 
    return ticket    
}

    
precioProducto();
console.log(ticket);

