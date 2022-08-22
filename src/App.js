import { useEffect, useState } from 'react';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
API.configure(awsconfig);

function getPeople() {
  const apiName = 'peopleApi';
  const path = '/people';
  const myInit = {
    // OPTIONAL
    headers: {}, // OPTIONAL
  };

  return API.get(apiName, path, myInit);
}

function App() {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const data = await getPeople();
      if (isMounted) setPeople(data.people);
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <header>
      <div className='typewriter'>
        <h1>Version 1 AWS Amplify</h1>
      </div>
      <div>
        <h2>People</h2>
        {people && people.length ? (
          <ul>
            {people.map((person, i) => (
              <li key={i}>
                {person.first_name} {person.last_name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No People Found</p>
        )}
      </div>
    </header>
  );
}

export default App;
