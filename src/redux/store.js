import { createStore } from 'rdux';

import reducers from './reducers/index';

const store = createStore(reducers, {});

export default store;