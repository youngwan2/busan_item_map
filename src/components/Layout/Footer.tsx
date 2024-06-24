import { useEffect, useRef } from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const footerRef = useRef<HTMLAreaElement>(null);
  const currnetPath = location.pathname;
  useEffect(() => {
    if (footerRef.current) {
      currnetPath === '/' && (footerRef.current.style.display = 'none');
      currnetPath !== '/' && (footerRef.current.style.display = 'block');
    }
  }, [currnetPath]);
  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.div}>
        <p>© {new Date().getFullYear()} FoodPicker</p>
        <img
          src="/origin.jpg"
          alt="공공데이터 출처표기 이미지"
          width={150}
          height={45}
        ></img>
      </div>
      <div className={styles.div}>
        <p>
          불편 및 건의사항 신고:{' '}
          <a
            target="_blank"
            href="https://forms.gle/y8126r3AWAmuPhUd6"
            title="https://forms.gle/y8126r3AWAmuPhUd6"
          >
            구글폼
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
