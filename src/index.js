import store from './store';
import { bugAdded, bugRemoved } from './actionCreator';

store.dispatch(bugAdded("Bug 1"));

store.dispatch(bugRemoved(1));

console.log(store.getState())