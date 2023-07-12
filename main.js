//import Swal from 'sweetalert2'


            function validarFormulario(){
                var nomePessoa = document.forms["formCadastro"]["nome"].value;
                if (nomePessoa == "") {
                    alert("Favor informar o seu nome!");
                    return false;     
                }
                else{
                    alert("Olá, " + nomePessoa + " !");
                    return true;
                }
            }
  


const cursos= [ 


    {
        curso: "Especialista " ,
        professor: "Ana Leal",
        turno: "Diurno", 
        carga: "360 ",
    },
    
    
    
    {
        curso: "Engenharia de Redes " ,
        professor: "Priscila do Prado",
        turno: "Noturno",
        carga: "360 ",
    }
    
]

function Especialista (professor, turno,carga) {
    this.professor = professor ;
    this.turno = turno ;
    this.carga =carga ;
}

const NovoEspecialista = new Especialista( "Iniciantes" , "Priscila" , 360) ;
//curso.push(NovoCurso) ;
console.log(NovoEspecialista) ;



//(() => {
   console.log('oi') 
   if (!localStorage.getItem("pureJavaScriptCookies"))   {
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

Swal.fire({
    title: '',
    text: '',
    imageUrl: './img/banner_home.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })


  const btnalerta = document.querySelector("#alerta");
  btnalerta.addEventListener('click', () => {
    
        console.log('Enviado com Sucesso')
        Swal.fire({
        title: '',
        text: '',
        imageUrl: './img/banner_home.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Enviado com Sucesso',
      })

   } )
  

 

