import "./Home.scss";
import UserButton from "../../components/UserButton/UserButton";

function Home() {
  document.title = 'Accueil - SportSee'

  const handleUserChange = (newUserId) => {
    setActiveUserId(newUserId);
  };
  
  return (
    <>
      <div className="center">
        <p>Home</p>
        <ul>
          <li>
            <UserButton userID={12} onClick={handleUserChange} />
          </li>
          <li>
            <UserButton userID={18} onClick={handleUserChange} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
