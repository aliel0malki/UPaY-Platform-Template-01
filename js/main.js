// Show menu on click

let links = document.querySelector('#links');            
let ul = document.querySelector('#ul');
let li = document.querySelector('#clic');

links.addEventListener('click', function(){
    ul.style.display="block";
})

    
    li.addEventListener('click', function(){
        console.log("Clicked")
    })
    
links.addEventListener('mouseout', function(){
    if (ul.style.display === "block") {
        ul.style.display="none";
    }
})
    
let plans = document.querySelector('#plans');

plans.addEventListener('click', function(){
    window.scroll({
        left:0,
        top:770,
        
        behavior: 'smooth'
    })
})