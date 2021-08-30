import './App.css';
import Header from './components/header';
import Home from './components/Home';
import { Provider } from 'react-redux';
import {store} from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header  />
        < Home />
      </div>
    </Provider>
    
  );
}

export default App;
