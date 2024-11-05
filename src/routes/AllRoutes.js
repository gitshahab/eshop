import { Routes, Route } from 'react-router-dom';
import { Checkout, Home } from '../pages';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
    </Routes>
  )
}
