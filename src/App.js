
import './App.css';
import appStore from './appStore';
import Inputfield from './Inputfield';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={appStore}> 
    <div className="App">
       <Inputfield/>
    </div>
    </Provider>
  );
}

export default App;
