window.sr = ScrollReveal({ reset: true });
sr.reveal(".rotateScroll", { 
    rotate: { x: 0, y: 80, z: 0 },
    delay: 200,
    duration: 2000 
});

sr.reveal(".toDownScroll", {
    origin: "top", 
    distance: "200px", 
    duration: 2000, 
    delay: 300, 
});

sr.reveal(".toRightScroll", {
    origin: "left", 
    distance: "200px", 
    duration: 2000, 
    delay: 300, 
});

var menuMobile = document.getElementById("menu__header__fixed__mobile");

function showMenu() {
    menuMobile.style.display = "block";
    menuMobile.style.top = "0";
    menuMobile.classList.add("animate__bounceInDown");
    menuMobile.classList.remove("animate__bounceOutUp");
}
document.getElementById("show__menu").addEventListener("click", showMenu);

function hideMenu() {
    menuMobile.style.top = "-200%";
    menuMobile.classList.remove("animate__bounceInDown");
    menuMobile.classList.add("animate__bounceOutUp");
}
document.getElementById("hide__menu").addEventListener("click", hideMenu);

function verify(e){
    var nameForm = document.getElementById("name").value;
    var emailForm = document.getElementById("email").value;
    var messageForm = document.getElementById("message").value;
    var submit = false;

    if(nameForm == ""){
        alert("Digite seu nome.");
    }else if(emailForm == ""){
        alert("Digite seu e-mail.");
    }else if(emailForm.indexOf("@") == -1 || emailForm.indexOf(".") == -1){
        alert("Digite um e-mail válido.");
    }else if(messageForm == ""){
        alert("Digite sua mensagem.");
    }else{
        alert(`Olá ` + nameForm + `!
		\nEste é um site de apresentação.
		\nQuer o seu? Entre em contato:
		\nticoestevescontato@gmail.com`);
        submit = true;
    }
    if(submit === false){
        e.preventDefault();
    }
}
document.getElementById("submit").addEventListener("click", verify);