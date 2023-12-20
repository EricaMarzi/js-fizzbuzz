console.log("JS OK")

/* 
- Scrivi i numeri da 1 a 100 in console
- Dai una variante (fizz) ai multipli di 3
- Dai una variante (buzz) ai multipli di 5
- Dai una variante (fizzbuzz) ai multipli di 3 e 5
- Stampa i tre punti precedenti in console

- Stampa in pagina in un contenitore

- Applica uno stile tramite css
- Applica le classi corrette alle varianti 
*/

// Da 1 a 100 in console
for (let i = 1 ; i <= 100 ; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) { //Multipli di 3 e 5
        console.log("FizzBuzz", i)
    } else if (i % 5 === 0) { //Multipli di 5
        console.log("Buzz", i)
    } else if (i % 3 === 0) { //Multipli di 3
        console.log("Fizz", i)
    } else {
        console.log(i)
    }
}