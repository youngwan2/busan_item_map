import styles from './Layout.module.scss';

import Header from './Header';
import Movement from '../Movement';
import NavSearch from '../NaverDictionary/NaverDictionary';
import Footer from './Footer';

import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';


const Layout = () => {
  return (
    <div className={styles.layout_container} >
      <ToastContainer closeButton position="bottom-left" />
      <Header />
      <main className={styles.main}>
        <Outlet />
        <Movement />
        <NavSearch />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
