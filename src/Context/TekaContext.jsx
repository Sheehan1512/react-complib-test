import { createContext, useState } from 'react';

const TekaContext = createContext();

function TekaContextProvider ({children}) {
    const [tekaAase, setTekaAase] = useState('nai');

    return (
        <TekaContext.Provider value={{ tekaAase, setTekaAase }}>
            {children}
        </TekaContext.Provider>
    );
};

export {TekaContextProvider, TekaContext};
