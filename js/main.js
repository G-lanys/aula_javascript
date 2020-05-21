

function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar.";
    //console.log(document.getElementById("agradecimento"));

}
function redirecionar(){

     window.open("https://digitalinnovation.one/");   //formas para abrir um pagina de internet no clique em outra aba. */
    /* window.location.href = "https://digitalinnovation.one/";   formas para abrir um pagina de internet no clique na msm pagina/. */
}
function trocar(elemento){
    //document.getElementById("mousemouve").innerHTML = "Obrigado por passar o mouse.";
    elemento.innerHTML = "Obrigado por passar o mouse.";
    //alert("trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemouve").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui.";
}
function load(){
    alert("Página carregada");
}
function funcaoChange(elemento){
   console.log(elemento.value)
}


/*
function soma(n1,n2){
    return n1 + n2;;
}*/

/*var nome = "Alane Goes";
var idade = 30; 
var frase = "Japão e o meolhor time do mundo";
alert("Bem vindo" + nome);
*/

//alert(frase.replece("Japão", "Brasil")); o replace troca o primeiro valor pelo segundo ou seja Japão por Brasil.
//console.log(frase.replece("Japão", "Brasil")); funciona no console da pagina com o F12.
//console.log(frase.toUpperCase()); serve para colocar tudo em maiusculo;
//console.log(frase.toLowerCase()); serve para colocar tudo em minusculo.
