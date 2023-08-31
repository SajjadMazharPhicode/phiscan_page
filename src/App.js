import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import DataState from './context/DataState';
import Warehouse from './pages/Warehouse';

function App() {
  return (
    <BrowserRouter>
      <DataState>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/warehouse-details' element={<Warehouse />} />
        </Routes>
      </DataState>
    </BrowserRouter>
  );
}

export default App;
