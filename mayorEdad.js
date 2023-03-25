let year = prompt("What year were you born?");
let age;

Number(year)

age = 2023 - year;

if (age >= 18){
    console.log("Access Granted")
}else{
    console.log("Access Denied, you are not old enough to view this content")
}
