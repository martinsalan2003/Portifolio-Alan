import {BrowserRouter, Route, Routes} from 'react-router-dom';

// paginas usadas
import Home from '../pages/home/home.jsx';
import Aviso from '../pages/home/aviso.jsx'

export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='aviso' element={ <Aviso/> }></Route>
            </Routes>
        </BrowserRouter>
    )


}