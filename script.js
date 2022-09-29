let input, botao,indexId;
input= document.getElementById("input");
botaoAdd= document.getElementById("botaoAdd");
indexId= 0;


botaoAdd.addEventListener('click',function(e){
    var texto = input.value;
   
        if(texto.length > 0 && texto != ""){
            indexId ++
            document.getElementById("campoDeTexto").innerHTML += `
            <div id="tarefa${indexId}" class="d-flex flex-row mb-3">
                <div class="p-2">
                    <button id="botaoCheck${indexId}" onclick="marcar(textoTarefa${indexId}, imgCheck${indexId},tarefa${indexId} )" class="botao-tarefa">
                        <svg id="imgCheck${indexId}" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        </svg>
                    </button>
                </div>

                <div class="p-2">
                    <h4 id="textoTarefa${indexId}" class="texto-tarefa" wrap="hard"> ${texto.toUpperCase()} </h4>
                </div>

                <div class="p-2">
                    <button id="botaoDelete${indexId}" onclick="deletar(tarefa${indexId})" "type="button" class="btn btn-outline-danger botao-delete-tarefa">
                        Deletar
                    </button>
                </div>
            </div> `;
            input.value = "";
            input.focus();
        } else{
            input.value = "";
            input.focus();
        }
});

input.addEventListener("keyup", function (e){
    if (e.keyCode === 13){
        e.preventDefault();
        botaoAdd.click();
    }
});

deletar = (id) => id.remove();

var contador = 0;
function marcar(taref,img,div){
    contador++
    taref.classList.add("texto-tarefa-concluida");
    img.innerHTML =`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
    </svg>`;

    div.parentNode.appendChild(div);

    
/*
    if(contador % 2 == 1){
        taref.classList.add("texto-tarefa-concluida");
        img.innerHTML =`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg>`;

        div.parentNode.appendChild(div);

    }else{
        taref.classList.remove("texto-tarefa-concluida");
        img.innerHTML =`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        </svg>`;
    }
    
*/

};
