// var a = "78sai";
// var b = "34ram";
// document.write(parseInt(a)+parseInt(b));
// console.log("hello");



// //creating object

// var details={
// 	name:"KSSK",
// 	email:"shiva@gmail.com",
// 	experience:"5 years",
// 	courses:["web design ","html ","python"]

// }

// //for loop for object

// for (var i = 0 ;i < details.courses.length; i++)
// {
// 	document.write(details.courses[i]+"<br>")
// }

// document.write(details.name+"<br>");

// //for-in loop

// var a = "Apssdc React";
// for(var i in a)
// {
// 	document.writeln(a[i]+"<br>");
// }

// for(var i in details)
// {
// 	document.write(details[i]+"<br>")
// }

// //for of loop we can use only strings , arrays not                              

// for (var i of details.courses)
// {
// 	document.writeln(i);

// }

// var s="123456"
// for (var i of s)
// {
// 	document.write(i);

// }

//user defined functions

// function add()
// {
// 	var details={
// 	name:"KSSK",
// 	email:"shiva@gmail.com",
// 	experience:"5 years",
// 	courses:["web design ","html ","python"]

// }


// for (var i in details)
// {
// 	document.write(details[i]+"<br>")
// }

// }
// function Change()
// {
// 	var b=document.getElementById("para").innerHTML="hellloo";
// 	b.textContent="hello";

// }


// //arrow function

// function sai(a,b){
// 	alert(a+b);

// }
// sai(99,1);


// var sai=(a,b)=>{
// 	alert(a-b);

// }
// sai(40,5);



// //if function without parameters
// ()=>{

// }

// //differences b/w var,let,cont

// var r1=10;
// var r1=40;  //reassigning
// {
// 	var r1=50;
// 	document.write(r1,"<br>");

// }
// document.write(r1,"<br>");


// let r2=10;
// {

// 	let r2=20;
// 	document.write(r2,"<br>");

// }
// document.write(r2,"<br>");

// const r3=10;
// {
// 	const r3=20;
// 	document.write(r3,"<br>");

// }
// document.write(r3,"<br>");




// class Square{
// 	// super();

//	constructor(height,width){
// 		this.h=height;
// 		this.w=width;

// 	}
// }

// var a=new Square("40cm","40cm");
// document.write(a.h);

// Rest parameter(...parametersname)

// function addition(p1,p2,...s)
// {
// 	document.write(p1+p2,)
// 	document.write(s[3],"<br>");

// }
// addition(1,2,3,4,5,6,7,8,9);


// //spread parameters(...paramname)

// const array1=[1,2,3];

// const array2=[...array1];
// array2.push(4,5,6,7);
// document.write(array2);


//Destructure of elements:
//for exracting properties of objects



// var n=["swami","sairam","rajesh","gautam"]

// var[n1,n2,n3,n4]=n;
// document.write(n3);

//interpolation

var n=1;
var m=`i have the number ${n}`;
document.write(m)





