
var navbar = document.getElementById("navbar"); 
var closing = document.getElementById("close-bar");
var menulist = document.getElementById("menu-bar");










function show(){
 navbar.style.display="block";
menulist.style.display="none";
closing.style.display="block";

}
function Close(){
closing.style.display="none";
navbar.style.display="none";
    menulist.style.display="block";
    
return false; 

}
/* sab sey pehley hum ney right , left , aur section ka const banaana hai uis k baaad 
us k baad hum ney ek event banana hai audr function ko call krwaana hai us k baad hum ney jo
css mai lagayaa tha translate -33% us ko apney content k hisaab sey % mai minuse aur plus mai 
mai aagey peechey barhaana hai ye  krney k baad hum ney check krnaa hai k hamariscript kaam 
kr rah hai ya nh 
    //  ---------------Problem Created -----------------


    mujhe yaha ho rai hau k is ney jo sectionIndex likha hai wo kiya kaam kr raha hai aur us mai ye right wala button sai kaam k 
    sey  kr raha hai mtlb agar mai wo hata deytaa hu to us se direct he aaagey  barh raha hai  mujhey ek contet rok kr pher dubaara dabaaney k 
    baad pher wo move ho alaikin wo direct aagey  move ho raha hai mai ney ye laga to diya magar mujhey is kaa mtlb samajh nh aayaa 
    k ye k sey kaam kr raha hai ?
    how did the work ?


*/


const slider = document.querySelector('.slider');
const left = document.querySelector('.left');
const slide = document.querySelector('.slide')
const right = document.querySelector('.right');
var sectionIndex = 0;
right.addEventListener('click' , function() {
    // sectionIndex = (sectionIndex < 2) ?  sectionIndex + 1 : 2;

if(sectionIndex =  sectionIndex < 2) {
sectionIndex + 1;
}
else {
    sectionIndex + 2;
}
    slider.style.transform="translate(" + (sectionIndex = sectionIndex + 1)* -33 + "%)";   
});
left.addEventListener('click' , function() {
    slider.style.transform="translate(0%)";  
 
});


// --- number animation ---------------

var project = setInterval(projectdone,20)
var count1 =0;
function projectdone(){
    count1++;
    document.querySelector("#number1").innerHTML=count1;
    if(count1==45){
clearInterval(project)
    }
}
// --- number animation-2  ----
var project1 = setInterval(projectdone1,50)
var count2 = 0;
function projectdone1(){
    count2++;
    document.querySelector("#number2").innerHTML=count2;
    if(count2==16){
clearInterval(project1)
    }
}
// ----- number animation-3 -----
var project2 = setInterval(projectdone2,20)
var count3 =0;
function projectdone2(){
    count3++;
    document.querySelector("#number3").innerHTML=count3;
    if(count3==35){
clearInterval(project2)
    }
}
// ----- number animation complete-----



