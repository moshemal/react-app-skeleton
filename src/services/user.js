import scenes from 'app-scenes';

let currentUser = undefined;

function getScenes(){
    const c = currentUser || {};
    return c.scenes;
}

function isLoggedIn(){
    return !!currentUser;
}

function login(user, password){
    if (!user || !password){
        return Promise.reject(new Error('user and password must be provided'));
    } else {
        // setTimeout(()=>{
        //     currentUser = null;
        // },8000);
        return new Promise(resolve => {
            setTimeout(()=>{
                currentUser = {
                    name: 'UserName',
                    scenes: [scenes[0], scenes[2]]
                };
                resolve();
            }, 1000);
        });
    }
}


export default {
    getScenes,
    isLoggedIn,
    login
};