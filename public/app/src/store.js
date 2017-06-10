import { createStore } from 'redux';
import issueTracker from './reducers/issueTracker';


const store = createStore(issueTracker);

console.log(store.getState());

export default store;