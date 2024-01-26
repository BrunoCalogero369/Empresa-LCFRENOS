const Home = () => {
    return (
      <main className="main-home">
        <div className="text-container">
        <h2><b>Bienvenido a LC Frenos</b></h2>
        <p>Repuestos y Servicios para Camiones</p>
       <p>Venta de productos nuevos,
         productos reparados para recambio en el momento, 
         repuestos nuevos y reparaciones 
         también trabajamos con clientes de
          afuera de la ciudad a través de transportes.</p>
          </div>
          <div className="mapa">
            <h2>Donde nos ubicamos?</h2>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.880745176338!2d-60.659312123485535!3d-32.980547973603095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab973ab61cc1%3A0x244def6ae219adc8!2sItalia%203879%2C%20S2001LFE%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1705697221875!5m2!1ses-419!2sar" 
            width="100%"
             height="360"
              style={{border: 0}}
               allowFullScreen="" 
               loading="lazy"/>
          </div>
      </main>
    );
  };
  
  export default Home;