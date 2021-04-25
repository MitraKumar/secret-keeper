import React from 'react';

const Secret:React.FC<{name: string, secret: string}>= ({ name, secret}) => {
    return (
        <>
            {name} - {secret}
        </>
    );
}

export default Secret;