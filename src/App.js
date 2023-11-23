import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import Reception_point from './components/Receptin_point';
import Category from './components/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Reception_point" element={<Reception_point />} />
          <Route path="/Category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
