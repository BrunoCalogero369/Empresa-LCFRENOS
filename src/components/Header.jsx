import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>LC FRENOS</h1>
      </div>
      <nav>
        <ul>
        <li><Link to="/">Inicio</Link></li>
          <li><Link to="/wabco">Productos Wabco</Link></li>
          <li><Link to="/knorr">Productos Knorr</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;