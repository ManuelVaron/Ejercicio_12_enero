
function validar() {
    let Nombre, Edad = 18, Género = Masculino

    Nombre = document.getElementById("Nombre").value
    Edad = document.getElementById("Edad").value
    Género = document.getElementById("Género").value

alert(Nombre + " " + Edad + " " + Género)
}

if (Edad<18) {
    alert("Usted es menor de edad y no puede ingresar")
    
} else { alert("Usted es mayor de edad y puede ingresar")
    
}

if(Género = Masculino) {
    alert("Usted debe pagar 35000 pesos" )
    
} else { alert("Usted debe pagar 20000 pesos y saludar con el nombre")
    
}

for (let index = 0; index < 20; index++) {
    console.log(index)
    
}