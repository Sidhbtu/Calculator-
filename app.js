
window.onload
{
   // val.value=val.value.slice(0,val.value.length-1)

    var x = document.getElementById("hide")
    var y = document.getElementById("annim")

    x.style.visibility="hidden";
    y.style.animationPlayState="paused"
    

function back(){
    let val=document.getElementById('textarea')
    
    document.getElementById('textarea').value=val.value.slice(0,val.value.length-1)
    x.innerText="⏮"
    x.style.visibility="visible";
    y.style.animationPlayState="running"
    setTimeout(() => {
        x.style.visibility="hidden";  
    }, 600);
}




function exp(expval)
 {
   
    let val=document.getElementById('textarea').value
val=val+expval;
document.getElementById('textarea').value=val;


x.innerText=expval
x.style.visibility="visible";
y.style.animationPlayState="running"
setTimeout(() => {
    x.style.visibility="hidden";  
}, 600);
 
}

function cal()
{
    x.innerText='='
    x.style.visibility="visible";
y.style.animationPlayState="running"
setTimeout(() => {
    x.style.visibility="hidden";
}, 600);
    let val=document.getElementById('textarea').value
    // let res=eval(val);
   // console.log(res)
    if(eval(val)!=undefined)
    document.getElementById('textarea').value=eval(val)
    else document.getElementById('textarea').value=""

   
// x.style.display = "block";

}

function clean()
{
    document.getElementById('textarea').value="" 

    x.innerText='AC'
// x.style.display = "block";
x.style.visibility="visible";
y.style.animationPlayState="running"
setTimeout(() => {
    x.style.visibility="hidden"; 
}, 600);
}




}
