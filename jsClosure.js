//closure function

// function outer(){
//     let count = 0

//     function inner(){
//         count++;
//         console.log(count)
//     }

//     return inner;
// }

// let counts = outer()
// counts()
// counts()


// let x = 0;

// function test() {
//   return function() {
//     x++;
//     console.log(x);
//   };
// }

// const a = test();
// const b = test();

// a();
// b();
// a();


function once(fn){ //main function
    
    let call = false; //if is run once?
    let results //stored results
    return function(...args){  //spread operator instead of array [3,5] transform to 3 and 5
        if(!call){ //call = true
            results = fn.apply(this, args) // the function add(3,5) apply to call the function this = what is context? args wil be (3,5)
            call = true; // the now is true
        }
        return results;  //  babalik na nya ang sagot to 5
    }
}

function add(x, y){
    console.log('this is saved!')
    return x + y
}

const res = once(add)
console.log(res(3,5))
console.log(res(5,6)) // kahit tawagin mo pa dito ay fix 5 na ang sagot dahil once lang tawag at naka set na ito sa true