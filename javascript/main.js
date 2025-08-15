//refernces ->
let box=document.querySelector(".box-2-1")
let boxcolor=document.querySelector(".boxcolor")
let bordertypooo="#000000";
let bigbox=document.querySelector(".box-2")
let save;
boxcolor.addEventListener('input',function(){
      box.style.backgroundColor=this.value;
      save=this.value;
})

let outerboxcolor=document.querySelector(".outerboxcolor")
outerboxcolor.value="#00000"

outerboxcolor.addEventListener('change',function(){
    bigbox.style.backgroundColor=this.value;
})

// box border -->
let bordertype=document.querySelector(".select-border-type")
let btn1=document.querySelector(".add2")
let bordertop=document.querySelector(".border-top-text-1")
let btn2=document.querySelector(".sub2")
let btn3=document.querySelector(".add3")
let borderbottom=document.querySelector(".border-bottom-text-1");
let btn4=document.querySelector(".sub3")
let btn5=document.querySelector(".add4")
let borderleft=document.querySelector(".border-left-text-1")
let btn6=document.querySelector(".sub4")
let btn7=document.querySelector(".add5")
let borderright=document.querySelector(".border-right-text-1")
let btn8=document.querySelector(".sub5")
let copyborder=document.querySelector(".copy-box-border")
let apply1=document.querySelector(".apply1")
let bordercolor=document.querySelector(".bordercolor")


//border radius
let btn9 = document.querySelector(".add6");
let btn10 = document.querySelector(".sub6");
let borderradtop = document.querySelector(".borderradtop");

let btn11 = document.querySelector(".add7");
let btn12 = document.querySelector(".sub7");
let borderradbottom = document.querySelector(".borderradbottom");

let btn13 = document.querySelector(".add8");
let btn14 = document.querySelector(".sub8");
let borderradleft = document.querySelector(".borderradleft");

let btn15 = document.querySelector(".add9");
let btn16 = document.querySelector(".sub9");
let borderradright = document.querySelector(".borderradright");

let copyradius = document.querySelector(".copyborder");
let apply2 = document.querySelector(".apply2");




//box shadow:->
// Box Shadow Controls
let btn17 = document.querySelector(".add10");
let btn18 = document.querySelector(".sub10");
let offsetX = document.querySelector(".offset-x");

let btn19 = document.querySelector(".add11");
let btn20 = document.querySelector(".sub11");
let offsetY = document.querySelector(".offset-y");

let btn21 = document.querySelector(".add12");
let btn22 = document.querySelector(".sub12");
let blurRadius = document.querySelector(".blur-radius");

let btn23 = document.querySelector(".add13");
let btn24 = document.querySelector(".sub13");
let spreadRadius = document.querySelector(".spread-radius");

let shadowColorInput = document.querySelector(".shawdowcolor");

let copyshawdow = document.querySelector(".copyboxshadow");

// trasformation properties 
// Rotate & Skew Section References
let rotateXText = document.querySelector(".rotate-x");
let rotateYText = document.querySelector(".rotate-y");
let perspectiveText = document.querySelector(".perspective");
let skewXText = document.querySelector(".skew-x");
let skewYText = document.querySelector(".skew-y");

// Buttons starting from btn25
let btn25 = document.querySelector(".add14");  // rotate-x +
let btn26 = document.querySelector(".sub14");  // rotate-x -

let btn27 = document.querySelector(".add15");  // rotate-y +
let btn28 = document.querySelector(".sub15");  // rotate-y -

let btn29 = document.querySelector(".add16");  // perspective +
let btn30 = document.querySelector(".sub16");  // perspective -

let btn31 = document.querySelector(".add17");  // skew-x +
let btn32 = document.querySelector(".sub17");  // skew-x -

let btn33 = document.querySelector(".add18");  // skew-y +
let btn34 = document.querySelector(".sub18");  // skew-y -
 
let copytransform=document.querySelector(".copyTransform")


//copy box
let copydiv=document.querySelector(".copy-div")
//references end

//box border:->>>>>>>>
bordertype.addEventListener('change',function(){
    bordertypooo=this.value;
    console.log(bordertypooo)
    updateBorderOfBox();
})
let bordercolorinitial;
bordercolor.addEventListener('input',function(){
    
    let c=this.value;
  console.log(c)
  bordercolorinitial=c;
  updateBorderOfBox();
})

     // intialization


     //border top
     let bordertopinitial=0;
     let borderbottomintial=0;
     let borderleftinitial=0;
     let borderrightinitial=0
