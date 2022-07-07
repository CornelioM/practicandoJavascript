/*
function estoEsUnaFuncion(){
console.log("Esto es una funcion mensaje uno");
console.log("Esto es una funcion mensaje dos");
console.log("Esto es una funcion mensaje tres");
console.log("Esto es una funcion mensaje cuatro");
}
function FuncionQueDevuelveUnaCadenaDeTexto(){
    console.log("Esto es una funcion devuelve mensaje uno");
    console.log("Esto es una funcion devuelve mensaje dos");
    console.log("Esto es una funcion devuelve mensaje tres");
    console.log("Esto es una funcion devuelve mensaje cuatro");
    return "Yo soy Cornelio Manzueta un Programador Web";
}
estoEsUnaFuncion();
FuncionQueDevuelveUnaCadenaDeTexto();
Saludar("Cornelio",29);
Saludar2(,29);
let valorDeFuncion = FuncionQueDevuelveUnaCadenaDeTexto();
console.log(valorDeFuncion);

function Saludar(nombre, edad ){
console.log(`Hola mi nombre es ${nombre} y tengo ${edad} anos`);
}
function Saludar2(nombre = "Desconocido",edad = 0){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} anos`);
}
*/
/**Arreglos video 11 */

const a = [];
const b = [1, true, "Hola", ["A", "B", "C",[1, 2, 3] ]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][0]);

const c = Array.of("X","Y","Z",9,8,7);
console.log(c);

const d =  Array(100).fill(false);
console.log(d);

const e = new Array();
console.log(e);
const f = new Array(1,2,3,true, false);
console.log(f);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);
colores.push("Negro");
console.log(colores);
colores.pop();
console.log(colores);

colores.forEach(function (el,index){
    console.log(`<li id="${index}"> ${el}</li>`);
});
