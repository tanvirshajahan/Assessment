import React from 'react'
import { twoSum } from './InputArrays';

function InputArray() {

  console.log(twoSum([4, 11, 17, 25], 21));
  console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
  console.log(twoSum([-1, 0], -1));

  return (
    <div>Check Console for the answer for No 3</div>
  )
}

export default InputArray
