var edad=20;
var dinero =5;
var nombre="jose";
var animal="perro";
if(edad>25){
    console.log("isabel es mayor");

}else{ console.log("tu eres menor");

}

if(dinero<10){
    console.log("puedes comprar una paeta");

}else{ console.log("te falta dinero");

}

if(nombre>"jose"){
    console.log("el es Juan  no es Jose");
}else{ console.log("El si es Jose");

}


if(dinero=30){
    console.log("este numero es igual a 30");
}else{ console.log("el numero no es igual a 30");

}


if(animal="gato"){
    console.log("este no es un perro");
}else{ console.log("el si es un perro");

}

var nombre="isabel";
var genero="femenino";
switch(nombre,genero){
    case nombre="isabel":
    case genero="femenino":
        console.log("ella es isabel y es de genero femenino");
        break;
        case nombre="juan":
        case genero="masculino":
            console.log("el es juan y es de genero masculino");
            break;
}

var numero=10;
switch(numero){
    case numero<10:
        console.log("el numero es menor que 10");
        break;
        case numero<10:
            console.log("el numero es mayor que 10");
            default:
                console.log(" el numero es igual");
                break;

}

var precio=160;
switch(precio){
    case precio=170:
        console.log("el precio es mayor a 160");
        break;
        case precio =150:
            console.log("el precio es justo al 160");
            break;
}

var animal="perro";
var animal2="gato";

switch(animal,animal2){
    case animal="perro":
    case animal2="gato":
        console.log("tienes un perro y un gato");
        break;
        case animal="pato":
        case animal2="pez":
            console.log("tienes un pato y un pez");
            default:
                console.log("no tiene mascota");

            break;
}

var color ="verde";
var color2="azul"

switch(color,color2){
    case color="verde":
    case color2="blanco":
            console.log("tu color es verde y gris");
    break;
     case color="negro":
     case color2="gris":
     console.log("tu color es negro y gris");
    default:
     console.log("tu color no se encuentra");

 
}

var color1="verde";
var numero=10;
var numero2=20;
switch(color1){
    case color1="verde":
    if(numero2>numero){
        console.log("numero2 es mayor");

    }else{
        console.log("numero2 es menor");

    }
    break;
    default:
        console.log("es otro");
        break;

}

var flor="rosa";
var precio=30;
switch(flor){
    case flor="rosa":
    if(precio=30){
        console.log("el precio es el correcto");

    }else{
        console.log("esta no esta disponible");
       

    }
    break;
    case flor="violeta":
        console.log("tu flor no esta");
        default:
            console.lo7("busa otra");

}

var nombre1="pedro";
var edad1=20;
switch(nombre1){
    case nombre1="carlos":
        if(edad>20){
            console.log("carlos es mayor");
        }else{
            console.log("esto es incorrecto");
        }
        break;
        case nombre1="pedro":
            if(edad1=20){
                console.log("este es pedro y la edad es la correcta");

            } 
            break;
            default:
                console.log("busca a otro");
}

dinero=10;
producto="pelota";
switch(dinero){
    case dinero=10:
    if(producto="pelota"){
        console.log("puedes comprar este producto");

    }else{
        console.log("no puedes comprar este producto");

    }
    break;
    case dinero=5:
        console.log("no tienes dinero suficiente");
        break;
        default:
            console.log("busca otro");
}

var fruta="fresa";
 var precio3=22;
 switch(fruta){
     case fruta="fresa":
     if(precio3=22){
         console.log("tienes suficiente dinero");

     }else{
         console.log("no tienes dinero suficiente");
     }
     break;
     case fruta="pera":
         if(precio=15){
             console.log(" tu fruta es pera");
         }else{
             console.log("tu precio es diferente");
         }
         break;
         default:
             console.log("busca otro");
 }
