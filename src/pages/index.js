import App from './App';
import Login from './Login';
import SignIn from './SignIn';

const pages = [
    { name: 'Login', path: '/login', component: Login },
    { name: 'Signin', path: '/sign-in', component: SignIn },
    { name: 'App', path: '/', component: App, isPrivate: true } //NOTE: this line MUST be last 
];

export default pages;