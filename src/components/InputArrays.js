

export const twoSum = function (numbers, target) {
    var answer =''
    for(var a  = 0 ;a< numbers.length;a++){
        for(var b  = a+1 ;b<= numbers.length-1;b++){
          if(numbers[a]+numbers[b] === target)
          {
             answer = [a+1,b+1]
          }
        }
      }
      return answer
};
