import "./Error.scss";
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import AllData from "../../services/useFetch";


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
        <AllData></AllData>
      </div>
    </>
  );
}

export default Error;
