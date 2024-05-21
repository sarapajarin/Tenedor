function imprimirNombreYNumero() {
    let cubiertos = ["Tenedor", "Cuchillo", "Cuchara", "Jamonero"];
    for (let i = 0; i < cubiertos.length; i++) {
        console.log(i + " " + cubiertos[i]);
    }
  
    let numero = prompt("Introduce el número que quieres");
    console.log(cubiertos[numero]);

}

imprimirNombreYNumero();