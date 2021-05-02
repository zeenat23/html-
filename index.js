/*
		//javascript console API
	console.log("HELLO WORLD",4+6,"anotherlog");
	console.warn("this is warning");
	console.error('error');
	//console.clear();
	//document.write("document write");

	//objects
var marks={
	ravi:34,
	shubham:78,
	harry:99.977
}
console.log(marks);

//boolean
var a=true;
var b=false;
console.log(b,a);
//UNDEFINED
 var und;
 console.log(und);
 var b=null;
 console.log(b);

 //ARRAYS
 var arr=[1,2,"bablu",4,5]

 //average
function avg(a,b){
	c=(a+b)/2;
	return c;


	///array iteration
	var arr=[1,2,3,4,5,6];
	arr.forEach(function(eleemnt){
		console.log(element);
	})

	//while
	let j=0;
	
	while(j<arr.length)
	{
		console.log(arr[j]);
		j++;
	}
}

 c1=avg(4,6);
 c2=avg(2,3);
 console.log(c1,c2);
*/

/*let myArr=["fan","camera",34,null,true];
console.log(myArr.length);
myArr.pop();
console.log(myArr);
myArr.push("harry");
console.log(myArr);
myArr.shift();
console.log(myArr);
myArr.unshift("anurag");
console.log(myArr);
myArr.toString()
"anurag,camera,34,,harry"
*/

A=[2,34,4644,1,10]
A.sort();
console.log(A);

// String Methods in JS */let lone="anurag is a joker";
/*console.log(lone.length)
console.log(lone.indexOf("joker"))
console.log(lone.lastIndexOf("joker

*/
let lo= "IamaGoodgirl";
/*console.log(lo.slice(0,3))
console.log(lo.replace("I","anurag"))*/

/*let mydate=new Date();
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getDay());
console.log(mydate.getMinutes());

*/

  //let elem = document.getElementById('click');
  //console.log(elem);

  let elemclass=document.getElementsByClassName('container');
  /*console.log(elemclass);*/
  //elemclass[0].style.background="yellow";
  elemclass[0].classList.add("bg-primary");
    elemclass[0].classList.add("text-success");
   /* console.log(elem.innerHTML);
    console.log(elem.innerText);
     console.log(elemclass[0].innerHTML);
      console.log(elemclass[0].innerText);


*/

/*tn=document.getElementsByTagName('div')
console.log(tn);*/

/*createdElement=document.createElement('p');
createdElement.innerText="This is a created para";
tn[0].appendChild(createdElement);
//pahle div me upar wala sentence likh ke aa jaega 

createdElement2=document.createElement('b');
createdElement2.innerText="This is a created bold";
tn[0].replaceChild(createdElement2,createdElement);
//removeChild(element);
*/
// selecting using query 

/*sel= document.querySelector('.container');
console.log(sel);

sel= document.querySelectorAll('.container');
console.log(sel);*/

//EVENTS IN JS

/*function clicked()
{
	console.log('the button was clicked');
}
window.onload=function()
{
	console.log('the document was loaded');
}
firstcontainer.addEventListener('click',function(){
	document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"
	console.log("click up container");*/
/*})
*/
/*firstcontainer.addEventListener('mouseover',function(){
	console.log("clickhua");
})
firstcontainer.addEventListener('mouseout',function(){
	console.log("click out container");
})*/

/*firstcontainer.addEventListener('mouseup',function(){
	console.log("click up container");
})

firstcontainer.addEventListener('mousedown',function(){
	console.log("click down container");
})

*/

//settimeout or setInterval

/*function summ(a,b){
	return a+b;
}*/
sum=(a,b)=>{
	return a+b;
}
login=()=>{
	document.querySelectorAll('.container')[1].innerHTML="<b> set interval fired</b>" 
	console.log("i am log");
}
clr=setTimeout(login,5000);///2 seconds ke baad milega console me 
/*clr=setInterval(login,2000);
use clearInterval/clearTimeout to cancel setInterval/setTimeout*/

// JAVASCRIPT LOCAL STORAGE 
/*localStorage.clear()
localStorage.setItem('name',"harry")
localStorge.removeItem('name')
localStorage.clear();
*/
//JSON- Javascript Object Notation 

//used to exchange data - we have to convert json into string and thrn make the object 

/*obj = { name:"harry",length:1,a:{"this":'tha\\"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso);

parsed=JSON.parse('{ "name":"harry","length":1,"a":{"this":"tha\\"t"}}')
console.log(parsed);
*/

//ECMA SCRIPT 

filter : filter something from array / only worked for array/makes new array
map: only worked for array/makes new array

to convert decimal to binary 
binary=decimal.toString(2);

to convert binary to decimal
 decimal=parseInt(binary,2);