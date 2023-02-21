const pisoSalarial = 1800;
let i = 0;
let numeroDependente, numeroProfessor, numeroEmprestimo;

function number(){
    let a = document.getElementById("seletor");
    if(a.value == "PROFESSOR"){
        numeroProfessor = document.getElementById("numeroDependentes").value
    }else{
        numeroDependente = document.getElementById("numeroDependentes").value;
    }
    numeroEmprestimo = document.getElementById("numeroEmprestimos").value;
    historico(numeroDependente, numeroProfessor, numeroEmprestimo);
}


function calc(){
    let adicionalDependente = (2/100*pisoSalarial)*numeroDependente;
    let adicionalProfessor = (4/100*pisoSalarial)*numeroProfessor;
    let emprestimo = (10/100*pisoSalarial)*numeroEmprestimo;
    let salarioLiquido = pisoSalarial+adicionalDependente+adicionalProfessor-emprestimo;
    document.getElementById("salario").innerHTML= salarioLiquido;
}



function check(){
    let b = document.getElementById("duvida")
    if(i%2 == 0){
        document.getElementById("numeroEmprestimos").style.visibility = "visible";
    }else{
        document.getElementById("numeroEmprestimos").style.visibility = "hidden";
    }
    if(b.value == "on"){
        i++;
    }
}

function historico(numeroDependente, numeroProfessor, numeroEmprestimo){
    document.getElementById("01").innerHTML = numeroDependente;
    document.getElementById("02").innerHTML = numeroProfessor;
    document.getElementById("03").innerHTML = numeroEmprestimo;
}