bordertop.textContent=`0px`;
borderbottom.textContent=`0px`
borderleft.textContent=`0px`
borderright.textContent=`0px`

btn1.addEventListener('click',()=>{
   bordertop.textContent=`${++bordertopinitial}px`
   updateBorderOfBox();
})
    

btn2.addEventListener('click',()=>{
if(bordertopinitial>0){
    bordertop.textContent=`${--bordertopinitial}px`
}   
else{
    bordertop.textContent=0`px`;
}

updateBorderOfBox();

})
btn3.addEventListener('click',()=>{
    borderbottom.textContent=`${++borderbottomintial}px`
updateBorderOfBox();
})
btn4.addEventListener('click',()=>{
    if(borderbottomintial>0){
        borderbottom.textContent=`${--borderbottomintial}px`;
    }
    else{
        borderbottom.textContent=0`px`;
    }
    updateBorderOfBox();
})
btn5.addEventListener('click',()=>{
    borderleft.textContent=`${++borderleftinitial}px`
updateBorderOfBox();
})
btn6.addEventListener('click',()=>{
    if(borderleftinitial>0){
        borderleft.textContent=`${--borderleftinitial}px`
    }
    else{
        borderleft.textContent=0`px`
    }
    updateBorderOfBox();
})

btn7.addEventListener('click',()=>{
    borderright.textContent=`${++borderrightinitial}px`
updateBorderOfBox();
})
btn8.addEventListener('click',()=>{
    if(borderrightinitial>0){
        borderright.textContent=`${--borderrightinitial}px`
    }
    else{
        borderright.textContent=0`px`;
    }
    updateBorderOfBox();
})


// border radius
let topborderradiusinitial = 0;
let bottomborderradiusinitial = 0;
let leftborderradiusinitial = 0;
let rightborderradiusinitial = 0;

borderradtop.textContent=`0rem`;
borderradbottom.textContent=`0rem`
borderradleft.textContent=`0rem`
borderradright.textContent=`0rem`

btn9.addEventListener('click',()=>{
    borderradtop.textContent=`${++topborderradiusinitial}rem`

 updateBorderradius();
})

btn10.addEventListener('click',()=>{
    if(topborderradiusinitial>0){
        borderradtop.textContent=`${--topborderradiusinitial}rem`
    }
    else{
        borderradtop=`0rem`
    }
    updateBorderradius();
})

btn11.addEventListener('click',()=>{
    borderradbottom.textContent=`${++bottomborderradiusinitial}rem`
    updateBorderradius();
})
btn12.addEventListener('click',()=>{
    if(bottomborderradiusinitial>0){
        borderradbottom.textContent=`${--bottomborderradiusinitial}rem`
    }
    else{
        borderradbottom.textContent=`0rem`
    }
    updateBorderradius();
})
btn13.addEventListener('click',()=>{
borderradleft.textContent=`${++leftborderradiusinitial}rem`
updateBorderradius();

})
btn14.addEventListener('click',()=>{
    if(leftborderradiusinitial>0){
        borderradleft.textContent=`${--leftborderradiusinitial}rem`

    }
    else{
        borderradleft.textContent=`0rem`;
    }
    updateBorderradius();
})

btn15.addEventListener('click',()=>{
    borderradright.textContent=`${++rightborderradiusinitial}rem`
    updateBorderradius();
})
btn16.addEventListener('click',()=>{
    if(rightborderradiusinitial>0){
        borderradright.textContent=`${--rightborderradiusinitial}rem`
    }
    else{
        borderradrightd.textContent=`0rem`
    }
    updateBorderradius();
})



// box shadow:
let offsetxintitial=0;
let offsetyinitial=0;
let blurRadiusinitial=0;
let spreadRadiusinitial=0
let boxshadowcolor;



shadowColorInput.addEventListener('change',function(){
    let d=this.value;
    boxshadowcolor=d;
    updateshadow();
})

btn17.addEventListener('click',()=>{
    offsetX.textContent=`${++offsetxintitial}px`
    updateshadow();
})
btn18.addEventListener('click',()=>{
   
        offsetX.textContent=`${--offsetxintitial}px`
    updateshadow();

    })
