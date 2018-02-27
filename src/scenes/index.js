import Loadable from 'react-loadable';
import Loading from 'app-components/Loading';

const scenes = [
    { name: 'A', path: '/a', component: createLoadable('A') },
    { name: 'B', path: '/b', component: createLoadable('B') },
    { name: 'C', path: '/c', component: createLoadable('C') }
];

function createLoadable(name) {
    return Loadable({
        loader: () => import(`app-scenes/${name}`),
        loading: Loading
    });
}

export default scenes;