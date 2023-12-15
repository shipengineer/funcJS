// const Person ={
//     name:'John',
//     age:'25',
//     gender:'male',
//     introduce:function(){
//         console.log(`My name is `+this.name+'. I\'m '+this.age+ ' years old I ifentify as '+this.gender)
//     },
//     changeName: function(newName){
//         this.name = newName
//     }

// }
// Person.changeName('Mike')
// Person.introduce()
//__________________________________
// const Animal = {
//     name:'',
//     eat:function(){
//         console.log(this.name+' is eating');
//     }

// }
// const Dog ={
//     name:'Frank',
//     bark: function(){
//         console.log(this.name +' is barking')
//     }

// }
// Dog.eat= Animal.eat
// Dog.eat()
//__________________________________

// const calculator={
//     add: function(a,b){
//         console.log(a+b)
//     },
//     substract: function(a,b){
//         console.log(a-b)
//     },
//     multiply:function(a,b){
//         console.log(a*b)
//     },

// }

// calculator.add.call(null,5,3)
// calculator.substract.apply(null,[5,3])

//__________________________________

// class Person  {

//     constructor(name,age){
//          this.name = name;
//     this.age = age;
//     }
//     introduce(){
//         console.log(`My name is `+this.name+'. I\'m '+this.age+ ' years old')
//     }
// }
// const person = new Person('John',25);
// person.introduce()

//__________________________________

// class BankAccount {
//   bankName = 'CoolBank'
//   constructor(accountNumber,balance){
//       this.accountNumber = accountNumber;
//       this.balance = balance;

//   }
//   deposit(amount){
//       this.balance +=amount;
//       console.log('Deposited '+amount+' into account '+this.accountNumber+'. New balance: '+this.balance)
//   };
//   withdraw(amount){
//       if(this.balance<amount){
//           return console.log('Insufficient funds in account '+ this.accountNumber)
//       }
//       this.balance -=amount;
//       console.log('Withdraw '+amount+' from account '+this.accountNumber+'. New balance: '+this.balance)
//   };

// }
// const account1 = new BankAccount('1234567890',100);
// account1.deposit(500);
// account1.withdraw(200);
// account1.withdraw(1500);
//__________________________________

function sumDigits(num) {
  if (num < 10) {
    return num;
  }

  return Math.trunc(num % 10) + sumDigits(Math.trunc(num / 10));
}
console.log(sumDigits(123));
