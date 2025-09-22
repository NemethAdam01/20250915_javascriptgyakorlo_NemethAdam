let jegyek = [5, 3, 4, 2, 5, 5, 3]
let otosok = 0
let osszeg = 0
for (let i = 0; i < jegyek.length; i++) {
    if (jegyek[i] == 5) {
        otosok++
    }
    osszeg += jegyek[i]
}
console.log(otosok)
console.log((osszeg/jegyek.length).toFixed(2))