let be = prompt("Írjon egy szót:")
function check(szo)
{
    let tmp2 = szo.split("").reverse().join("")
    
    if (szo == tmp2) {
        return true
    }
    if (szo != tmp2) {
        return false
    }
}
console.log(check(be))