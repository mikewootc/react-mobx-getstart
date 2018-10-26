
import UserStore        from './UserStore.js';

export default class RootStore {
    constructor() {
        this.userStore = new UserStore(this);
    }
}
