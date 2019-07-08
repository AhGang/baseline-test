'use strict';

function collectSameElements(collectionA, collectionB) {
  for(let i = 0;i<collectionA.length;i++){
    let result = collectionA.splice(i,collectionB.length);
    if(result == collectionB){
      return result ;
    }
  }
}
