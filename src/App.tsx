import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from "./redux/store"
import StoreSecretForm from './components/StoreSecretForm/index';

function App() {

  const credentials = useSelector((state: RootState) => state.credential);
  return (
    <div className="App">
      <p>Hello World!!</p>
      <p>Happy to keep your secret.</p>
      <StoreSecretForm />
      <h2>Your secrets</h2>
      <ul>
        {
          credentials.map(({name, secret}) => (
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
