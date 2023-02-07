import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutAnonymous from './component/LayoutAnonymous';
import NotFound from './component/NotFound';
import Login from './pages/admin/Login';
import Home from './pages/anonymos/HomePage';
import ProductDetail from './pages/anonymos/ProductDetail';
import ProductsFindByCategory from './pages/anonymos/ProductsFindByCategory';


function App() {
  return (
    <>
      <Routes>
        {/* Anonymous */}
        <Route path='/' element={<LayoutAnonymous />}>
          <Route index element={<Home />} />
          <Route path='products' element={<ProductsFindByCategory/>}/>
          <Route path='products/:productId' element={<ProductDetail/>} />
        </Route>

        {/* Admin */}


        <Route path='/admin/login' element={<Login />} />
        <Route path='/not-found' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
