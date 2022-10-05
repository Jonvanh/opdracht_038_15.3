
// declaring variables

let Menu_out = Boolean(false)


// declaring functions

const Menu_on = function() {
    document.getElementById('container').style.visibility = "visible"
    document.getElementById('container').style.overflow = "visible"
    document.getElementById('container').style.padding = "120px 0px 0px 50px"

    
}
const Menu_off = function() {
    document.getElementById('container').style.visibility = "hidden"
    document.getElementById('container').style.overflow = "hidden";
}



var click_1menu = function() {
    document.querySelector("div").addEventListener('click', function () {
        if (Menu_out == false) {
            Menu_on()
            Menu_out = true    
        }
        else {
            Menu_off()
            Menu_out = false    
        }
    })
}


var click_home = function() {
document.querySelector('#btn-home').addEventListener('click', function () {
    const bodyElement = document.body;
    bodyElement.className = ''
    bodyElement.classList.add("hm")  
    Menu_off()
})
}

var click_red = function() {
document.querySelector('#btn-red').addEventListener('click', function () {
    const bodyElement = document.body;
    bodyElement.className = ''
    bodyElement.classList.add("red")
    Menu_off()
})
}

var click_orange = function() {
document.querySelector('#btn-orange').addEventListener('click', function () {
    const bodyElement = document.body;
    bodyElement.className = ''
    bodyElement.classList.add("orange")
    Menu_off()
})
}

var click_purple = function() {
document.querySelector('#btn-purple').addEventListener('click', function () {
    const bodyElement = document.body;
    bodyElement.className = ''
    bodyElement.classList.add("purple")
    Menu_off()
})
}

var click_green = function() {
document.querySelector('#btn-green').addEventListener('click', function () {
    const bodyElement = document.body;
    bodyElement.className = ''
    bodyElement.classList.add("green")
    Menu_off()
})
}


// turning on functions

click_1menu()
click_home()
click_red()
click_orange()
click_purple()
click_green()