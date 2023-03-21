import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '@/assets/header/logo.svg';
import location from '@/assets/header/location.png';
import heart from '@/assets/header/heart.png';
import cart from '@/assets/header/cart.png';
import newIcon from '@/assets/header/Vector.png';
import search from '@/assets/header/Search.png';
import close from '@/assets/header/Close.png';
import bar from '@/assets/header/bar.png';
import { Category } from './Category/Category';
function Header(props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <header className={styles.container}>
      <div className={styles['banner-wrapper']}>
        <div className={styles['banner-box']}>
          <p>
            지금 가입하고 인기상품<span> 100원</span> 에 받아가세요!
          </p>
          <img src={close} alt="배너 닫기" width="42" height="42" />
        </div>
      </div>
      <div className={styles.wrapper}>
        <section className={styles.member}>
          <ul className={styles['member-wrapper']}>
            <li className={pathname === '/signup' ? styles.selected : ''}>
              <Link to="/signup">회원가입</Link>
            </li>
            <li className={pathname === '/login' ? styles.selected : ''}>
              <Link to="/login">로그인</Link>
            </li>
            <li>고객센터</li>
          </ul>
        </section>
        <section className={styles['header-main']}>
          <div>
            <Link to="/">
              <img src={logo} alt="칼리 로고" width="82" height="42" />
            </Link>
            <button type="button" className={styles.market}>
              마켓컬리
            </button>
            <img src={bar} alt="" width="1" height="14" />
            <button type="button" className={styles.beauty}>
              뷰티컬리
              <img src={newIcon} className={styles.new} width="7" height="7" />
            </button>
          </div>
          <div className={styles['search-box']}>
            <label htmlFor="검색창" className={styles['a11y-hidden']}>
              검색창
            </label>
            <input
              className={styles['search-input']}
              placeholder="검색어를 입력해주세요"
            />
            <img className={styles['search-icon']} src={search} />
          </div>
          <div className={styles['quick-menu']}>
            <span>
              <img src={location} alt="배송지 등록" width="36" height="36" />
            </span>
            <span>
              <img src={heart} alt="찜하기" width="36" height="36" />
            </span>
            <Link to="/cart">
              <img src={cart} alt="장바구니" width="36" height="36" />
            </Link>
          </div>
        </section>
        <nav className={styles.nav}>
          <Category />
          <ul className={styles['menu-wrapper']}>
            <li className={styles.menu}>
              <Link to="/product-list">
                <span>신상품</span>
              </Link>
            </li>
            <li className={styles.menu}>
              <Link to="/product-list">
                <span>베스트</span>
              </Link>
            </li>
            <li className={styles.menu}>
              <Link to="/product-list">
                <span>알뜰쇼핑</span>
              </Link>
            </li>
            <li className={styles.menu}>
              <Link to="/product-list">
                <span>특가혜택</span>
              </Link>
            </li>
          </ul>
          <div className={styles.notify}>
            <span>샛별 · 낮</span> 배송안내
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;