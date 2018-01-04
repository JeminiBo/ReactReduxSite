import { createStore } from 'redux';

import reducer from '../index';

export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
