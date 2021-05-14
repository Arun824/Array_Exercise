function findJs(items) {

    
    function find(elements, cb) {
        
        let found = undefined;
        for ( let i = 0; i < elements.length; i++) {
          if(cb(elements[i]) ) {
                return elements[i];
        } 
      }
      return found;
    }

      function search(x) {
        return  x === 10 ? true : false;
       }
    

    return  find(items, search);
}

module.exports = findJs;