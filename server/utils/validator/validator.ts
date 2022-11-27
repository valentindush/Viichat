export const signUpRules = {
    name: 'required|string',
    username: 'required|string',
    email: 'required|email',
    password: 'required|string|min:6'
}