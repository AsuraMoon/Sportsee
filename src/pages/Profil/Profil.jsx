import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useFetch } from '../../services/useFetch';

import './Profil.scss';
import ChartActivity from '../../components/ChartActivity/ChartActivity';
import ChartsCard from '../../components/ChartsCard/ChartsCard';
import ChartAverageSessions from '../../components/ChartAverageSessions/ChartAverageSessions';
import ChartPerformance from '../../components/ChartPerformance/ChartPerformance';
import ChartGoal from '../../components/ChartGoal/ChartGoal';
import Card from '../../components/Card/Card';

import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'

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
<section className="profil-wrapper">
			{userData && (
				<div className="profil">
					<h2 className="profil-title">
						Bonjour{' '}
						<span className="profil-firstName">
							{userData.userInfos.firstName}
						</span>
					</h2>
					<p className="profil-subtitle">
						Félicitation ! Vous avez explosé vos objectifs hier 👏
					</p>
					<div className="dashboard">
						<div className="dashboard-charts-wrapper">
							<div className="activity-charts">
								{activityData && (
									<ChartActivity
										data={activityData.sessions}
									/>
								)}
							</div>
							<div className="small-card-wrapper">
								{averageSessionsData && (
									<ChartsCard
										className="average-sessions"
										content={
											<ChartAverageSessions
												data={
													averageSessionsData.sessions
												}
											/>
										}
									/>
								)}

								{performanceData && (
									<ChartsCard
										className="performance"
										content={
											<ChartPerformance
												data={performanceData}
											/>
										}
									/>
								)}
								{userData && (
									<ChartsCard
										className="score"
										content={<ChartGoal data={userData} />}
									/>
								)}
							</div>
						</div>

						<div className="dashboard-aside">
							<Card
								userKeyData={userData.keyData.calorieCount}
								unit="kCal"
								subtitle="Calories"
								className="calorie"
								logo={energy}
							/>
							<Card
								userKeyData={userData.keyData.proteinCount}
								unit="g"
								subtitle="Proteines"
								className="protein"
								logo={chicken}
							/>
							<Card
								userKeyData={userData.keyData.carbohydrateCount}
								unit="g"
								subtitle="Glucides"
								className="carbohydrate"
								logo={apple}
							/>
							<Card
								userKeyData={userData.keyData.lipidCount}
								unit="g"
								subtitle="Lipides"
								className="lipid"
								logo={cheeseburger}
							/>
						</div>
					</div>
				</div>
			)}
		</section>
  );
}

export default Profil; // Exportation du composant Profil.
