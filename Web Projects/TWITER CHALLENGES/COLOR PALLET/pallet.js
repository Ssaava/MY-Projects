const colors = [
    "#ffab03",
    "#23aaaa",
    "#00ff90",
    "#940022",
    "#ccaaa0",
    "#00aa55",
    "#707700",
    "#1b2937",
    "#bb1050",
    "#1A8CD8"
]
const Button = document.querySelector('button')
const Color_pink = document.querySelector('.color-div-pink');
const Color_blue = document.querySelector('.color-div-blue');
const grey = document.querySelector('.color-div-grey');
const green = document.querySelector('.color-div-green');
const yellow = document.querySelector('.color-div-yellow');

const Color_pink1 = document.querySelector('.pink');
const Color_blue1 = document.querySelector('.blue');
const grey1 = document.querySelector('.grey');
const green1 = document.querySelector('.green');
const yellow1 = document.querySelector('.yellow');


const index = 0;

Button.addEventListener("click", ()=>{
    let p = Math.floor((Math.random() * 10));
    Color_pink1.innerHTML = colors[p]
    Color_pink.style.background = colors[p]
    // next color
    let b = Math.floor((Math.random() * 10))
    Color_blue1.innerHTML = colors[b]
    Color_blue.style.background = colors[b]
    // next color
    let g = Math.floor((Math.random() * 10))
    grey1.innerHTML = colors[g]
    grey.style.background = colors[g]
    // next color
    let gr = Math.floor((Math.random() * 10))
    green1.innerHTML = colors[gr]
    green.style.background = colors[gr]
    // next color
    let y = Math.floor((Math.random() * 10))
    yellow1.innerHTML = colors[y]
    yellow.style.background = colors[y]
    
});

const setColor = document.querySelector('.color-value')
Color_pink.addEventListener('click', ()=>{
    setColor.innerHTML  = Color_pink1.innerHTML
})


Color_blue.addEventListener('click', ()=>{
    setColor.innerHTML  = Color_blue1.innerHTML
})

green.addEventListener('click', ()=>{
    setColor.innerHTML  = green1.innerHTML
})


grey.addEventListener('click', ()=>{
    setColor.innerHTML  = grey1.innerHTML
})

yellow.addEventListener('click', ()=>{
    setColor.innerHTML  = yellow1.innerHTML
})


