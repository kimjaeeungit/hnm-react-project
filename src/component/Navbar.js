import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  //페이지 이동하는 방법
  //1.Link : 바로 눌러서 가면 될떄
  //2.useNavigate : 함수안에서 써야할떄
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];
  return (
    <div>
      <div>
        <div onClick={goToLogin} className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtA9XSS-40ippEuRO7BNQmZrKorOktzBpAg&s"
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <div className="input-icon-box">
            <FontAwesomeIcon className="icon" icon={faSearch} />
            <input
              className="input-box"
              placeholder="     제품검색"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