btn19.addEventListener('click',()=>{
    offsetY.textContent=`${++offsetyinitial}px`
    updateshadow();
})
btn20.addEventListener('click',()=>{
    offsetY.textContent=`${--offsetyinitial}px`
     updateshadow();
})
btn21.addEventListener('click',()=>{
    blurRadius.textContent=`${++blurRadiusinitial}px`
     updateshadow();
})
btn22.addEventListener('click',()=>{
    if(blurRadiusinitial>0){
    blurRadius.textContent=`${--blurRadiusinitial}px`}
    else{
        blurRadius.textContent=`0px`
    }
     updateshadow();
})
btn23.addEventListener('click',()=>{
    spreadRadius.textContent=`${++spreadRadiusinitial}px`
     updateshadow();
})
btn24.addEventListener('click',()=>{
    spreadRadius.textContent=`${--spreadRadiusinitial}px`
     updateshadow();
})




// box -5---------------------------------------------------------------------------
let rotateXTextintial=0;
let rotateYTextinitial=0;
let perspectiveTextinitial=0;
let skewXTextinitial=0;
let skewYTextinitial=0;

btn25.addEventListener('click',()=>{
    rotateXText.textContent=`${++rotateXTextintial}deg`
    updatetansform();
})
btn26.addEventListener('click',()=>{
    rotateXText.textContent=`${--rotateXTextintial}deg`
      updatetansform();
})
btn27.addEventListener('click',()=>{
    rotateYText.textContent=`${++rotateYTextinitial}deg`
      updatetansform();
})
btn28.addEventListener('click',()=>{
    rotateYText.textContent=`${--rotateYTextinitial}deg`
      updatetansform();
})
btn29.addEventListener('click',()=>{
    perspectiveTextinitial+=50;
    perspectiveText.textContent=`${perspectiveTextinitial}px`
      updatetansform();
})
btn30.addEventListener('click',()=>{
    if(perspectiveTextinitial>0){
        perspectiveTextinitial-=50
        perspectiveText.textContent=`${perspectiveTextinitial}px`
    }
    else{
        perspectiveText.textContent=`0px`
    }
      updatetansform();
})
btn31.addEventListener('click',()=>{
    skewXText.textContent=`${++skewXTextinitial}deg`
      updatetansform();
})
btn32.addEventListener('click',()=>{
    skewXText.textContent=`${--skewXTextinitial}deg`
      updatetansform();
})
btn33.addEventListener('click',()=>{
    skewYText.textContent=`${++skewYTextinitial}deg`
      updatetansform();
})
btn34.addEventListener('click',()=>{
    skewYText.textContent=`${--skewYTextinitial}deg`
      updatetansform();
})



// box 5 end------------------------------------------------------------------------------
// update box
const updateBorderOfBox=()=>{
   
    box.style.borderLeft=`${borderleftinitial}px ${bordertypooo} ${bordercolorinitial}`
    box.style.borderRight=`${borderrightinitial}px ${bordertypooo} ${bordercolorinitial}`
    box.style.borderTop=`${bordertopinitial}px ${bordertypooo} ${bordercolorinitial}`
    box.style.borderBottom=`${borderbottomintial}px ${bordertypooo} ${bordercolorinitial}`
}


copyborder.addEventListener('click',()=>{
    const copyobj=`
     border-left:${borderleftinitial}px ${bordertypooo} ${bordercolorinitial};
    border-right:${borderrightinitial}px ${bordertypooo} ${bordercolorinitial};
    border-top:${bordertopinitial}px ${bordertypooo} ${bordercolorinitial};
    border-bottom:${borderbottomintial}px ${bordertypooo} ${bordercolorinitial};`
  navigator.clipboard.writeText( copyobj);
  alert("Copied to clipboard");
})

const updateBorderradius=()=>{
    
   //box.style.borderRadius = `${topborderradiusinitial}px ${rightborderradiusinitial}px ${bottomborderradiusinitial}px ${leftborderradiusinitial}px;`; 
   box.style.borderTopLeftRadius = `${topborderradiusinitial}rem`;
box.style.borderTopRightRadius = `${rightborderradiusinitial}rem`;
box.style.borderBottomRightRadius = `${bottomborderradiusinitial}rem`;
box.style.borderBottomLeftRadius = `${leftborderradiusinitial}rem`;

  
}
copyradius.addEventListener('click',()=>{
    const copyobj=`border-top-left-radius:${topborderradiusinitial}rem;
border-top-right-radius:${rightborderradiusinitial}rem;
border-bottom-right-radius:${bottomborderradiusinitial}rem;
border-bottom-left-radius:${leftborderradiusinitial}rem;`

navigator.clipboard.writeText(copyobj);
alert("Copied to clipboard")
})



