import { useParams } from 'react-router-dom'; // Importation du hook useParams pour récupérer les paramètres d'URL.
import { useFetch } from '../../services/useFetch'; // Importation de la fonction useFetch depuis le service.

import './Profil.scss'; // Importation des styles CSS pour le composant Profil.

function Profil() {
	// Définition du titre de la page.
	document.title = 'Profil - SportSee';

	const { id } = useParams(); // Récupération de l'ID de l'utilisateur depuis les paramètres d'URL.
	const baseCall = `http://localhost:3000/user/${id}`; // URL de base pour les appels à l'API.
	const baseMocked = `../../../public/mockedData/`; // Chemin de base pour les données simulées.

	/* Appel à la fonction useFetch pour récupérer les données depuis l'API ou les données simulées. */
	const user = useFetch(
		baseCall,
		id,
		baseMocked + `user-activity.json`
	);
	const activity = useFetch(
		baseCall + `/activity`,
		id,
		baseMocked + `user-activity.json`
	);
	const averageSessions = useFetch(
		baseCall + `/average-sessions`,
		id,
		baseMocked + `user-average-sessions.json`
	);
	const performance = useFetch(
		baseCall + `/performance`,
		id,
		baseMocked + `user-performance.json`
	);

	/* Fonction pour formater les données à partir de l'API ou des données simulées. */
	const formatData = (dataObject, apiData) => {
		if (apiData.apiData) {
			dataObject = apiData.apiData;
			return dataObject;
		} else if (apiData.mockedData) {
			dataObject = apiData.mockedData;
			return dataObject;
		}
	}

	/* Initialisation des objets de données et formatage des données. */
	let userData = {};
	userData = formatData(userData, user);
	let activityData = {};
	activityData = formatData(activityData, activity);
	let averageSessionsData = {};
	averageSessionsData = formatData(averageSessionsData, averageSessions);
	let performanceData = {};
	performanceData = formatData(performanceData, performance);

	/* Si les données sont en cours de chargement, affiche un message de chargement à l'utilisateur. */
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
		);
	}

	/* Si les appels à l'API et aux données simulées renvoient des erreurs, affiche un message d'erreur à l'utilisateur. */
	if (
		(user.errorAPI && user.errorMocked) ||
		(activity.errorAPI && activity.errorMocked) ||
		(averageSessions.errorAPI && averageSessions.errorMocked) ||
		(performance.errorAPI && performance.errorMocked)
	) {
		return (
			<section className="profil-wrapper">
				<h2 className="center">Une erreur est survenue !</h2>
			</section>
		);
	}

	/* Affichage des données formatées dans un format lisible (JSON). */
	return (
		<>
			<pre>{JSON.stringify(userData, null, 2)}</pre>
			<pre>{JSON.stringify(activityData, null, 2)}</pre>
			<pre>{JSON.stringify(averageSessionsData, null, 2)}</pre>
			<pre>{JSON.stringify(performanceData, null, 2)}</pre>
		</>
	);
}

export default Profil; // Exportation du composant Profil.
