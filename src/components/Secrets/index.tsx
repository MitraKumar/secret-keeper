import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase'
import { RootState } from '../../redux/store';
import type { Credential } from "../../type";
import Secret from "../Secret/index";

function Secrets() {

    const auth = useSelector((state:RootState) => state.firebase.auth)
    let userId = '';
    if( isLoaded(auth) && !isEmpty(auth)) {
        userId = auth.uid;
    }

    useFirestoreConnect([
        { 
            collection: "secrets",
            where: [[ 'userId', '==', userId ]]
        }
    ]);
    const credentials:Credential[] = useSelector((state:RootState) => state.firestore.ordered.secrets);

    return (
        <div className="secret-form">
            <ul>
            {
                credentials && 
                credentials.map(({ name, secret, userId }) => (
                    <li>
                        <Secret name={name} secret={secret}/>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}

export default Secrets;