// box shadow
const updateshadow=()=>{
    box.style.boxShadow=`${offsetxintitial}px ${offsetyinitial}px ${blurRadiusinitial}px ${spreadRadiusinitial}px ${boxshadowcolor} `
}

copyshawdow.addEventListener('click',()=>{
   const obj= `box-shadow:${offsetxintitial}px ${offsetyinitial}px ${blurRadiusinitial}px ${spreadRadiusinitial}px ${boxshadowcolor} `

   navigator.clipboard.writeText(obj)
   alert("Copied to clipboard")
})


// transform proeprty
const updatetansform=()=>{
     box.style.transform = `
    rotateX(${rotateXTextintial}deg)
    rotateY(${rotateYTextinitial}deg)
    skewX(${skewXTextinitial}deg)
    skewY(${skewYTextinitial}deg)
  `;
   bigbox.style.perspective = `${perspectiveTextinitial}px`;

}


copytransform.addEventListener('click',()=>{
    const newobj=`
       transform: 
    rotateX(${rotateXTextintial}deg)
    rotateY(${rotateYTextinitial}deg)
    skewX(${skewXTextinitial}deg)
    skewY(${skewYTextinitial}deg);
  perspective:${perspectiveTextinitial}px`
    
  navigator.clipboard.writeText(newobj)
alert("Copied to clipboard")

})


const updatecopydiv=()=>{
    const obj=`
     background-color:${save}   

     border-left:${borderleftinitial}px ${bordertypooo} ${bordercolorinitial};
    border-right:${borderrightinitial}px ${bordertypooo} ${bordercolorinitial};
    border-top:${bordertopinitial}px ${bordertypooo} ${bordercolorinitial};
    border-bottom:${borderbottomintial}px ${bordertypooo} ${bordercolorinitial};
    
  border-top-left-radius:${topborderradiusinitial}rem;
  border-top-right-radius:${rightborderradiusinitial}rem;
  border-bottom-right-radius:${bottomborderradiusinitial}rem;
  border-bottom-left-radius:${leftborderradiusinitial}rem;
    
  box-shadow:${offsetxintitial}px ${offsetyinitial}px ${blurRadiusinitial}px ${spreadRadiusinitial}px ${boxshadowcolor} 
  
   transform:  rotateX(${rotateXTextintial}deg) rotateY(${rotateYTextinitial}deg)  skewX(${skewXTextinitial}deg) skewY(${skewYTextinitial}deg);
   perspective:${perspectiveTextinitial}px  `
     
   copydiv.textContent=obj

}
document.querySelector(".getitems").addEventListener('click',updatecopydiv)
document.querySelector(".copytext").addEventListener('click',()=>{

 const copyobj2=` 
     background-color:${save};
     border-left:${borderleftinitial}px ${bordertypooo} ${bordercolorinitial};
     border-right:${borderrightinitial}px ${bordertypooo} ${bordercolorinitial};
     border-top:${bordertopinitial}px ${bordertypooo} ${bordercolorinitial};
     border-bottom:${borderbottomintial}px ${bordertypooo} ${bordercolorinitial};
    
     border-top-left-radius:${topborderradiusinitial}rem;
     border-top-right-radius:${rightborderradiusinitial}rem;
     border-bottom-right-radius:${bottomborderradiusinitial}rem;
     border-bottom-left-radius:${leftborderradiusinitial}rem;
    
    box-shadow:${offsetxintitial}px ${offsetyinitial}px ${blurRadiusinitial}px ${spreadRadiusinitial}px ${boxshadowcolor} ;
  
    transform:  rotateX(${rotateXTextintial}deg) rotateY(${rotateYTextinitial}deg)  skewX(${skewXTextinitial}deg) skewY(${skewYTextinitial}deg);
    perspective:${perspectiveTextinitial}px `


   navigator.clipboard.writeText(copyobj2)
alert("Copied to  clipboard")

})
apply1.addEventListener('click',updateBorderOfBox)
apply2.addEventListener('click',updateBorderradius)








