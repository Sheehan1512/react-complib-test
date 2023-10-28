import { createContext, useState } from 'react';

const AppContext = createContext();

function AppContextProvider ({children}) {
    const [moodToday, setMoodToday] = useState('sad');

    return (
        <AppContext.Provider value={{ moodToday, setMoodToday }}>
            {children}
        </AppContext.Provider>
    );
};

export {AppContextProvider, AppContext};
