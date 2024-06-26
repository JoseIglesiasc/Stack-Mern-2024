const info = {



    personal: {



        nombre: 'Carlos',



        apellido: 'Vega',



        detalles: {



            edad: 30,



            ocupacion: 'Ingeniero'



        }



    }



};



const { personal: { detalles: { edad, salario } } } = info;



console.log(edad);



console.log(salario);

// 30, Undefined

1.

const objetoA = { a: 1, b: 2, c: 3 };



const objetoB = { b: 4, c: 5, d: 6 };



const resultado = { ...objetoA, ...objetoB };



console.log(resultado);

//  1,4,5,6





2.

function verificar() {



    if (true) {



        const a = 2;



        let b = 3;



        var c = 4;



    }



    console.log(c);



    console.log(a);



    console.log(b);



}



verificar();

// Error, error, 4



3.

const datos = Object.freeze({ nombre: 'Luis', edad: 29 });



datos.edad = 30;



console.log(datos.edad);

// 29




4.

const original = [1, 2, 3];



const nuevo = original.concat(4);



console.log(original);



console.log(nuevo);



// 1,2,3, 1,2,3,4



5.



const frutas = ['manzana', 'naranja', 'pera', 'mango'];



const [primera, segunda] = frutas;



console.log(primera);



console.log(segunda);

// manzana, naranja



6.

for (let i = 0; i < 3; i++) {



    for (let i = 0; i < 2; i++) {



        console.log(i);



    }



}

// 0,1,0,1,0,1




7.

const objeto1 = { a: 1, b: 2 };



const objeto2 = { b: 3, c: 4 };



const combinado = { ...objeto1, ...objeto2 };



console.log(combinado);

// 1,3,4





8.

const numeros1 = [1, 2, 3];



const numeros2 = [3, 4, 5];



const combinados = [...numeros1, ...numeros2];



console.log(combinados);



// 1,2,3,3,4,5




9.

function demostracion() {



    var nombre = 'Ana';



    let edad = 25;



    if (true) {



        var nombre = 'Luis';



        let edad = 30;



    }



    console.log(nombre);



    console.log(edad);



}



demostracion();

// Luis, 25
