const checkbox = document.getElementById('checkbox');
const submitButton = document.querySelector('button[type=submit]');

// Disable checkbox and submit button
checkbox.disabled = true;
submitButton.disabled = true;

const elements = document.querySelectorAll('.element');
const selectColor = document.getElementById("SelectColor");

// Asign color to elements
elements.forEach(function(element){
    const color = getRandomColor();

    element.style.backgroundColor = color;
    element.innerHTML=color;
})


selectColor.innerHTML=elements[Math.floor(Math.random()*9)].innerHTML;

// generate random color function
function getRandomColor(){
    const letter = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random()*16)];
    }
    return color;
}

// check if right color
elements.forEach(function(element){
    element.addEventListener('click',function(){
        if(element.innerHTML === selectColor.innerHTML){
            checkbox.checked = true;
            submitButton.disabled = false;
            submitButton.classList.remove("btn-light");
            submitButton.classList.add("btn-success");
            alert("You are human!");
        }
        else{
            alert("Please verify that you are human");
            location.reload();
        }
    })
})

