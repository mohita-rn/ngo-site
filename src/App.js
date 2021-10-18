import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';

import './AppUI.scss';


function App() {
  return (
    <div className="AppContainer">
      <BrowserRouter>
      <Header/>

      </BrowserRouter>
    </div>
  );
}

export default App;
