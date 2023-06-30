const btn=document.getElementById('box');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
//console.log(btn1)
//console.log(btn2)
console.log(btn)
console.log(box)

btn1.onclick=function(){
    btn.style.backgroundColor="red"
}

btn2.onclick=function(){
    btn.style.backgroundColor="yellow"
}

btn3.onclick=function(){
    btn.style.backgroundColor="pink"
}
