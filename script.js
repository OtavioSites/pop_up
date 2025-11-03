let botao_cadastro = document.querySelector("#cadastro");
let popup = document.querySelector("#popup");
let cpf_cadastro = document.getElementById("cpf_cadastro");
let form = document.querySelector("form");
let close = document.querySelector("#fechar-cadastro");



botao_cadastro.addEventListener("click", () => {
    popup.style.display = "flex";

});

close.addEventListener("click", () => {
    popup.style.display = "none";

});


console.log(1);
/*cpf_cadastro.addEventListener("keypress", function(e) {
    if(cpf_cadastro.value.length > 11){
        e.preventDefault()

    }
})


cpf_cadastro.addEventListener("input", function(e) {
    

        console.log()
    e.target.value = regexCPF(e.target.value);


})
function regexCPF(value) { 
  

    
    value = value.replace(/\D/, "")
    return value.replace(/^(\d{3})\.?(\d{3})\.?(\d{3})\-?(\d{2})/, "$1.$2.$3-$4");

    

}*/

$(document).ready(function () {
    $('#cpf_cadastro').mask('000.000.000-00');
});

let submit_cadastro = document.querySelector("#button_cadastro");
let style = document.querySelector("style")
submit_cadastro.addEventListener("click", (e) => {
    console.log(e)
    console.log(e.clientX);
    let teste = submit_cadastro.getBoundingClientRect();
    console.log(teste)
    let x = e.clientX - teste.left;
    let y = e.clientY - teste.top;
    setTimeout(function () {

        submit_cadastro.classList = "button_on"
        style.textContent += `
            .button_on::before{
                left: ${x}px;
                top: ${y}px;
            }
        `

    }, 100)
    submit_cadastro.classList = "button_off"
    console.log(submit_cadastro)

})

let olho = document.getElementById("olho");
let toggle = false;
olho.addEventListener("click", () => {

    if (toggle == false) {
        olho.src = "./assets/svg/eye-password-see-view-svgrepo-com.svg"
        style.textContent += `
        #verSenha > img{
            
            transform: scale(2.7);
            
            }
    
        `;
        document.getElementById("senha_cadastro").setAttribute("type", "text")
        toggle = true;
    } else if (toggle == true) {
        olho.src = "./assets/svg/eye_visible_hide_hidden_show_icon_145988.svg"
        toggle = false;
        style.textContent += `
        #verSenha > img{
            
            transform: scale(3);
            
            }
        `;
        document.getElementById("senha_cadastro").setAttribute("type", "password")
        
        
    }

})