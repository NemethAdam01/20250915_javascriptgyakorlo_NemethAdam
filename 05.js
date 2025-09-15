let tomb = [3, 7, 2, 9, 5]
console.log(tomb.length)
console.log(tomb.at(0) + ',' + tomb.at(-1))
let osszeg = 0
for (let i = 0; i < tomb.length; i++) {
    osszeg += tomb[i]
    
}
console.log(osszeg)
