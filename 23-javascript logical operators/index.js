let number=prompt("Please enter the current hour",);
if(number<0||number>23){
    alert("Your input is incorrect");
}
else if(number<8||number>=18){
    alert("They are outside of the office hours");
}
else{
    alert("We are open!!!")
}