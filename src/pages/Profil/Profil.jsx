import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useFetch } from '../../services/useFetch';

import './Profil.scss';

function Profil() {
  // Définition du titre de la page.
  useEffect(() => {
    document.title = 'Profil - SportSee';
  }, []);

  const { id } = useParams(); // Récupération de l'ID de l'utilisateur depuis les paramètres d'URL.
  const baseCall = `http://localhost:3000/user/${id}`;

  const userData = useFetch(baseCall,	id,	'/mockedData/user-performance.json');

	const activityData = useFetch(`${baseCall}/activity`, id, '/mockedData/user-activity.json');

	const averageSessionsData = useFetch(`${baseCall}/average-sessions`, id, '/mockedData/user-average-sessions.json');

	const performanceData = useFetch(`${baseCall}/performance`, id, '/mockedData/user-performance.json');

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
