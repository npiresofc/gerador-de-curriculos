// Elementos do formulário
let inputNome = document.getElementById('nome');
let inputCargo = document.getElementById('cargo');
let inputEmail = document.getElementById('email');
let inputTelefone = document.getElementById('telefone');
let inputLinkedin = document.getElementById('linkedin');
let inputLocal = document.getElementById('local');
let inputResumo = document.getElementById('resumo');
let inputExperiencia = document.getElementById('experiencia');
let inputFormacao = document.getElementById('formacao');
let inputHabilidades = document.getElementById('habilidades');

// Elementos da prévia
let prevNome = document.getElementById('prevNome');
let prevCargo = document.getElementById('prevCargo');
let prevEmail = document.getElementById('prevEmail');
let prevTelefone = document.getElementById('prevTelefone');
let prevLinkedin = document.getElementById('prevLinkedin');
let prevLocal = document.getElementById('prevLocal');
let prevResumo = document.getElementById('prevResumo');
let prevExperiencia = document.getElementById('prevExperiencia');
let prevFormacao = document.getElementById('prevFormacao');
let prevHabilidades = document.getElementById('prevHabilidades');


function atualizarCurriculo() {

    // Nome
    if (inputNome.value == '') {
        prevNome.textContent = 'Seu Nome Aqui';
    } 
    else {
        prevNome.textContent = inputNome.value;
    }


    // Cargo
    if (inputCargo.value == '') {
        prevCargo.textContent = 'Cargo desejado';
    } 
    else {
        prevCargo.textContent = inputCargo.value;
    }


    // Email
    if (inputEmail.value == '') {
        prevEmail.textContent = '✉️ email@exemplo.com';
    } 
    else {
        prevEmail.textContent = '✉️ ' + inputEmail.value;
    }


    // Telefone
    if (inputTelefone.value == '') {
        prevTelefone.textContent = '📞 (00) 00000-0000';
    } 
    else {
        prevTelefone.textContent = '📞 ' + inputTelefone.value;
    }


    // LinkedIn
    if (inputLinkedin.value == '') {
        prevLinkedin.textContent = '🔗 linkedin.com/in/seuperfil';
    } 
    else {
        prevLinkedin.textContent = '🔗 ' + inputLinkedin.value;
    }


    // Local
    if (inputLocal.value == '') {
        prevLocal.textContent = '📍 Cidade, Estado';
    } 
    else {
        prevLocal.textContent = '📍 ' + inputLocal.value;
    }
    

    // Resumo
    if (inputResumo.value == '') {
        prevResumo.textContent = 'Seu resumo aparecerá aqui.';
        prevResumo.classList.add('placeholder-text');
    } 
    else {
        prevResumo.textContent = inputResumo.value;
        prevResumo.classList.remove('placeholder-text');
    }


    // Experiência
    if (inputExperiencia.value == '') {
        prevExperiencia.textContent = 'Suas experiências aparecerão aqui.';
        prevExperiencia.classList.add('placeholder-text');
    } 
    else {
        prevExperiencia.textContent = inputExperiencia.value;
        prevExperiencia.classList.remove('placeholder-text');
    }


    // Formação
    if (inputFormacao.value == '') {
        prevFormacao.textContent = 'Sua formação aparecerá aqui.';
        prevFormacao.classList.add('placeholder-text');
    } 
    else {
        prevFormacao.textContent = inputFormacao.value;
        prevFormacao.classList.remove('placeholder-text');
    }


    // Habilidades
    if (inputHabilidades.value == '') {
        prevHabilidades.textContent = 'Suas habilidades aparecerão aqui.';
        prevHabilidades.classList.add('placeholder-text');
    } 
    else {
        prevHabilidades.textContent = inputHabilidades.value;
        prevHabilidades.classList.remove('placeholder-text');
    }
}


function limparTudo() {
    inputNome.value = '';
    inputCargo.value = '';
    inputEmail.value = '';
    inputTelefone.value = '';
    inputLinkedin.value = '';
    inputLocal.value = '';
    inputResumo.value = '';
    inputExperiencia.value = '';
    inputFormacao.value = '';
    inputHabilidades.value = '';

    atualizarCurriculo();
}


// Preenche a prévia assim que a página carrega
atualizarCurriculo();