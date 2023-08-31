import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import DataState from './context/DataState';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <DataState>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </DataState>
    </BrowserRouter>
  );
}

export default App;
