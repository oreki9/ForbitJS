var commandbit4 = '[](){}+b=01";,>!';
var indexCommand = [];
commandbit4.split("").forEach((x,i)=>{indexCommand[x] = i});
var b = [(bit8)=>{return parseInt(bit8.toString(8),2)},
        (arr)=>{str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";res="";arr.forEach((x)=>{res+=str[x]});return res;},
        loadFile,
        (start,end,oper,func)=>{for(let i=start;i<end;i+=oper){func()}},
        (code)=>{return eval(code)},
        (n1,n2,op)=>{return eval("n1"+(["+","-","/","*","%"][op])+"n2")},
        (x)=>{console.log(x)}];
function loadFile(method,file,funcThen){
    var rawFile = new XMLHttpRequest();
    rawFile.open(method, file, false);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                var allText = rawFile.responseText;
                funcThen(allText)
            }
        }
    }
    rawFile.send(null);
}

function strEncodeUTF16(str) {
  var buf = new ArrayBuffer(str.length*2);
  var bufView = new Uint16Array(buf);
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
function get4bitfromUTF16(utf16){
    let x = utf16.split("").map((x)=>{return strEncodeUTF16(x)});
    let length = x.length;
    let arr = "";
    for(let i=0;i<length;i++){
        let a = dec2Bit(x[i][0]).padStart(16,"0").match(/.{1,4}/g).map((s)=>{return parseInt(s,2)});
        a.forEach((x)=>{arr+=commandbit4[x]})
    }
    return arr;
}
function SplitUint8bit(bytes){
	var a = bytes.substr(bytes.length-4,bytes.length);
	var result = commandbit4[parseInt(a,2)];
	if(a!=bytes) result=commandbit4[parseInt(bytes.substr(0,bytes.length-4),2)]+result[0];
	return result;
}