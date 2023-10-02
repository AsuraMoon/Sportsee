import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Profil.scss';
import { useFetch } from '../../services/useFetch';

function Profil() {
  // Définition du titre de la page.
  useEffect(() => {
    document.title = 'Profil - SportSee';
  }, []);

  const { id } = useParams(); // Récupération de l'ID de l'utilisateur depuis les paramètres d'URL.
  const baseCall = `http://localhost:3000/user/${id}`;

  // Utilisation de useState pour gérer l'état des données.
  /*const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageSessionsData, setAverageSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);*/

  // Utilisation de useEffect pour effectuer les appels API au chargement du composant.
  /*useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const userResponse = await fetch(baseCall);
        const userData = await userResponse.json();
        setUserData(userData);

        const activityResponse = await fetch(`${baseCall}/activity`);
        const activityData = await activityResponse.json();
        setActivityData(activityData);

        const averageSessionsResponse = await fetch(`${baseCall}/average-sessions`);
        const averageSessionsData = await averageSessionsResponse.json();
        setAverageSessionsData(averageSessionsData);

        const performanceResponse = await fetch(`${baseCall}/performance`);
        const performanceData = await performanceResponse.json();
        setPerformanceData(performanceData);

        setLoading(false);
      } catch (error) {
        // En cas d'erreur, récupérez les données depuis le fichier mock.
        try {
          const mockResponse = await fetch(`/mockedData/user-main-data.json`);
          const mockData = await mockResponse.json();
          setUserData(mockData);

          const mockActivityResponse = await fetch(`/mockedData/user-activity.json`);
          const mockActivityData = await mockActivityResponse.json();
          setActivityData(mockActivityData);

          const mockAverageSessionsResponse = await fetch(`/mockedData/user-average-sessions.json`);
          const mockAverageSessionsData = await mockAverageSessionsResponse.json();
          setAverageSessionsData(mockAverageSessionsData);

          const mockPerformanceResponse = await fetch(`/mockedData/user-performance.json`);
          const mockPerformanceData = await mockPerformanceResponse.json();
          setPerformanceData(mockPerformanceData);

          setLoading(false);
        } catch (error) {
          setError('Une erreur est survenue');
          setLoading(false);
        }
      }
    }

    fetchDataFromAPI();
  }, [baseCall]);*/
  const userData = useFetch(baseCall,	id,	'/mockedData/user-performance.json');

	const activityData = useFetch(`${baseCall}/activity`, id, '/mockedData/user-activity.json');

	const averageSessionsData = useFetch(`${baseCall}/average-sessions`, id, '/mockedData/user-average-sessions.json');

	const performanceData = useFetch(`${baseCall}/performance`, id, '/mockedData/user-performance.json');

  // Affichage des données formatées dans un format lisible (JSON) si disponible.
  /*if (loading) {
    return (
      <section className="profil-wrapper">
        <h2 className="center">Chargement...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="profil-wrapper">
        <h2 className="center">Une erreur est survenue !</h2>
      </section>
    );
  }*/

  return (
    <div className='center'>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
      <pre>{JSON.stringify(activityData, null, 2)}</pre>
      <pre>{JSON.stringify(averageSessionsData, null, 2)}</pre>
      <pre>{JSON.stringify(performanceData, null, 2)}</pre>
    </div>
  );
}

export default Profil; // Exportation du composant Profil.
