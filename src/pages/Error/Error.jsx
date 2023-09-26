import "./Error.scss";
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'


function Error() {
  document.title = 'Page non trouvée - SportSee'

  return (
    <>
      <div>
        Error 404
        <Link to="/">
          <img
            src={logo}
            alt="SportSee Logo"
            className="nav-logo vertical-center"
          />
          <p>retour a la maison</p>
        </Link>
      </div>
    </>
  );
}

export default Error;
