import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutAdmin from './component/LayoutAdmin';
import LayoutAnonymous from './component/LayoutAnonymous';
import NotFound from './component/NotFound';
import PrivateRoutes from './component/PrivateRoutes';
import PrivateUserRoutes from './component/PrivateUserRoutes';
import CategoryAdminList from './pages/admin/Category/CategoryAdminList';
import Login from './pages/admin/Login';
import OrderDetailAdmin from './pages/admin/Order/OrderDetailAdmin';
import OrderListAdmin from './pages/admin/Order/OrderListAdmin';
import ProductAdminCreate from './pages/admin/Product/ProductAdminCreate';
import ProductAdminDetail from './pages/admin/Product/ProductAdminDetail';
import ProductAdminList from './pages/admin/Product/ProductAdminList';
import UserAdminCreate from './pages/admin/user/UserAdminCreate';
import UserAdminDetail from './pages/admin/user/UserAdminDetail';
import UserAdminList from './pages/admin/user/UserAdminList';
import Home from './pages/anonymos/HomePage';
import ProductDetail from './pages/anonymos/ProductDetail';
import ProductsFindByCategory from './pages/anonymos/ProductsFindByCategory';
import RegisterByAny from './pages/anonymos/Register';
import Cart from './pages/order/Cart';
import HistoryOrder from './pages/order/HistoryOrder';


function App() {
  return (
    <>
      <Routes>
        {/* Anonymous */}
        <Route path='/' element={<LayoutAnonymous />}>
          <Route index element={<Home />} />
          <Route path='products' element={<ProductsFindByCategory/>}/>
          <Route path='products/:productId' element={<ProductDetail/>} />
          <Route path='register' element={<RegisterByAny/>}/>

           {/* User  */}
           <Route path="user">
            <Route element={<PrivateUserRoutes/>}>
            <Route path="cart" element={<Cart />}/>
            <Route path="history-order" element={<HistoryOrder/>}/>
            </Route>
          </Route>
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

             {/* Order */}
             <Route path="orders">
              <Route index element={<OrderListAdmin />} />
              <Route path=':orderId' element={<OrderDetailAdmin />} />
            </Route>

          </Route>
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/not-found' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
