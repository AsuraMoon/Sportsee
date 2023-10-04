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

  const user = useFetch(baseCall,	id,	'/mockedData/user-main-data.json');

	const activity = useFetch(`${baseCall}/activity`, id, '/mockedData/user-activity.json');

	const averageSessions = useFetch(`${baseCall}/average-sessions`, id, '/mockedData/user-average-sessions.json');

	const performance = useFetch(`${baseCall}/performance`, id, '/mockedData/user-performance.json');

  const formatData = (dataObject, apiData) => {
		if (apiData.apiData) {
			dataObject = apiData.apiData
			return dataObject
		} else if (apiData.mockedData) {
			dataObject = apiData.mockedData
			return dataObject
		}
	}

	/* Init the dataObject and format the data */
	let userData = {}
	userData = formatData(userData, user)
	let activityData = {}
	activityData = formatData(activityData, activity)
	let averageSessionsData = {}
	averageSessionsData = formatData(averageSessionsData, averageSessions)
	let performanceData = {}
	performanceData = formatData(performanceData, performance)

  /* If the data is loading, display a loading message to the user */
	if (
		user.isLoading ||
		activity.isLoading ||
		averageSessions.isLoading ||
		performance.isLoading
	) {
		return (
			<section className="profil-wrapper">
				<h2 className="center">Chargement...</h2>
			</section>
		)
	}
  
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
