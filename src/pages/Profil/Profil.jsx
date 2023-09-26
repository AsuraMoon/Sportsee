import "./Profil.scss";

import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";

function Profil() {

  let { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les données de l'utilisateur
        const userDataResponse = await fetch(`http://localhost:3000/user/${id}`);
        const userData = await userDataResponse.json();
        setUserData(userData);

        // Récupérer les données d'activité de l'utilisateur
        const userActivityResponse = await fetch(`http://localhost:3000/user/${id}/activity`);
        const userActivityData = await userActivityResponse.json();
        setUserActivity(userActivityData);

        // Récupérer les données de sessions moyennes de l'utilisateur
        const userAverageSessionsResponse = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
        const userAverageSessionsData = await userAverageSessionsResponse.json();
        setUserAverageSessions(userAverageSessionsData);

        // Récupérer les données de performance de l'utilisateur
        const userPerformanceResponse = await fetch(`http://localhost:3000/user/${id}/performance`);
        const userPerformanceData = await userPerformanceResponse.json();
        setUserPerformance(userPerformanceData);
      } catch (error) {
        setErreur(error.message);
      }
    };

    fetchData();
  }, [id]);

  if (erreur) {
    return <div>Erreur : {erreur}</div>;
  }

  if (!userData || !userActivity || !userAverageSessions || !userPerformance) {
    return <div>Chargement en cours...</div>;
  }
  console.log(userData.data.userInfos.firstName)

  return (
    <>
      <div className="123">

        <h1>Profil {id}</h1>
        <h2>bonjour {userData.data.userInfos.firstName} {userData.data.userInfos.lastName}</h2>
        <pre>{JSON.stringify(userData, null, 2)}</pre>

        <h1>Données d'activité de l'utilisateur</h1>
        <pre>{JSON.stringify(userActivity, null, 2)}</pre>

        <h1>Sessions moyennes de l'utilisateur</h1>
        <pre>{JSON.stringify(userAverageSessions, null, 2)}</pre>

        <h1>Performance de l'utilisateur</h1>
        <pre>{JSON.stringify(userPerformance, null, 2)}</pre>
      </div>
    </>
  );
}

export default Profil;
