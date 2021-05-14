function flattenJs(nestedArray){

    function flatten(array){
        let flatedArray = [];
        function check(array) {
        for(let i=0;i<array.length;i++){
          removeArray(array[i]);
        }
      }
        function removeArray(item) {
          if(Array.isArray(item)) {
            check(item)
          }else {
            flatedArray.push(item);
          }
      }
    
     check(array);
     
     return flatedArray;
    }
    
   return flatten(nestedArray)

}


module.exports = flattenJs;
