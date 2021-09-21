class XCSRFStore{
    csrfTokens = new Set();
    constructor() {
    }
    addToCsrfStore(token:string){
        this.csrfTokens.add(token);
    }
    validateCsrfToken(token: string):boolean{
        if (!this.csrfTokens.has(token)){
            return false;
        }
        else {
            this.csrfTokens.delete(token);
            return true;
        }
    }
}
const xCsrfStore = new XCSRFStore();
export default xCsrfStore;