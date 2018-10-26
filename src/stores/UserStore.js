import { observable, autorun, computed, action } from 'mobx';
import Logger from 'cpclog';


const logger = Logger.createWrapper('UserStore', Logger.LEVEL_DEBUG);

export default class UserStore {
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

