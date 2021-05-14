
function eachJs(items) {
     
    function each(elements, cb) {
        for(let i=0;i<elements.length;i++){
         cb(elements[i], i);
      }
    }
    
    let arr = [];
    function iterate(v, index) {
    arr.push(`value : ${v},  index : ${index}`);
    }
    
    each(items, iterate);  
    
    return arr;
}

module.exports = eachJs;

