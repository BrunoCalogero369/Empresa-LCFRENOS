const Contact = () => {
const d = document;
    function contactForm(){
        const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");
        $inputs.forEach((input) =>{
            const $span = d.createElement("span")
            $span.id = input.name;
            $span.textContent = input.title;
            $span.classList.add("contact-form-error", "none");
            input.insertAdjacentElement("afterend", $span);
        });
    
        d.addEventListener("keyup", e=>{
    if (e.target.matches(".contact-form [required]")){
        let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
    if (pattern && $input.value !==""){
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active");
    }
    if (!pattern){
        return $input.value === ""
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active");
    }
    }
    });
    d.addEventListener("submit", (e)=>{
       e.preventDefault();
        alert("Enviando Formulario");
        const $loader =  d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");
    
        $loader.classList.remove("none");
    
    fetch("https://formsubmit.co/bmxbrunito@gmail.com",{
     method: "POST",
     body:new FormData(e.target)
    })
    .then(res=>res.ok ? res.json(): Promise.reject(res))
    .then(json=>{
        $loader.classList.add("none");
        $response.classList.remove("none");
        $response.innerHTML = `<p>${json.message}</p>`;
        $form.reset(); 
    })
    .catch(err=>{
        let message = err.statusText || "Ocurrio un error al enviar";
        $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        $loader.classList.add("none");
        $form.reset();
    })
    
    });
    }
    d.addEventListener("DOMContentLoaded", contactForm);


  return (
    <div className="div-formulario">
          <form className="contact-form">
        <legend>Contactate con Nosotros</legend>
        <input type="text" name="name" placeholder="Escribe tu nombre" 
            title="Nombre solo acepta letras y espacios en blanco" 
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required/>
        <input type="email" name="email" placeholder="Escribe tu email" 
            title="Email incorrecto" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required/>
        <input type="text" name="subjet" placeholder="Asunto a tratar"
            title="El asunto es requerido" required/>
        <textarea name="comments" cols="50" rows="5" 
            placeholder="Escribe tus comentarios aquí" 
            title="Tu comentario no debe exceder los 255 caracteres" data-pattern="^.{1,255}$" required></textarea>
        <input type="submit" value="Enviar"/>
        <div className="contact-form-response none">
            <p>Los datos han sido enviados</p>
        </div>
    </form>
    </div>
  );
}

export default Contact;
