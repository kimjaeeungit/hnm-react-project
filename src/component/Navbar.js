import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setAuthenticate, authenticate }) => {
  //페이지 이동하는 방법
  //1.Link : 바로 눌러서 가면 될떄
  //2.useNavigate : 함수안에서 써야할떄
  const navigate = useNavigate();
  const goToLogin = () => {
    if (authenticate === true) {
      setAuthenticate(false);
    } else {
      navigate('/login');
    }
  };
  const goToMain = () => {
    navigate('/');
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
  const search = (event) => {
    if (event.key === 'Enter') {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      console.log('keyword', keyword);
      // url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div>
        <div onClick={goToLogin} className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? '로그아웃' : '로그인'}</div>
        </div>
      </div>
      <div onClick={goToMain} className="nav-section">
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
              type="text"
              onKeyPress={(event) => search(event)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
