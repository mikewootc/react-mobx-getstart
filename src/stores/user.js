import { observable, autorun, computed } from 'mobx';

class User {
    @observable info = {username: '', password: ''};

    constructor() {
        autorun(() => {
            console.log(`username: ${this.info.username}, password: ${this.info.password}`);
        });
    }

    setInfo(k, v) {
        this.info[k] = v;
    }
}

const user = new User();
export default user;

