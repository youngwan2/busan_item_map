import { Outlet } from 'react-router-dom';
import Header from './Header';
import Movement from '../Common/Movement';
import NavSearch from '../Common/NaverDictionary/NaverDictionary';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <ToastContainer closeButton position="bottom-left" />
      <Header isStyle={true} />
      <main className={styles.main}>
        <Outlet />
        <Movement />
        <NavSearch />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
