///task 1
function createPhoneNumber(arr:any){
    console.log( arr.join('').replace(/(...)(...)(.*)/, '($1) $2-$3'));
  }
  createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);
///task 2
export class Challenge {
    static solution(number: number) {
       if (number < 0){
        console.log("Отрицательное число:" + number);
        return 0;
       }
    let sum = 0; 
    for (let i = 0; i < number; ++i) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    console.log(sum);
    return(sum);
      }
    }
Challenge.solution(10);
///task 3
function integer(a:any,k:any){
    for(let i=0;i<k;i++)
    a.unshift(a.pop());
    console.log(a);
}
integer([1,2,3,4,5,6,7],3);
///task 4
function mas(nums1:any,nums2:any){
  let p: number[] = nums1.concat(nums2)
  p.sort();
  let sum = 0;

  for(let i = 0; i < p.length; i++) {
      sum += p[i];
  } 
  //console.log(p);
  console.log(sum / p.length);
}
mas([1,3],[2,4]);
///task 5
function Sudoku(array:any) {
    let set = new Set();
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            const value = array[i][j]
            if (value !== ".") {
                const row = `${value} в ряду ${i}`
                const column = `${value} в колонке ${j}`
                const box = `${value} в клетке 3x3 ${Math.floor(i/3)}, ${Math.floor(j/3)}`
                console.log(`${row}, ${column}, ${box}`)
                if (set.has(row) || set.has(column) || set.has(box)) {
                    console.log("error");
                    return false
                } else {
                    set.add(row)
                    set.add(column)
                    set.add(box)
                }
            }
        }
    }

    return true
};
Sudoku(
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]);