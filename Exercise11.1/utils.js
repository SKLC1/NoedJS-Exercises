

export function addNumber(arr,num){
   arr.push(parseInt(num))
   return arr
}
export function editNumber(arr,num,numId){
  console.log(num);
  console.log(numId);
  const newArr = arr.map(element => {
     return element == num?(element = parseInt(numId)):element;
  })
  console.log(arr);
  console.log(newArr);
  return newArr
}
export function deleteNumber(arr,num){
  const exist = numbers.find((n)=>n == num)
  if(!exist) throw new Error('not found')
  return arr.filter(e=>e!= num)
}