console.log('hi there');

function range(start , end){
    if(start < end) return [];
    const result = [];

    for(let i = start ; i >= end ; i--){
        result.push(i);
    }
    return result;
}

const result = range(10,5);
console.log(result);
