import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutAnonymous from './component/LayoutAnonymous';
import Home from './pages/anonymos/HomePage';
import ProductDetail from './pages/anonymos/ProductList';

function App() {
  return (
    // <>
    //   <Routes>
    //     {/* Anonymous */}
    //     <Route path='/' element={<LayoutAnonymous />}>
    //       <Route index element={<Home />} />
    //       {/* <Route path='products/:productId/' element={<ProductDetail />} /> */}
    //     </Route>
    //   </Routes>
    // </>
    <LayoutAnonymous/>
  );
}

export default App;
