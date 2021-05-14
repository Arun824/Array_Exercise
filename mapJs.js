function mapJs(items) {

    function map(elements, cb) {
        for(let i=0;i<elements.length;i++){
         cb(elements[i]);
      }
    }
   
     let arr = [];
     function m(v) {
        arr.push(Math.pow(v, 2));
     }
   
     map(items, m);  

     return arr;
}

module.exports = mapJs;