const age = parseInt(prompt("How old are you?"));

if(isNaN(age)){
    //string 타입으로 적혔을 때
    console.log("Please write a number");
}else{
    console.log("Thank you for writing your age");
}