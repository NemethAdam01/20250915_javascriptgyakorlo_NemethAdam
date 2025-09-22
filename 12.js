function faktorialis(n)
{
    let eredmeny = 1
    for (let i = 1; i <= n; i++) {
        eredmeny *= i;
        
    }
    return eredmeny
}
console.log(faktorialis(5))