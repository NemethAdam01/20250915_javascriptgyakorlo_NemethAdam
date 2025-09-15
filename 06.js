function legnagyobb(p)
{
    let max = 0
    for (let i = 0; i < p.length; i++) {
        if (max < p[i]) {
            max = p[i]
        }
        
    }
    return max

}
console.log(legnagyobb([3, 7, 2]))