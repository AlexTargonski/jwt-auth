import React        from 'react';
import { Provider } from 'react-redux'

import routes       from './routes';
import store        from './store';

function App() {
  return (
    <Provider store={store}>
      {routes}
    </Provider>
  );
}

export default App;
