import { createContext, useState } from 'react';

const TekaContext = createContext();

function TekaContextProvider ({children}) {
    const [moodToday, setMoodToday] = useState('sad');

    return (
        <TekaContext.Provider value={{ moodToday, setMoodToday }}>
            {children}
        </TekaContext.Provider>
    );
};

export {TekaContextProvider, TekaContext};
