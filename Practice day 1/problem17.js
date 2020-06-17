let water;
console.log("ran");
var test=(array) => {
let length=array.length;
let newarray=[];
let newarray2=[];
for(water of array){
(array[length-1]) ? newarray2[newarray2.length]=array[length-1] : newarray[newarray.length]=array[length-1] ;
length--;
}
console.log(array,);
console.log(newarray2);
console.log(newarray);

}
man=[1,'a',"n",true,false,"4","test",0,"",NaN,undefined];
test(man);