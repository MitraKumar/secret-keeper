import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from "./redux/store"
import StoreSecretForm from './components/StoreSecretForm/index';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Credential } from "./type";

function App() {

  useFirestoreConnect([
    { collection: "secrets" }
  ]);
  const credentials:Credential[] = useSelector((state:RootState) => state.firestore.ordered.secrets);
  return (
    <div className="App">
      <p>Hello World!!</p>
      <p>Happy to keep your secret.</p>
      <StoreSecretForm />
      <h2>Your secrets</h2>
      <ul>
        {
          credentials && 
          credentials.map(({ name, secret }) => (
            <li>
              <p>{name}</p>
              <p>{secret}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
