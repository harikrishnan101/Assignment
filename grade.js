var readlineSync = require("readline-sync");// read number from user
let a = readlineSync.question(" enter the mark :  ");
if(a>90 && a<=100){
    console.log("grade is A")
}

else if(a>80 && a<=90)
{
    console.log("grade is B")
}
else if(a>70 && a<=80)
{
    console.log("grade is C")
}
else if(a>60 && a<=70)
{
    console.log("grade is D")
}
else if(a>=50 && a<=60)
{
    console.log("grade is E")
}
else if(a<=49 && a>=0)
{
    console.log("fail")
}
else if(a<0 || a>100)
{
    console.log("invlaid mark")
}
