/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  return l1 * l2
}
console.log("Il risultato è:", area(15, 9))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  if (n1 === n2) {
    let result = (n1 + n2) * 3
    return result
  } else if (typeof n1 === "number" && typeof n2 === "number") {
    let result = n1 + n2
    return result
  }
}
console.log(crazySum(12, 12))
console.log(crazySum(2, 19))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (x) {
  let diff = x - 19
  if (x > 19) {
    return Math.abs(diff) * 3
  } else {
    return Math.abs(diff)
  }
}

console.log(crazyDiff(15))
console.log(crazyDiff(22))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true
  } else {
    return false
  }
}

console.log(boundary(20))
console.log(boundary(400))
console.log(boundary(500))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (str) {
  if (str.startsWith("EPICODE")) {
    return str
  } else {
    return "EPICODE" + str
  }
}
console.log(epify(" è una scuola"))
console.log(epify("EPCODE"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (m) {
  if (m <= 0) {
    return false
  } else if (m % 3 === 0 || m % 7 === 0) {
    return true
  } else {
    return false
  }
}

console.log(check3and7(14))
console.log(check3and7(0))
console.log(check3and7(7))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (str) {
  const stringArray = str.split("")
  stringArray.reverse()
  const stringAgain = stringArray.join("")
  return stringAgain
}
console.log(reverseString("EPICODE"))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (str) {
  let result = " "
  const arrayOfWords = result.split(" ")
  for (let i = 0; i < arrayOfWords.length; i++) {
    result +=
      arrayOfWords[i].slice(0, 1).toUpperCase() + arrayOfWords[i].slice(1) + ""
  }
  return result
}
console.log(upperFirst("Ma come cavoli si fa sta roba"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (str) {
  let result
  result = str.slice(1)
  result = str.slice(0, result.length - 1)
  return result
}
console.log(cutString("EPICODE"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (o) {
  const randomNumber = []
  for (let i = 0; i < o; i++) {
    randomNumber.push(Math.floor(Math.random() * 11))
  }
  return randomNumber
}
console.log(giveMeRandom(6))
