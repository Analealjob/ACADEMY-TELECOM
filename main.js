let textoA = "OLÁ MUNDO";   

let textoB = "SOMOS A ACADEMY TELECOM";

let frase1 = textoA +"SEJA BEM VINDO" + textoB;

let unir = textoA + textoB 


console.log(unir)


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

const NovoEspecialista = new Especialista ( "Inicianates" , "Priscila" , 360) ;
curso.push (NovoCurso) ;
console.log (NovoEspecialista) ;


(() => {
    if (!localStorage.pureJavaScriptCookies) {
        document.querySelector(".box-cookies").classList.remove('hide');
    }

    const acceptCookies = () => {
        document.querySelector(".box-cookies").classList.add('hide');
        localStorage.setItem("pureJavaScriptCookies", "accept");
    };

    const btnCookies = document.querySelector(".btn-cookies");

    btnCookies.addEventListener('click', acceptCookies);
})();
