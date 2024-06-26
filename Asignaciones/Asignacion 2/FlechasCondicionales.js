1.




const celsius = (fahrenheit) =>{

  return (fahrenheit - 32) * 5/9;

};

console.log(celsius(98));



2.



const persona = {nombre: "Juan", edad: 30};



function nombreCompleto(persona) {

    return "Hola " + persona.nombre + " tienes " + persona.edad + " años";

}



console.log(nombreCompleto(persona));



3.



const millas = (kilometros) =>{

    return kilometros / 1.60934;

}

console.log(millas(10));



4.



function consejo(clima) {

    if (clima === "lluvia") {

        return "Lleva un paraguas";

    } else if (clima === "sol") {

        return "Lleva sombrero";

    } else if (clima === "nieve") {

        return "Lleva guantes";

    } else {

        return "No sé qué consejo darte";

    }

}

console.log(consejo("sol"));