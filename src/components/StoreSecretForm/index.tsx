import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import { create } from '../../redux/credentials';

function StoreSecretForm() {

  const [credentialName, setCredentialName] = useState('');
  const [credentialSecret, setCredentialSecret] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {

    dispatch(create({name: credentialName, secret: credentialSecret}));

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
