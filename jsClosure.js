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

function bankAccount(initialBalance){
    let balance = initialBalance

    return{
        deposit(amount){
            balance += amount
            return `you deposited ${amount} and your new balance is ${balance}`;
        },
        getBal(){
            return balance;
        },
        withdraw(amount){
            balance -= amount;
            return `you withdraw ${amount}, and your balance now is ${balance}`;
        }
    }
}

const myBalance = bankAccount(1000);
console.log(myBalance.withdraw(350))
console.log(myBalance.deposit(450))
console.log(myBalance.getBal())