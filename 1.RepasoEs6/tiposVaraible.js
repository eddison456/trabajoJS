/**
 * explicar var
 * 
 */

function explicarVAR(){
    var edad =10;
    edad=20;
    var edad =30;

    if(true){
        var edad =40;
        console.log(edad);
    }
    console.log(edad);
}

explicarVAR();


/**
 * explicar const
 * 
 */
function explicarCONST(){
    const valor =10;
   // valor=20;

    if(true){
        const valor =40;
        console.log(valor);
    }
    console.log(valor);
}


explicarCONST();

/**
 * explicar let
 * 
 */
function explicarLET(){
    let cantidad =10;
   cantidad=20

    if(true){
        let cantidad =40;
        console.log(cantidad);
    }
    console.log(cantidad);
}

explicarLET();


/**
 * explicar const
 * 
 */

function explicarCO(){
    const valor =10;
   // valor=20;
   const teams=["barcelona","psg"]

   console.log(teams);

    if(true){
        const valor =40;
        console.log(valor);
    }
    console.log(valor);

    teams.push("madrid");
    console.log(teams[0]);
}


explicarCO();

