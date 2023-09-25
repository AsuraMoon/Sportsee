import "./Home.scss";

function Home() {
  document.title = 'Accueil - SportSee'
  
  return (
    <>
      <div className="center">
        <p>Home</p>
        <button>Utilisateur 12</button>
        <button>Utilisateur 18</button>
      </div>
    </>
  );
}

export default Home;
