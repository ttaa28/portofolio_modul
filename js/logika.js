function ganjilGenap (angka)  {
    if (angka % 2 === 0) {
        return "genap";
    }
    else {
        return "ganjil";
    }
}

console.log("soal 1: ganjil atau genap");
    console.log(ganjilGenap(7));
    console.log(ganjilGenap(12));
    console.log(ganjilGenap(0));


const celsiosKeFahrenheit = (celsius) => (celsius * 9/5) + 32;

console.log("soal 2: konversi suhu");
console.log(`celsiusKeFahrenheit(0) = ${celsiosKeFahrenheit(0)}`);
console.log(`celsiusKeFahrenheit(100) = ${celsiosKeFahrenheit(100)}`);
console.log(`celsiusKeFahrenheit(-40) = ${celsiosKeFahrenheit(-40)}`);


function nilaiTerbesar(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log("soal 3: nilai terbesar");
console.log(nilaiTerbesar(5, 10, 2));
console.log(nilaiTerbesar(80, 75, 80));
console.log(nilaiTerbesar(-3, -7, -1));

function tahunKabisat(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0)) {
        return true;
    }
    else if (tahun % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log("soal 4: tahun kabisat");
console.log(tahunKabisat(2024));
console.log(tahunKabisat(2026));
console.log(tahunKabisat(1900));
console.log(tahunKabisat(2000));

function hargaSetelahDiskon (total) {
    if (total >= 200000) {
        return total * 0.8;
        
    }
    else if (total >=100000) {
        return total * 0.9;
    }
    else {
        return total;
    }
}
console.log("soal 5: harga setelah diskon");
console.log(hargaSetelahDiskon(250000));
console.log(hargaSetelahDiskon(100000));
console.log(hargaSetelahDiskon(75000));
