
function filterJs(items) {
      
    function filter(elements, cb) {
  
        let arr =[];
        for(let i = 0; i<elements.length; i++){
          cb(elements[i]) ? arr.push(elements[i]) : null;
        }
        return arr;
      };
      
      function filtered(ele){
        return ele > 3;
      }
    return filter(items, filtered);
}

module.exports = filterJs;