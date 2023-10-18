import { createContext, useContext, useState } from "react";

export const FormExibitionContext = createContext();

export function useFormExibitionContext() {
    return useContext(FormExibitionContext);
}

export function FormExibitionProvider({children}) {
    const [formExibitionState, setFormExibitionState] = useState(false);

    function updateFormExibitionState() {
        setFormExibitionState(!formExibitionState);
    }

    return (
        <FormExibitionContext.Provider value={{formExibitionState, updateFormExibitionState}}>
            {children}
        </FormExibitionContext.Provider>
    )
}