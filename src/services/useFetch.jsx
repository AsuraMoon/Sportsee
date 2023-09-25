import { Component } from 'react';
import Axios from 'axios';

class AllData extends Component {
  constructor() {
    super();
    this.state = {
      userData: null, // Pour stocker les données de l'utilisateur
      userActivity: null, // Pour stocker les données d'activité de l'utilisateur
      userAverageSessions: null, // Pour stocker les données de sessions moyennes de l'utilisateur
      userPerformance: null, // Pour stocker les données de performance de l'utilisateur
      erreur: null, // Pour stocker les erreurs, le cas échéant
    };
  }

  componentDidMount() {
    const userId = 12; // Remplacez par l'ID de l'utilisateur que vous souhaitez récupérer

    // Appel aux différents endpoints pour récupérer les données de l'utilisateur
    Axios.get(`http://localhost:3000/user/${userId}`)
      .then((response) => {
        this.setState({ userData: response.data });
      })
      .catch((erreur) => {
        this.setState({ erreur: erreur.message });
      });

    Axios.get(`http://localhost:3000/user/${userId}/activity`)
      .then((response) => {
        this.setState({ userActivity: response.data });
      })
      .catch((erreur) => {
        this.setState({ erreur: erreur.message });
      });

    Axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
      .then((response) => {
        this.setState({ userAverageSessions: response.data });
      })
      .catch((erreur) => {
        this.setState({ erreur: erreur.message });
      });

    Axios.get(`http://localhost:3000/user/${userId}/performance`)
      .then((response) => {
        this.setState({ userPerformance: response.data });
      })
      .catch((erreur) => {
        this.setState({ erreur: erreur.message });
      });
  }

  render() {
    const { userData, userActivity, userAverageSessions, userPerformance, erreur } = this.state;

    if (erreur) {
      return <div>Erreur : {erreur}</div>;
    }

    if (!userData || !userActivity || !userAverageSessions || !userPerformance) {
      return <div>Chargement en cours...</div>;
    }

    // Vous pouvez maintenant afficher les données récupérées depuis les différents endpoints
    return (
      <div>
        <h1>Données de l utilisateur</h1>
        <pre>{JSON.stringify(userData, null, 2)}</pre>

        <h1>Données d activité de l utilisateur</h1>
        <pre>{JSON.stringify(userActivity, null, 2)}</pre>

        <h1>Sessions moyennes de l utilisateur</h1>
        <pre>{JSON.stringify(userAverageSessions, null, 2)}</pre>

        <h1>Performance de l utilisateur</h1>
        <pre>{JSON.stringify(userPerformance, null, 2)}</pre>
      </div>
    );
  }
}

export default AllData;
