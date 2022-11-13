/////////////////////////////////////////////////
let gen = document.querySelector('.switch_color')
  , btn_red = document.querySelector('.red')
  , btn_yellow = document.querySelector('.yellow')
  , btn_green = document.querySelector('.green')
  , btn_reset = document.querySelector('.reset')
  , color = 0
  , counter = document.querySelector('.counter');

counter.style.cssText = `
color: white;
font-size: 40px;
transform: translateY(-150px);
`;

gen.style.cssText=`
background-color: black;
max-width: 1440px;
height: 64vh;
background-repeat: no-repeat;
align-items: center;
text-align: center;
padding-top: 200px;x
}`;

btn_red.style.cssText='background-color: red; cursor: pointer';
btn_yellow.style.cssText='background-color: yellow; cursor: pointer';
btn_green.style.cssText='background-color: green; cursor: pointer';
btn_reset.style.cursor = 'pointer' 

btn_red.addEventListener('click', ()=>{
    console.log('Red');
    counter.innerHTML++;
setTimeout(()=>{
    color = btn_red.style.cssText='background-color: blue; cursor: pointer; border-bottom: 3px solid white;';
    gen.style.backgroundColor = 'blue';
    btn_red.innerHTML = 'blue';
    btn_yellow.style.cssText='background-color: yellow; cursor: pointer';
    btn_yellow.innerHTML = 'Yellow';
    btn_green.style.cssText='background-color: green; cursor: pointer';
    btn_green.innerHTML = 'Green'
    console.log('Paint it blue');
},1000);

btn_reset.addEventListener('click', ()=>{
    clearTimeout(btn_red);
    color = btn_red.style.cssText='background-color: red; cursor: pointer';
    gen.style.backgroundColor = 'black';
    btn_red.innerHTML = 'Red';
})
});

btn_yellow.addEventListener('click', ()=>{
    console.log('Yellow');
    counter.innerHTML++;
setTimeout(()=>{
    color = btn_yellow.style.cssText='background-color: pink; cursor: pointer; border-bottom: 3px solid white';
    gen.style.backgroundColor = 'pink';
    btn_yellow.innerHTML = 'Pink';
    btn_red.style.cssText='background-color: red; cursor: pointer';
    btn_red.innerHTML = 'Red'
    btn_green.style.cssText='background-color: green; cursor: pointer';
    btn_green.innerHTML = 'Green'
    console.log('Paint it pink');
},1000);

btn_reset.addEventListener('click', ()=>{
    clearTimeout(btn_yellow)
    color = btn_yellow.style.cssText='background-color: yellow; cursor: pointer';
    gen.style.backgroundColor = 'black';
    btn_yellow.innerHTML = 'Yellow';
});
});

btn_green.addEventListener('click', ()=>{
    console.log('Green');
    counter.innerHTML++;
setTimeout(()=>{
    color = btn_green.style.cssText='background-color: orange; cursor: pointer; border-bottom: 3px solid white;';
    gen.style.backgroundColor = 'orange';
    btn_green.innerHTML = 'Orange'
    btn_red.style.cssText='background-color: red; cursor: pointer';
    btn_red.innerHTML = 'Red';
    btn_yellow.style.cssText='background-color: yellow; cursor: pointer';
    btn_yellow.innerHTML = 'Yellow';
    console.log('Paint it orange');
},1000);

btn_reset.addEventListener('click', ()=>{
clearTimeout(btn_green);
    color = btn_green.style.cssText='background-color: green; cursor: pointer';
    gen.style.backgroundColor = 'black';
    btn_green.innerHTML = 'Green';
});
});