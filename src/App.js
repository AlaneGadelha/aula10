import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contatos from './pages/Contatos';
import NotFound from './pages/NotFound';
import Comp1 from './pages/Comp1';
import Form from './pages/Form';
import Menu from './componentes/Menu';
import GlobalStyles from './pages/GlobalStyles';

function App() {
  return (
    <>
     <BrowserRouter>
     <GlobalStyles/>
      <Menu/>
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/contatos' element ={<Contatos/>}></Route>
        <Route path='/form' element ={<Form/>}></Route>
        <Route path='/NotFound' element ={<NotFound/>}></Route>
        <Route path='*' element ={<Comp1/>}></Route>
      </Routes>
     
     
     </BrowserRouter>
    </>
  );
}

export default App;
