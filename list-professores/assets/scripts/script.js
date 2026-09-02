let nomeProfessorProp = document.getElementById("nomeProfessorProp");
let limparInputPropNome = document.getElementById("limparInputPropNome");

let disciplinaProp = document.getElementById("disciplinaProp");
let limparInputPropDisciplina = document.getElementById("limparInputPropDisciplina");

let nomeProfessorTec = document.getElementById("nomeProfessorTec");
let limparInputTecNome = document.getElementById("limparInputTecNome");

let disciplinaTec = document.getElementById("disciplinaTec");
let limparInputTecDisciplina = document.getElementById("limparInputTecDisciplina");

nomeProfessorProp.addEventListener("input", function () { // keypress
    if (nomeProfessorProp.value.length > 0) {
        limparInputPropNome.style.display = 'block';
    } else {
        limparInputPropNome.style.display = 'none';
    }
});

disciplinaProp.addEventListener("input", function () { // keypress
    if (disciplinaProp.value.length > 0) {
        limparInputPropDisciplina.style.display = 'block';
    } else {
        limparInputPropDisciplina.style.display = 'none';
    }
});

nomeProfessorTec.addEventListener("input", function () { // keypress
    if (nomeProfessorTec.value.length > 0) {
        limparInputTecNome.style.display = 'block';
    } else {
        limparInputTecNome.style.display = 'none';
    }
});

disciplinaTec.addEventListener("input", function () { // keypress
    if (disciplinaTec.value.length > 0) {
        limparInputTecDisciplina.style.display = 'block';
    } else {
        limparInputTecDisciplina.style.display = 'none';
    }
});

limparInputPropNome.addEventListener("click", function () {
    if (nomeProfessorProp.value !== "") {
        nomeProfessorProp.value = "";
        limparInputPropNome.style.display = 'none';
    }
});

limparInputPropDisciplina.addEventListener("click", function () {
    if (disciplinaProp.value !== "") {
        disciplinaProp.value = "";
        limparInputPropDisciplina.style.display = 'none';
    }
});

limparInputTecNome.addEventListener("click", function () {
    if (nomeProfessorTec.value !== "") {
        nomeProfessorTec.value = "";
        limparInputTecNome.style.display = 'none';
    }
});

limparInputTecDisciplina.addEventListener("click", function () {
    if (disciplinaTec.value !== "") {
        disciplinaTec.value = "";
        limparInputTecDisciplina.style.display = 'none';
    }
});

const inserirPropBtn = document.getElementById("inserirProp");
let tableProp = document.getElementById("tableProp");
let naoEncontrado = document.getElementById("naoEncontrado");

// let professoresProp = [];
let professoresProp = 0;
let posicao = 0;

inserirPropBtn.addEventListener("click", function () {
    if (nomeProfessorProp.value !== "") {
        if (disciplinaProp.value == "") {
            disciplinaProp.value = "-";
        }

        criarNovoProp(nomeProfessorProp.value, disciplinaProp.value);
        nomeProfessorProp.value = "";
        disciplinaProp.value = "";
        limparInputPropNome.style.display = 'none';
        limparInputPropDisciplina.style.display = 'none';
    } else {
        alert("Complete os campos!");
    }
});

function criarNovoProp(nomeProp, disciplinaProp) {
    naoEncontrado.style.display = 'none';

    posicao++;
    let posicaoSpan = document.createElement("span");
    posicaoSpan.textContent = posicao;

    let tr = document.createElement("tr");
    tr.classList.add("td-itens");
    tr.setAttribute("id", "idItens");

    let tdPosicao = document.createElement("td");
    tdPosicao.classList.add("posicao");
    let arrowUp = document.createElement("div");
    arrowUp.classList.add("arrow", "green");
    let imgArrowUp = document.createElement("img");
    imgArrowUp.src = "/assets/images/icons/arrow.png";
    imgArrowUp.alt = "arrow.png";
    imgArrowUp.classList.add("arrow-up");
    imgArrowUp.setAttribute("id", "arrowUp");
    arrowUp.appendChild(imgArrowUp);
    tdPosicao.appendChild(arrowUp);
    tdPosicao.appendChild(posicaoSpan);
    let arrowDown = document.createElement("div");
    arrowDown.classList.add("arrow", "red");
    let imgArrowDown = document.createElement("img");
    imgArrowDown.src = "/assets/images/icons/arrow.png";
    imgArrowDown.alt = "arrow.png";
    imgArrowDown.classList.add("arrow-down");
    imgArrowDown.setAttribute("id", "arrowDown");
    arrowDown.appendChild(imgArrowDown);
    tdPosicao.appendChild(arrowDown);

    let tdNome = document.createElement("td");
    tdNome.classList.add("nome-td");
    tdNome.textContent = nomeProp;

    let tdDisciplina = document.createElement("td");
    tdDisciplina.classList.add("disciplina-td");
    tdDisciplina.textContent = disciplinaProp;
    let deleteProp = document.createElement("span");
    deleteProp.classList.add("deletar-prop");
    deleteProp.setAttribute("id", "deleteProp");    
    deleteProp.textContent = "🗑️";
    tdDisciplina.appendChild(deleteProp);

    professoresProp++;
    
    deleteProp.addEventListener("click", function () {
        professoresProp--;
        if (professoresProp == 0) {
            naoEncontrado.style.display = 'table-row';
            posicao = 0;
        }
        tableProp.removeChild(tr);
    });

    tr.appendChild(tdPosicao);
    tr.appendChild(tdNome);
    tr.appendChild(tdDisciplina);
    tableProp.appendChild(tr);




    let thsProp = document.querySelectorAll("#tableProp tr th");
    // let propContainer = document.getElementById("propContainer");
    if (professoresProp >= 13) {
        thsProp.forEach(th => {
            th.style.backgroundColor = "rgb(0, 0, 0, 0.8)";
            th.style.backdropFilter = "blur(5px)";
        });
        // propContainer.style.borderBottom = "3px solid white";
    } else {
        thsProp.forEach(th => {
            th.style.backgroundColor = "transparent";
            th.style.filter = "none";
        });
        // propContainer.style.borderBottom = "none";
    }

    // tableProp.innerHTML += `
    //     <tr class="td-itens" id="tdItens">
    //         <td class="posicao">
    //             <div class="arrow green">
    //                 <img src="/assets/images/icons/arrow.png" alt="arrow.png" class="arrow-up">
    //             </div>
    //             ${posicao++}
    //             <div class="arrow red">
    //                 <img src="/assets/images/icons/arrow.png" alt="arrow.png" class="arrow-down">
    //             </div>
    //         </td>
    //         <td class="nome-td">${nomeProp}</td> 
    //         <td class="disciplina-td">
    //             ${disciplinaProp}
    //             <span class="deletar-prop" id="deleteProp">🗑️</span>
    //         </td> 
    //     </tr>
    // `;
}

// tableProp.innerHTML += `
    //     <tr class="td-itens" id="tdItens">
    //         <td class="posicao">
    //             <div class="arrow green">
    //                 <img src="/assets/images/icons/arrow.png" alt="arrow.png" class="arrow-up">
    //             </div>
    //             ${posicao++}
    //             <div class="arrow red">
    //                 <img src="/assets/images/icons/arrow.png" alt="arrow.png" class="arrow-down">
    //             </div>
    //         </td>
    //         <td class="nome-td">${nomeProp}</td> 
    //         <td class="disciplina-td">
    //             ${disciplinaProp}
    //             <span class="deletar-prop" id="deleteProp">🗑️</span>
    //         </td> 
    //     </tr>
    // `;





document.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        inserirPropBtn.click();
    }
});