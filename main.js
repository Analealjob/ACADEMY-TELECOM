

function validarFormulario() {
    var nomePessoa = document.forms["formCadastro"]["nome"].value;
    if (nomePessoa == "") {
        alert("Favor informar o seu nome!");
        return false;
    }
    else {
        alert("Olá, " + nomePessoa + " !");
        return true;
    }
}



const cursos = [


    {
        curso: "Especialista ",
        professor: "Ana Leal",
        turno: "Diurno",
        carga: "360 ",
    },



    {
        curso: "Engenharia de Redes ",
        professor: "Priscila do Prado",
        turno: "Noturno",
        carga: "360 ",
    }

]

function Especialista(professor, turno, carga) {
    this.professor = professor;
    this.turno = turno;
    this.carga = carga;
}

const NovoEspecialista = new Especialista("Iniciantes", "Priscila", 360);
//curso.push(NovoCurso) ;
console.log(NovoEspecialista);



//(() => {
if (!localStorage.getItem("pureJavaScriptCookies")) {
    document.querySelector(".box-cookies").classList.remove('hide');
}

const acceptCookies = () => {
    document.querySelector(".box-cookies").classList.add('hide');
    localStorage.setItem("pureJavaScriptCookies", "accept");
};

const btnCookies = document.querySelector(".btn-cookies");
if (btnCookies)
    btnCookies.addEventListener('click', acceptCookies);
//})();

// Swal.fire({
   // title: '',
    //text: '',
    //imageUrl: './img/banner_home.png',
    //imageWidth: 400,
   // imageHeight: 200,
   //imageAlt: 'Custom image',
//})//


 
    // Função para validar e processar o formulário
    function enviarMensagem() {
        // Captura dos valores dos campos
        const nome = document.querySelector('input[type="text"][placeholder="Nome"]').value;
        const email = document.querySelector('input[type="email"][placeholder="Email"]').value;
        const assunto = document.querySelector('select[name="Assunto"]').value;
        const mensagem = document.querySelector('textarea[placeholder="Sua mensagem"]').value;

        // Verifica se os campos estão preenchidos
        if (nome === '' || email === '' || assunto === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            alert('Mensagem enviada com sucesso!');


        }
    }

// Event listener para o botão de submit
//const submitButton = document.getElementById('alerta');
//submitButton.addEventListener('click', function (event) {
   // event.preventDefault(); // Evita que o formulário seja enviado diretamente (recarregar a página).
    //enviarMensagem();
//});

// mensagem bem-vindo popup

            let popUp = document.getElementById("popUp");
            document.onmouseleave = function () {
                popUp.style.display = "block";
            }

            function closeModel() {
                popUp.style.display = "none";
            }
    
    
