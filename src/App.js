import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import Delete from './Components/Delete';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='main'>
      <h2 className='text-center'>CURD Operations</h2>
      <BrowserRouter>
        <Routes>
          <Route exact path ='/create' element={<Create />} />
          <Route exact path ='/read' element={<Read />} />
          <Route exact path ='/update' element={<Update />} />
          <Route exact path ='/delete' element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
