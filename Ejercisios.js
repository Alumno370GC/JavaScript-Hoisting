//exercise  #4
//ask for a rating from 0 to 10 and display as follows: Poor,Sufficient,Good, Execellent


let calificasion = 11;
if (calificasion <5 && calificasion>=0) {
    console.log("Calificación: Insuficiente");

}else if(calificasion === 5){
    console.log("Calificación: Insuficiente");

}else if(calificasion > 5 && calificasion <=8 ){

console.log("Calificación: buena");

}else if (calificasion > 8 && calificasion <=9){

    console.log("Calificación: Exelente");

}else  if (calificasion >9  && calificasion <=10 ){
    console.log("Calificación: Exelente");

}else{

    console.log("Calificación no valida");

}
