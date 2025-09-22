set1 = new Set([1,2,3,4])
set2 = new Set([3,4,5,6])
function metszet(set1_, set2_)
{
    let tomb1 = Array.from(set1_)
    let tomb2 = Array.from(set2_)
    let eredmeny = new Set()
    for (let i = 0; i < tomb1.length; i++) {
        let tmp = tomb1[i] 
        for (let j = 0; j < tomb2.length; j++) {
            if (tmp == tomb2[j]) {
                eredmeny.add(tmp)
                
            }
            
        }
        
    }
    return eredmeny
}

console.log(metszet(set1, set2))