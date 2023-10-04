import { useState, useEffect } from 'react';

// Cette fonction personnalisée permet de gérer les appels à une API,
// en prenant en compte la possibilité d'utiliser des données simulées (mock).
export function useFetch(urlAPI, userID, urlMockedData) {


  let isProd = true;
  // État pour stocker les données de l'API réelle.
  const [apiData, setApiData] = useState(null);

  // État pour stocker les données simulées (mock).
  const [mockedData, setMockedData] = useState(null);

  // État pour indiquer si les données sont en cours de chargement.
  const [isLoading, setLoading] = useState(true);

  // État pour gérer les erreurs de l'API réelle.
  const [errorAPI, setErrorAPI] = useState(false);

  // État pour gérer les erreurs des données simulées (mock).
  const [errorMocked, setErrorMocked] = useState(false);

  useEffect(() => {
    // Cette fonction asynchrone effectue les appels à l'API et gère les données simulées en cas d'erreur.

    // Fonction pour effectuer l'appel à l'API ou aux données simulées.
    async function fetchData(fetchURL, isProd, errorSetState) {
      // console.log(fetchURL)
      try {
        // Effectue l'appel à l'URL spécifiée.
        const response = await fetch(fetchURL);

        // Convertit la réponse en format JSON.
        const data = await response.json();
        

        if (isProd) {
          // Si les données sont réelles, met à jour l'état apiData avec les données de l'API.
          setApiData(data.data);
        } else if (!isProd && userID) {
          // Si les données sont simulées (mock) et qu'un userID est spécifié,
          // recherche l'objet correspondant dans les données simulées.
          setMockedData(
            data.find(
              (item) =>
                item.id === parseInt(userID) ||
                item.userId === parseInt(userID)
            )
          );
        }
      } catch (err) {       
        // En cas d'erreur, si des données simulées sont disponibles, réessaie avec les données simulées.
        fetchData(urlMockedData, false, setErrorMocked);      
        // Définit l'état d'erreur correspondant à l'API réelle ou aux données simulées.
        errorSetState(true);
      } finally {
        // Marque le chargement comme terminé, que ce soit un succès ou une erreur.
        setLoading(false);
      }
    }

    // Démarre l'appel à l'API réelle.
    if(isProd){      
    fetchData(urlAPI, isProd, setErrorAPI);
    }else{
      fetchData(urlMockedData, isProd, setErrorAPI);
    }
    
  }, [urlAPI, userID, urlMockedData, isProd]); // Déclenche l'effet lorsque les dépendances changent.

  // Retourne un objet contenant les états et les fonctions de gestion.
  return { isLoading, apiData, mockedData, errorAPI, errorMocked };
}
