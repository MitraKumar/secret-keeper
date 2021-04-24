import React, { useState } from 'react';

function StoreSecretForm() {

  const [credentialName, setCredentialName] = useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
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
          <input type="submit" value="Store"/>
        </div>
      </form>
    </div>
  );
}

export default StoreSecretForm;
