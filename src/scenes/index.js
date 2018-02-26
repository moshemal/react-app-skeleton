import Loadable from 'react-loadable';
import Loading from 'app-components/Loading';

const scenes = [
    { name: 'PageA', path: '/a', component: createLoadable('A') },
    { name: 'PageB', path: '/b', component: createLoadable('B') },
    { name: 'PageB', path: '/c', component: createLoadable('C') }
];

function createLoadable(name) {
    return Loadable({
        loader: () => import(`app-scenes/${name}`),
        loading: Loading
    });
}

export default scenes;