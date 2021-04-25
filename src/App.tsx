import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from "./redux/store"
import StoreSecretForm from './components/StoreSecretForm/index';
import Secrets from './components/Secrets/index';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'

import { Container, Button } from 'react-bootstrap';


const Login: React.FC<{}> = () => {

  const firebase = useFirebase()

  function loginWithGoogle() {
    return firebase.login({ provider: 'google', type: 'popup' })
  }

  return (
    <div className="login_block">
      <Button variant="primary" onClick={loginWithGoogle}>Login</Button>
      <p className="login_block_text">Login to continue...</p>
    </div>
  );
}

const RenderIfLoggedIn: React.FC<{}> = ({ children }) => {
  const auth = useSelector((state:RootState) => state.firebase.auth)

  return <>
    {
      !isLoaded(auth)
      ? <span>Loading...</span>
      : isEmpty(auth)
        ? <Login />
        : <>{ children }</>
    }
  </>;
}

function App() {

  const firebase = useFirebase();
  const auth = useSelector((state:RootState) => state.firebase.auth)

  return (
    <Container>
      <h1>SecretKeeper</h1>
      <p>We are happy to keep your credentials...</p>
      <RenderIfLoggedIn>
        <p>
          <Button variant="danger" onClick={() => firebase.logout()}>Logout!!</Button>
        </p>
        <p>
          Hello { auth.displayName }
        </p>
        <StoreSecretForm />
        <Secrets />
      </RenderIfLoggedIn>
    </Container>
  );
}

export default App;
