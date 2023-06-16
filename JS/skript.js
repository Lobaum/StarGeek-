var listaUsuarios = []
listaUsuarios = JSON.parse(localStorage.getItem('bdlogin'))
if (listaUsuarios == null){
    listaUsuarios = []
}

function faz(){ 
    var num = parseInt(Math.random() * listafilmes.length)
        document.getElementById('indi').innerHTML = 
        `<div>
            <img src="${listafilmes[num].link}" width="150px" height="225px">
            <p>${listafilmes[num].nome}</p>
        </div>`
    }

function validarCadastro(nameUsuario, usuario, senha, confSenha){
    if (nameUsuario == '' || usuario == '' || senha == '' || confSenha == '') {
        document.getElementById('erro').innerHTML  = `<b>Verifique os dados antes de cadastrar`
        erro.style.color = 'red'
        return false
    }

    if (senha != confSenha) {
        document.getElementById('errosnh').innerHTML  = `<b>Senhas não conferem`
        errosnh.style.color = 'red'
        return false
    }

    return true
}

function botaoCadastro() {
    var nameUsuario = document.getElementById("name").value
    var usuario = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    var confSenha = document.getElementById("senha2").value
    
    var possoCadastrar = validarCadastro(nameUsuario, usuario, senha, confSenha)
    if (possoCadastrar == false) {
        return false
    }
    
    var objUsuario = {
        name: nameUsuario,
        login: usuario,
        senha: senha 
    }
    listaUsuarios.push(objUsuario)
    localStorage.setItem( 'bdlogin', JSON.stringify(listaUsuarios)) 

    document.getElementById("name").value = ''
    document.getElementById("email").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("senha2").value = ''
    document.getElementById("erro").innerHTML = ''
    document.getElementById("name").focus()

    alert ('Usuário cadastro com sucesso')
    window.location.href = 'login.html'
}

function btnlog(){
    var usuario = document.getElementById("email").value
    var senha = document.getElementById("senha3").value
    
    var encontrou = false
    listaUsuarios.forEach ( item => {
        if (usuario == item.login && senha == item.senha) {
            alert (`Bem vindo ao sistema, ${item.name}`)
            encontrou = true
            window.location.href = 'filmes.html'
        }
        
    })
    if (encontrou == false) {
        document.getElementById('errolog').innerHTML  = `<b>Usuário e/ou senha inválidos`
        errolog.style.color = 'red'
    }
}

function btnmd() {
    location.href = "midia.html"
}

// Cadastro de midia

var listafilmes = []

listafilmes = JSON.parse(localStorage.getItem('bdfilmes'))
if (listafilmes == null){
    listafilmes = []
}

exibirfilmes()

console.log(listafilmes)

function validarcadastro(nomefilme, imagemfilme){
    if (nomefilme != '' && imagemfilme != ''){
        return true
    } else {
        return false
    }
}

function veri() {
    var nomefilme = document.getElementById('name').value
    var imagemfilme = document.getElementById('img').value

    var possocadastrar = validarcadastro(nomefilme, imagemfilme)
    if (possocadastrar == false) {
        document.getElementById('erro').innerHTML  = `<b>Verifique os dados antes de cadastrar`
        erro.style.color = 'red'
        return
    }

    var filme = {
        nome: nomefilme,
        link: imagemfilme
    }
    listafilmes.push(filme)
    localStorage.setItem ('bdfilmes', JSON.stringify(listafilmes))  
    
    document.getElementById("name").value = ''
    document.getElementById("img").value = ''
    document.getElementById("name").focus

}