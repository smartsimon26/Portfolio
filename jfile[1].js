//Js file

//declaration
var n1, n2, result, text, i, x;

//function Font and ThemeChanger
function myFunction(iid) {
    //x = document.getElementById("demo2");           
 //   x.style.fontSize = "10px"; 
    
    
    var i = document.getElementById("body");
    switch(iid){
    case "dark":
    i.style.backgroundColor = "#00000f";
    break;
    case "bright":
    i.style.backgroundColor = "#fffff0";
    break;
    case "mild":
    i.style.backgroundColor = "#11aaaa";
    break;
    }
    
    
    document.getElementById("demo2").innerHTML=Date();
}


//function AgeFilter
function DOB(text, x){


x=document.getElementById("numb").value;

if((2020-x)<=18 || x== "" || x<=0)
  {
    text="Sorry! You are restricted.";
  } else {
    text="Welcome to App-artments.";
  }
  
  alert( text );
  }
  
  
//function Multiplication
function sumthem(n1, n2, text)
          {
//var n1, n2, text;

n1=document.getElementById("n1").value;
n2=document.getElementById("n2").value;
result= n1 * n2;
  
  alert( result );
  }
  
  
  
  
  
  
  