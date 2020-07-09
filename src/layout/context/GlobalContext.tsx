import React, { useState, useMemo } from 'react';

export const GlobalContext = React.createContext({
   language: true,
   setLanguage: (boolean) => {}
});

export function GlobalProvider(props) {
    const [language, setLanguage] = useState(true);

    // tslint:disable-next-line: ter-arrow-body-style
    const value = useMemo(() => {
        return ({
            language,
            setLanguage
        });
    }, [language]);

    return <GlobalContext.Provider value={value} {...props} />;
}

export function useGlobal() {
    const context = React.useContext(GlobalContext);
    if (!context) {
        throw new Error('variables globales deben estar dentro del provedor');
    }
    return context;
}
