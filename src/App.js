import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useState, useEffect } from 'react';
import PrivateRoute from './routes/PrivateRoute';
import { useSelector } from 'react-redux';

// 1.전체상품페이지, 로그인페이지, 상품상세페이지 o
// 1-1.네비게이션 바 만들기 o
// 2.전체상품페이지에서 전체 상품을 볼 수 있다. o
// 3.로그인 버튼을 누르면 로그인 페이지가 나온다. o
// 3.상품디테일을 눌렀으나, 로그인이 안됬을경우 로그인페이지가 먼저 나온다. o
// 4.로그인이 되어있을 경우에는 상품디테일 페이지를 볼 수 있다. o
// 5.로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 5.로그아웃이 되면 상품 디테일페이지를 볼수 업다, 다시 로그인 페이지가 보인다.
// 6.로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 7.상품을 검색할 수 있다.
function App() {
  const authenticate = useSelector((state) => state.auth.login);

  useEffect(() => {
    console.log('authenticate', authenticate);
  }, [authenticate]);
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
