# Javascript with just 4 bit character
this is framework to running javascript with minimalist sytax (kind of) and this code have transcoding compiler, boiler, and set of rules that will force user to understand javascript.<br/>
Note beforehand : javascript is realy love string and object, and almost everything is string and object, so thats why a lot weird behaviour can explain with that concept(i think, i dont know, im not javascript master), and you can use that concept to clone brainf_ck code. and this implementation is to help programmer to understand js and make minimal character code with readable syntax for human. (you can make production code with forbit js i think, almost all javascript feature possible in forbit)<br/>
the character that you can use is [](){}+b=01";,>& and with just that char you can make production code<br/>
b in the char is bank or memory storage and for the first character for variable
you can read the more minimalist code in [jsf*ck](https://github.com/aemkei/jsfuck)
### How Compiler works
![compiler flow](https://oreki9.github.io/ForbitJS/forbitiflow.png)
### Add to browser
```html
<script src='4bitjavascript.js'></script>
<script>
forbit("namecode.4js",(bit)=>{
	//add your normal code
	//example b[100]=(list)=>{return list.map((x)=>{return x+2})};
	//you can run the code with b[100]([0b100,0b101);
	eval(bit)
});
```
### Code example
```javascript
//console.log(1);
b[0b11](1);
```
variable
```javascript
b[100]=1//store 1 to array index 100
0==0 //return true
0==1 //return false
0b0 //return 0
0b10 //return 1
0b11011 //return 27
[]// it can use as object array or array itself, so it can use attribute in object array ([]["attribute"])
+["0b100"] // turn string to number, ("4") to 4
[0b1]+[] //return "1" or string one, anything that inside square brackets will beacame string
b[1]([0b1,0b0,0b1])//return bab
```
forbit use bank to store data and function and everything depend to bank
**q**: wait, if number use 0b11(16 bit with compiler) then is more use memory than 2(8 bit)?
**a**: yeah, its suck right, but hey at least you can understand bit better right?
while loop
```javascript
b[0b101](0,0b0111,1,(b1)=>{b[0b11](1)})
```
list
```javascript
b[111]=[];
```
function
```javascript
b[101]=(b1)=>{/*command*/}
```
function in forbit cant return value so you must use bank(b) to strore value
forbit have bank function that make your code shorter, bank index 0 to 5 is bank function that you must not rewrite it,you can use index 6 and more to save data as variable
```javascript
b[0]//string from array number
b[1]//loadFile function
b[2]//for loop
b[3]//eval
b[4]//number operation
b[5]//console log
```
if else
```javascript
[0,1][(0b1==0b1)+0]//return 1 if 1==1 else 0
```
its use principle in javascript when boolean plus one then return decimal

operator
```javascript
//0==+ 1==- 2==/ 3==* 4==%
b[0b101](0b01,0b11,0b0)
```
because operator char in forbit is just + then we have to use function to use arithmetic

eval
```javascript
b[0b100]()//eval(string)
```
//eval in forbit is realy usefull because you can use normal javascript with string input
recursion
```javascript
b[100]=(b1)=>{
	b[0b11](1);//console.log(1)
	[b[100],(b01)=>{b01}][(0b0101<b1)+0](b1+=1)//if else
}
```
use interface/type of object
```javascript
b[100]=b[0b100](
	b[1]([0b011,0b1110,0b10,0b10100,0b1100,0b100,0b1101,0b10011])
)
//b[100]=document
[][([][0]+[])[0b100]+([][0]+[])[0b0101]+([][0]+[])[1]+([][0]+[])[0b1000]]
//find function
([][([][0]+[])[0b100]+([][0]+[])[0b101]+([][0]+[])[1]+([][0]+[])[0b1000]]+[])
//code above return "function find() { [native code] }"
([][([][0]+[])[0b100]+([][0]+[])[0b101]+([][0]+[])[1]+([][0]+[])[0b1000]]+[])[0b011]+([][([][0]+[])[0b100]+([][0]+[])[0b101]+([][0]+[])[1]+([][0]+[])[0b1000]]+[])[0b011011]+([][0]+[])[1]+((1==0)+[])[0b011]+((1==1)+[])[0]+((1==1)+[])[1]+([][0]+[])[0]+([][([][0]+[])[0b100]+([][0]+[])[0b101]+([][0]+[])[1]+([][0]+[])[0b1000]]+[])[0b011]+([1==1]+[])[0]+([][([][0]+[])[0b100]+([][0]+[])[0b101]+([][0]+[])[1]+([][0]+[])[0b1000]]+[])[0b011011]+((1==1)+[])[1]
//code above return string "constructor"
([0==1]+[])[0]+([][0]+[])[0b101]+([0==1]+[])[0b10]+([0==0]+[])[0]+([0==0]+[])[0b011]+([0==0]+[])[1]//get string filter
//[]["filter"]["constructor"]("return eval")()(/* string command */)
// you can use code above to eval string, and to build the string you use bank function
```
object
```javascript
b[100]={};
b[100]["00"]=1;//attribute
b[100]["01"]=(b01,b11)=>{//command}
```
object can use for class and dict
### compiling and running
you can use normal javascript and store it in bank(b) but dont compile to forbit file and add in another javascript source and add to bank before forbit using it
```javascript
forbit("forbitbyte.4js",(text)=>{
	b[100]= function(num1,num2){//dont compile to forbit file (4bit)
		console.log(num1+num2);
	}
	console.log(text)
})
```
and if you want use it in file that will get compiled then:
```javascript

b[100](0b11,0b10);
```