export function validateUsernameAndPassword(username: string, password: string){
    return (username !== undefined && password !== undefined &&  username.length > 4 && username.length < 20 && password.length > 4 && password.length < 20);
}