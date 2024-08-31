import React from 'react';

const Sidebar = ({ menuList }) => {
  return (
    <div className="side-body">
      <aside className="side-bar">
        <section className="side-bar__icon-box">
          <section className="side-bar__icon-1">
            <div></div>
            <div></div>
            <div></div>
          </section>
        </section>
        <ul>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
