// function sum (...args) {
//     let total = 0;

//     args.forEach( num => total += num) 

//     return total
// }

// console.log(sum(1, 2, 3, 4)) //=== 10;
// console.log(sum(1, 2, 3, 4, 5)) // === 15;

// Function.prototype.myBind = function (ctx) {
//     let args = Array.from(arguments).slice(1)
//     let that = this
//     console.log(args)
//     return function() {
//         let arg = Array.from(arguments)
//         that.call(ctx, ...args, ...arg)
//     }
// }

// Function.prototype.myBind = function (ctx, ...bindArgs) {
//     let that = this
//     return function(...callArgs) {
//         that.call(ctx, ...bindArgs, ...callArgs)
//     }
// }


// function curriedSum (numArgs) {
//     let nums = [];
//     return function _curriedSum (arg1) {
//         nums.push(arg1)
//         if( nums.length === numArgs) {
//             let total = 0;
//             nums.forEach(num => total += num)
//             return total
//         } else {
//            return _curriedSum
//         }
//     }
// } 
// const sum = curriedSum(4);

// console.log(sum(5)(30)(20)(1)); // => 56

// Function.prototype.curry = function (numArgs, ...bindArgs) {
//     let that = this
//     let allNums = bindArgs
//     return function _curriedSum (...callArgs) {
//         allNums = allNums.concat(callArgs)
//         if (allNums.length === numArgs) {
//             return that.apply(that, allNums)
//         } else {
//            return _curriedSum
//         }
//     }
    
// }

// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
//   }

// console.log(sumThree.curry(3, 4)(20)(6)); // == 30

