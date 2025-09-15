function osszefuz(tomb)
{
    let str = ""
    for (let i = 0; i < tomb.length; i++) {
        str += tomb[i] + " "
        
    }
    return str
}
console.log(osszefuz(["alma", "körte", "barack"]))