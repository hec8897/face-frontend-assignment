import React from 'react';
import Create from './component/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/new" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
