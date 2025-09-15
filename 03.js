let a = 12, b = 120, c = 125
if (b < a && c < a) {
    console.log(`${a} a legnagyobb`)
}
else if (a < b && c < b) {
    console.log(`${b} a legnagyobb`)
}
else if (b < c && a < c) {
    console.log(`${c} a legnagyobb`)
}
else console.log("egyenlőek")