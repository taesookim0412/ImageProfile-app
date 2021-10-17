import xCsrfStore from "../services/XCSRFStore";

export function initializeVariablesIfRequired():any{
    const globalScope = global as any;
    if (globalScope.initialized === undefined){
        globalScope.xCsrfStore = xCsrfStore;
        if (process.env.NODE_ENV  === "development"){
            globalScope.loginHost = "http://localhost:5000";
        }
        else{
            globalScope.loginHost = "http://10.0.0.5";
        }
        globalScope.initialized = true;
    }
    return globalScope;
}