let operando1 = "";
let operando2 = "";
let operacion = "";
let screen = document.getElementById("screen");

//------------------------------NUMEROS------------------------------
document.getElementById("one").addEventListener("click", function (event) {
    if (screen.textContent == 0) {
        screen.innerHTML = 1;
    } else {
        screen.innerHTML += 1;
    }

    if (operacion == "") {
        operando1 += "1"
    } else {
        operando2 += "1"
    }
})
document.getElementById("two").addEventListener("click", function (event) {
    if (screen.textContent == 0) {
        screen.innerHTML = 2;
    } else {
        screen.innerHTML += 2;
    }

    if (operacion == "") {
        operando1 += 2
    } else {
        operando2 += 2
    }
})
document.getElementById("three").addEventListener("click", function (event) {
    if (screen.textContent == 0) {
        screen.innerHTML = 3;
    } else {
        screen.innerHTML += 3;
    }

    if (operacion == "") {
        operando1 += 3
    } else {
        operando2 += 3
    }
})
document.getElementById("four").addEventListener("click", function (event) {
    if (screen.textContent == 0) {
        screen.innerHTML = 4;
    } else {
        screen.innerHTML += 4;
    }

    if (operacion == "") {
        operando1 += 4
    } else {
        operando2 += 4
    }
})
document.getElementById("five").addEventListener("click", function (event) {
    if (screen.textContent == 0) {
        screen.innerHTML = 5;
    } else {
        screen.innerHTML += 5;
    }

    if (operacion == "") {
        operando1 += 5
    } else {
        operando2 += 5
    }

})
document.getElementById("six").addEventListener("click", function (event) {
    if (screen.textContent == 0) {
        screen.innerHTML = 6;
    } else {
        screen.innerHTML += 6;
    }

    if (operacion == "") {
        operando1 += 6
    } else {
        operando2 += 6
    }
})
document.getElementById("seven").addEventListener("click", function (event) {
    if (screen.textContent == 0) {
        screen.innerHTML = 7;
    } else {
        screen.innerHTML += 7;
    }

    if (operacion == "") {
        operando1 += 7
    } else {
        operando2 += 7
    }
})
document.getElementById("eight").addEventListener("click", function (event) {
    if (screen.textContent == 0) {
        screen.innerHTML = 8;
    } else {
        screen.innerHTML += 8;
    }

    if (operacion == "") {
        operando1 += 8
    } else {
        operando2 += 8
    }
})
document.getElementById("nine").addEventListener("click", function (event) {
    if (screen.textContent == 0) {
        screen.innerHTML = 9;
    } else {
        screen.innerHTML += 9;
    }

    if (operacion == "") {
        operando1 += 9
    } else {
        operando2 += 9
    }
})
document.getElementById("zero").addEventListener("click", function (event) {
    if (screen.textContent == 0) {
        screen.innerHTML = 0;
    } else {
        screen.innerHTML += 0;
    }

    if (operacion == "") {
        operando1 += 0
    } else {
        operando2 += 0
    }
})

//------------------------------OPERACIONES------------------------------


document.getElementById("division").addEventListener("click", function (event) {

    operacion = "/";
    limpiar();
})
document.getElementById("multiplication").addEventListener("click", function (event) {

    operacion = "*";
    limpiar();
})
document.getElementById("minus").addEventListener("click", function (event) {

    operacion = "-";
    limpiar();
})
document.getElementById("plus").addEventListener("click", function (event) {

    operacion = "+";
    limpiar();
})
document.getElementById("coma").addEventListener("click", function (event) {
    screen.innerHTML += ",";

    if (operando2 === "") {
        operando1 += "."
    } else {
        operando2 += "."
    };
})
document.getElementById("moreOrLess").addEventListener("click", function (event) {
    if (operando1 != "") {
        screen.textContent = "-" + operando1;
        operando1 *= -1;
    }
    if (operando2 != "") {
        screen.textContent = "-" + operando2;
        operando2 *= -1;
    }
})
document.getElementById("CE").addEventListener("click", function (event) {
    limpiar();
})
document.getElementById("C").addEventListener("click", function (event) {
    resetear();
})
document.getElementById("Delete").addEventListener("click", function (event) {
    if (operando1 != "") {  
        operando1 = operando1.substring(0, operando1.length - 1);
        screen.innerHTML = operando1;
    }
    if (operando2 != "") {  
        operando2 = operando2.substring(0, operando2.length - 1);
        screen.innerHTML = operando2;
    }
})
document.getElementById("result").addEventListener("click", function (event) {
    resultado();
})

function limpiar() {
    screen.innerHTML = "";
}

function resetear() {
    screen.innerHTML = "";
    operando1 = "";
    operando2 = "";
    operacion = "";
}

function resultado() {
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operando1) + parseFloat(operando2);
            break;
        case "-":
            res = parseFloat(operando1) - parseFloat(operando2);
            break;
        case "*":
            res = parseFloat(operando1) * parseFloat(operando2);
            break;
        case "/":
            res = parseFloat(operando1) / parseFloat(operando2);
            break;
    }
    resetear();
    screen.innerHTML = res;
    console.log(res);
}
