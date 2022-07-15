import Logoicon from '../../assets/logo.svg';
import './style.css';

function Header() {
    return(
        <header>
        <div className="dsmeta-logo-container">
            <img src={Logoicon} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por 
              <a href="https://www.instagram.com/diogo_hsc/"> @Diogo_hsc</a>
            </p>
        </div>
    </header>
    )
    
  }
  
  export default Header;