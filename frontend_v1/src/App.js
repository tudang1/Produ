import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutAdmin from './component/LayoutAdmin';
import LayoutAnonymous from './component/LayoutAnonymous';
import NotFound from './component/NotFound';
import PrivateRoutes from './component/PrivateRoutes';
import CategoryAdminList from './pages/admin/Category/CategoryAdminList';
import Login from './pages/admin/Login';
import ProductAdminCreate from './pages/admin/Product/ProductAdminCreate';
import ProductAdminDetail from './pages/admin/Product/ProductAdminDetail';
import ProductAdminList from './pages/admin/Product/ProductAdminList';
import UserAdminCreate from './pages/admin/user/UserAdminCreate';
import UserAdminDetail from './pages/admin/user/UserAdminDetail';
import UserAdminList from './pages/admin/user/UserAdminList';
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
        <Route path='/admin' element={<LayoutAdmin/>}>
          <Route element={<PrivateRoutes/>}>
            {/* Product */}
            <Route path='products'>
              <Route index element={<ProductAdminList/>}></Route>
              <Route path=':productId' element={<ProductAdminDetail/>}></Route>
              <Route path='create' element={<ProductAdminCreate />} />
            </Route>

            {/* Category */}
            <Route path='categories' element={<CategoryAdminList />} />

            {/* User */}
            <Route path="users">
              <Route index element={<UserAdminList />} />
              <Route path=':userId' element={<UserAdminDetail />} />
              <Route path='create' element={<UserAdminCreate />} />
            </Route>

          </Route>
        </Route>

        <Route path='/admin/login' element={<Login />} />
        <Route path='/not-found' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
