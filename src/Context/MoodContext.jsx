import { createContext, useState } from 'react';

const MoodContext = createContext();

function MoodContextProvider ({children}) {
    const [moodToday, setMoodToday] = useState('sad');

    return (
        <MoodContext.Provider value={{ moodToday, setMoodToday }}>
            {children}
        </MoodContext.Provider>
    );
};

export {MoodContextProvider, MoodContext};
