import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import LayoutAnonymous from './component/LayoutAnonymous';

function App() {
  return (
    // <>
    //   <Routes>
    //     {/* Anonymous */}
    //     <Route path='/' element={<LayoutAnonymous />}>
    //       <Route index element={<BlogList />} />
    //       <Route path='blogs/:blogId/:slug' element={<BlogDetail />} />
    //     </Route>
    //   </Routes>
    // </>
    <LayoutAnonymous/>
  );
}

export default App;
