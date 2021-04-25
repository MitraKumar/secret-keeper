import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from "./redux/store"
import StoreSecretForm from './components/StoreSecretForm/index';
import Secrets from './components/Secrets/index';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'

const RenderIfLoggedIn: React.FC<{}> = ({ children }) => {
  const firebase = useFirebase()
  const auth = useSelector((state:RootState) => state.firebase.auth)

  function loginWithGoogle() {
    return firebase.login({ provider: 'google', type: 'popup' })
  }

  return <>
    {
      !isLoaded(auth)
      ? <span>Loading...</span>
      : isEmpty(auth)
        ? <button onClick={loginWithGoogle}>Login</button>
        : <>{ children }</>
    }
  </>;
}

function App() {

  const firebase = useFirebase();
  const auth = useSelector((state:RootState) => state.firebase.auth)

  return (
    <div className="App">
      <RenderIfLoggedIn>
        <p>
          <button onClick={() => firebase.logout()}>Logout!!</button>
        </p>
        <p>
          Hello { auth.displayName }
        </p>
        <StoreSecretForm />
        <Secrets />
      </RenderIfLoggedIn>
    </div>
  );
}

export default App;
