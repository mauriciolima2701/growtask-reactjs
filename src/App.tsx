import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';
import { PersistGate } from 'redux-persist/integration/react'
import GlobalStyle from './config/GlobalStyle';
import AppRoutes from './routes/AppRoutes';
import { myPersistStore, myStore } from './store';



const App: React.FC = () => {
  return (
    <>
      <Provider store={myStore}>
        <PersistGate loading={null} persistor={myPersistStore}>
          <GlobalStyle />
          <AppRoutes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
