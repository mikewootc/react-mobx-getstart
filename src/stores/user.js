import { observable, autorun, computed, action } from 'mobx';

class User {
    @observable info = {username: '', password: ''};

    constructor() {
        autorun(() => {
            console.log(`username: ${this.info.username}, password: ${this.info.password}`);
        });
    }

    @action
    setInfo(k, v) {
        this.info[k] = v;
    }
}

const user = new User();
export default user;

