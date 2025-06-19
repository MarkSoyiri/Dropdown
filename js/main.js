// let firstname;
// let secondname;
// let fullname;
// let age = 18; 

// firstname = 'Mark'
// secondname = 001
// fullname = firstname+' '+ secondname;
// console.log(typeof(fullname))
// console.log(fullname)
// console.log(typeof(firstname))
// console.log(typeof(secondname))





// // console.log(fullname)


// // 1  .Tenary Operator
// console.log(age >= 18)
// age >= 18 ? console.log('You can vote') : console.log('You cant vote go and sleep')

// 2. Comparison Operator
// 3. Logical Operator
// && , || , 
// 4. Incremental and Decremental Operator
  // ++ and --, +=, -=
// 5. Arithmetic Operator


// TENARY OPERATOR
// let age = 18;
// let message = age >= 18 ? 'You are an adolescent' : 'You are not an adolescent'
// console.log(message)

// let number = 10
// let remainder = (number % 2)
// if (remainder == 0){
//     console.log('number is even')}
// else{
//     console.log( 'is odd')}


// let number = 580
// let remainder = (number % 2)
// remainder == 0 ? console.log('number is even') : console.log('number is odd')

// COMPARISON OPERATORS WITH LOGICAL OPERATORS
// let first = 1
// let second = 17
// let third = 7
// let forth = 6

// let firstgreat = first > second && first >third && first > forth;
// let secondgreat = second > first && second > third && second > forth;
// let thirdgreat = third > first && third > second && third > forth;
// let forthgreat = forth > first && forth > second && forth > third;

// firstgreat ? console.log('first is the greatest') :'';
// secondgreat ? console.log('second is the greatest') :'';
// thirdgreat ? console.log('third is the greatest') :'';
// forthgreat ? console.log('forth is the greatest') :'';


// let age = 12
// age >= 18 ? console.log('you can vote'): console.log('you cannot vote')

// let A = 'I';
// let B = 'Love';
// let C = 'You';
// let D = A+' '+B+' '+C

// console.log( D+' '+'BUT'+' '+'I HATE YOU')


// let number1 = 4;
// number1 % 2 == 0 ? console.log('number is even'): console.log('number is odd');
// let number2 = 5;
// number2 % 2 == 0 ? console.log('number is even'): console.log('number is odd');
// let number3 = 10;
// number3 % 2 == 0 ? console.log('number is even'): console.log('number is odd');

// let number =4
// let remainder = number % 2
// remainder == 0 ? console.log('number is even'): console.log('number is odd')

// let number = 4
// let remainder = number % 2
// if (remainder == 0) {
//     console.log('number is even')
// }




// let first = 1;
// let second = 2;
// let third = 3;
// let forth = 4;
// let fifth = 5;

// let firstgreat = first >second && first >third && first >forth && first >fifth;
// let secondgreat = second >first && second >third && second >forth && second >fifth;
// let thirdgreat = third >first && third >second && third >forth && third >fifth;
// let forthgreat = forth >first && forth >second && forth >third && forth >fifth;
// let fifthgreat = fifth >first && fifth >second && fifth >third && fifth >forth;

// firstgreat ? console.log('first is the greatest'):''
// secondgreat ? console.log('second is the greatest'):''
// thirdgreat ? console.log('third is the greatest'):''
// forthgreat ? console.log('forth is the greatest'):''
// fifthgreat ? console.log('fifth is the greatest'):''


// INCREMENT AND DECREMENT OPERATORS
// let i = 2
// i ++ // i=i+1 = 2+1
// i ++ // i=i+1 = 3+1
// i ++ // i=i+1 = 4+1
// i ++ // i=i+1 = 5+1
// i ++ // i=i+1 = 6+1
// i ++ // i=i+1 = 7+1
// i ++ // i=i+1 = 8+1
// i ++ // i=i+1 = 9+1

// console.log(i)

// let i = 2
// i -- // i=i-1 = 2-1
// i -- // i=i-1 = 1-1
// i -- // i=i-1 = 0-1
// i -- // i=i-1 = -1-1
// i -- // i=i-1 = -2-1
// i -- // i=i-1 = -3-1
// i -- // i=i-1 = -4-1
// i -- // i=i-1 = -5-1
// i -- // i=i-1 = -6-1
// i -- // i=i-1 = -7-1
// i -- // i=i-1 = -8-1


// console.log(i)

// let b =3
// // used for increasing or decreasing to a specific number
// b+=12 // b = b + 12  b = 3 + 12 
// b-=12 // b = b - 12 b = 3 + 12
// console.log(b)

// let k = 30
// k= k *10
// k= k / 2
// console.log(k)

// // ARITHMETIC OPERATORS
// let m= 10
// m= m+1
// m=m-1
// m=m*2
// m=m/2
// m=m%2


// console.log(m)

// FUNCTIONS AND EVENTS
// button = document.getElementById("Software");
// console.log(button)
// function Software(){
//     console.log("Hello")
//     alert("HELLO")
//     button.style.backgroundColor ="blue";
//     button.style.color = "white";
//     button.style.fontSize = "50px";

// }

// button.addEventListener("click",Software)
// const forminfo = new forminfo();

let Test = document.getElementById("Sign Up");
let form = document.getElementById("form");
let firstname = document.getElementById("firstname")
console.log(Test)
console.log(event)

function Data(event){
  
  event.preventDefault();
  alert(" Login Successful");
  var formdata = new FormData(form)
  let data = Object.fromEntries(formdata.entries())
  console.log(data)
  console.log(data.firstname)


}

Test.addEventListener("click",Data)

