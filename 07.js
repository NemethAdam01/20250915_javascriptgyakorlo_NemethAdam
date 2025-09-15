function osszefuz(tomb)
{
    let str = ""
    for (let i = 0; i < tomb.length; i++) {
        str += tomb[i] + " "
        
    }
    return str
}
let osszefuzendo_szoveg = ["alma", "körte", "barack"]
console.log(osszefuz(osszefuzendo_szoveg))