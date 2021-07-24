var commandbit4 = '[](){}+b=01";,>&';
var indexCommand = [];
var indexStringData = [];
let stringData="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_=+{[}]\|:;'<,>.?/";
commandbit4.split("").forEach((x,i)=>{indexCommand[x] = i});
stringData.split("").forEach((x,i)=>{indexStringData[x] = i});
var b = [(arr)=>{res="";arr.forEach((x)=>{res+=stringData[x]});return res;},
        loadFile,
        (start,end,oper,func)=>{for(let i=start;i<end;i+=oper){func()}},
        (code)=>{return eval(code)},
        (n1,n2,op)=>{return eval("n1"+(["+","-","/","*","%"][op])+"n2")},
        (x)=>{console.log(x)}];
function loadFile(method,file,funcThen){
    var rawFile = new XMLHttpRequest();
    rawFile.open(method, file, true);
	rawFile.responseType = 'arraybuffer'
    rawFile.onload = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                var bytes = new Uint8Array(this.response);
                funcThen(bytes)
            }
        }
    }
    rawFile.send(null);
}//b[0b11](b[0]([0, 0b1011, 0b100, 0b10001, 0b10011, 0b1001000, 0b111101, 0b1001001]))
function getStringtoArrayIndex(str){
	return str.split("").map((x)=>{return indexStringData[x]})
}
function forbit(name,funct){
	loadFile("GET",name,
		(text)=>{
			let textbody = get4bitfromUTF16(text);
			funct(textbody);
			eval(textbody);
		}
	);
}
function strEncodeUTF8(str) {
  var buf = new ArrayBuffer(str.length);
  var bufView = new Uint8Array(buf);
  console.log(str.charCodeAt(0));
  for (var i=0, strLen=str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return bufView;
}
function dec2Bit(dec){
    if(dec >= 0) { return dec.toString(2);}
    else {return (~dec).toString(2);}
}
function getBitPad(uint){
	return dec2Bit(uint).padStart(4, "0")
}
function get4bitfromUTF16(utf8){
	let res4bit = "";
	utf8.forEach((x)=>{
		let number = dec2Bit(x).padStart(8, "0");
		number.match(/.{1,4}/g).forEach((x)=>{res4bit+=commandbit4[parseInt(x,2)]})
	});
	return res4bit[res4bit.length-1]=='[' ? res4bit.slice(0,-1) : res4bit;
}
function SplitUint8bit(bytes){
	var a = bytes.substr(bytes.length-4,bytes.length);
	var result = commandbit4[parseInt(a,2)];
	if(a!=bytes) result=commandbit4[parseInt(bytes.substr(0,bytes.length-4),2)]+result[0];
	return result;
}