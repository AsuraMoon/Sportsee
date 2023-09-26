import "./Home.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  document.title = 'Accueil - SportSee';
  const navigate = useNavigate();

  const handleClick = (userId) => {
    navigate(`/profil/${userId}`);
  };
  
  return (
    <div className="center jack">
      <p>Home</p>
      <ul>
        <li>
          <button id='12' key='12' onClick={() => handleClick(12)}>utilisateur 12</button>
        </li>
        <li>
          <button id='18' key='18' onClick={() => handleClick(18)}>utilisateur 18</button>
        </li>
      </ul>
    </div>
  );
}

export default Home;
