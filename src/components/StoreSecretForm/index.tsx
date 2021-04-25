import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase'
import { RootState } from '../../redux/store';

function StoreSecretForm() {

  const [credentialName, setCredentialName] = useState('');
  const [credentialSecret, setCredentialSecret] = useState('');
  const firestore = useFirestore()

  const auth = useSelector((state:RootState) => state.firebase.auth)

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {

    const firestoreContent = {
      name: credentialName,
      secret: credentialSecret,
      groupId: null,
      createdAt: Date.now(),
      userId: auth.uid,
    };
    firestore
      .collection('secrets')
      .add(firestoreContent)
      .then(() => {
          console.log("Data added")
      })
      .catch(console.error)

    setCredentialName("");
    setCredentialSecret("");
    e.preventDefault();
  }

  return (
    <div className="secret-form">
      <h2>Store Secret</h2>
      <form onSubmit={handleSubmit} method="post">
        <div>
          <label htmlFor="credential_name">Credential Name</label>
          <input 
            type="text" 
            name="credential_name" 
            id="credential_name" 
            value={credentialName}
            onChange={(e) => setCredentialName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="credential_secret">Credential Secret</label>
          <input 
            type="text" 
            name="credential_secret" 
            id="credential_secret" 
            value={credentialSecret}
            onChange={(e) => setCredentialSecret(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Store"/>
        </div>
      </form>
    </div>
  );
}

export default StoreSecretForm;
