import { useParams } from 'react-router-dom'

import { useFetch } from '../../services/useFetch'

/*import Card from '../../components/Card'
import ChartsCard from '../../components/ChartsCard'
import ChartActivity from '../../components/ChartActivity'
import ChartAverageSessions from '../../components/ChartAverageSessions'
import ChartGoal from '../../components/ChartGoal'
import ChartPerformance from '../../components/ChartPerformance'

import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'*/

import './Profil.scss'

function Profil() {
	document.title = 'Profil - SportSee'

	const {id} = useParams()
  const baseCall = `http://localhost:3000/user/${id}`
  const baseMocked = `../../../public/mockedData/`

	/* Fetch the data from API or mocked data */
	const user = useFetch(
		baseCall,
		id,
		baseMocked+`user-activity.json`
	)
	const activity = useFetch(
		baseCall+`/activity`,
		id,
		baseMocked+`user-activity.json`
	)
	const averageSessions = useFetch(
		baseCall+`/average-sessions`,
		id,
    baseMocked+`user-average-sessions.json`
	)
	const performance = useFetch(
		baseCall+`/performance`,
		id,
		baseMocked+`user-performance.json`
	)

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

	/* If the fetches on the API and the mocked data returns errors, display a error message to the user */
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
		)
	}

	return (
		<>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
      <pre>{JSON.stringify(activityData, null, 2)}</pre>
      <pre>{JSON.stringify(averageSessionsData, null, 2)}</pre>
      <pre>{JSON.stringify(performanceData, null, 2)}</pre>
		</>
	)
}

export default Profil
