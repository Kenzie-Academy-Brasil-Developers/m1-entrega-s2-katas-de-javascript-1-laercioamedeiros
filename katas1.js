//--------------------------------------------------------------------------------------------------------------------------------------
function oneThroughTwenty() {

  let retorno = [];
  for (let contador = 1; contador <= 20; contador = contador + 1) {
    retorno.push(contador)
  }
  return retorno
}
console.log(oneThroughTwenty())
//--------------------------------------------------------------------------------------------------------------------------------------
function evensToTwenty() {

  let retorno = [];
  for (let contador = 2; contador <= 20; contador = contador + 2) {
    retorno.push(contador)
  }
  return retorno
}
console.log(evensToTwenty())
//--------------------------------------------------------------------------------------------------------------------------------------
function oddsToTwenty() {

  let retorno = [];
  for (let contador = 1; contador <= 20; contador = contador + 2) {
    retorno.push(contador)
  }
  return retorno

}
console.log(oddsToTwenty())
//--------------------------------------------------------------------------------------------------------------------------------------
function multiplesOfFive() {

  let retorno = [];
  for (let contador = 5; contador <= 100; contador = contador + 5) {
    retorno.push(contador)
  }
  return retorno
}

console.log(multiplesOfFive())
//--------------------------------------------------------------------------------------------------------------------------------------
function squareNumbers() {
  
  let retorno = [];
  for (let contador = 1; (contador * contador)  <= 100; contador = contador + 1){
    retorno.push(contador*contador)
  }
  return retorno
}
console.log(squareNumbers())
//--------------------------------------------------------------------------------------------------------------------------------------
function countingBackwards() {

  let retorno = [];
  for (let contador = 20; contador >= 1; contador = contador -1) {
    retorno.push(contador)
  }
  return retorno
}
console.log(countingBackwards())
//--------------------------------------------------------------------------------------------------------------------------------------
function evenNumbersBackwards() {

  let retorno = [];
  for (let contador = 20; contador >= 1; contador = contador -2) {
    retorno.push(contador)
  }
  return retorno
}
console.log(evenNumbersBackwards())
//--------------------------------------------------------------------------------------------------------------------------------------
function oddNumbersBackwards() {

  let retorno = [];
  for (let contador = 19; contador >= 0; contador = contador -2) {
    retorno.push(contador)
  }
  return retorno
}
console.log(oddNumbersBackwards())
//--------------------------------------------------------------------------------------------------------------------------------------
function multiplesOfFiveBackwards() {

  let retorno = [];
  for (let contador = 100; contador >= 5; contador = contador - 5) {
    retorno.push(contador)
  }
  return retorno
}
console.log(multiplesOfFiveBackwards())
//--------------------------------------------------------------------------------------------------------------------------------------
function squareNumbersBackwards() {
  
  let retorno = [];
  for (let contador = 10 ; (contador * contador) >=1; contador = contador -1){
    retorno.push(contador*contador)
  }
  return retorno
}
 console.log(squareNumbersBackwards())
 //--------------------------------------------------------------------------------------------------------------------------------------