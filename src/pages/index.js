import App from './App';
import Login from './Login';
import SignIn from './SignIn';

const pages = [
    { path: '/login', component: Login },
    { path: '/sign-in', component: SignIn },
    { path: '/', component: App } //NOTE: this line MUST be last 
];

export default pages;