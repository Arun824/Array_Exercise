function reduceJs(items){
   
    function cb(accumulater, current){
        return accumulater += current;
      }
      
       function reduce(elements, cb, startingValue = 0) {
       let  accumulater = startingValue;
       for ( let i = 0; i < elements.length; ++i ) {
          accumulater = cb(accumulater, elements[i] )
       }
       return accumulater;
     }
    return reduce(items, cb, 5)
}

module.exports = reduceJs;