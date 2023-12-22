let numbers = [1,2,3,4,5,23,24,25,26,34,35,67,68,67];
  function subs(total,value,index,array){
    return total - value;
  }

  let sub = numbers.reduce(subs);
  console.log(sub);
  