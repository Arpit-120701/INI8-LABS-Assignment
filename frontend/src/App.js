import React from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import { ToastContainer , toast} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Pages/Home';
import View from './Pages/View';
import About from './Pages/About';
import AddEdit from './Pages/AddEdit'
import Header from './Components/Header';

function App() {
  return (
   <BrowserRouter>
   <div class="App">
   <Header />
    <ToastContainer position='top-center' />
    <Routes>
      <Route exact path='/'   element={<Home />} />
      <Route  path='/add'        element={<AddEdit />} />
      <Route  path='/update/:id' element={<AddEdit />} />
      <Route  path='/view/:id'   element={<View />} />
      <Route  path='/about'      element={<About />} />
    </Routes>
   </div>
   </BrowserRouter>

  )
}

export default App;
