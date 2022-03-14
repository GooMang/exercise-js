function exercise10() {
    console.log("  !10-list!");
    const obj = { here: { is: "an" }, object: 2 };
    const secObj = {};
    for (let key in obj){

    }
    console.log(typeof secObj);
    console.log(typeof null);
    console.log(deepEqual(obj, obj));
    
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
}

function deepEqual(firstObj, secondObj) {

 if (typeof firstObj === typeof secObj && typeof firstObj === object){
    for (let key in firstObj){
        if (deepEqual(firstObj.key,secondObj.key) === false){
            return false;
        }
    }
    return true;
       } 
       
      else if (firstObj === secondObj) {
        return true;
        break;
      }
  else if (Number(firstObj) === Number(secondObj)){
      return true;}

}
