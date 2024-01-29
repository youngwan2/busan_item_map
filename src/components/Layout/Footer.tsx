import { useEffect, useRef } from 'react';
import styles from './Footer.module.scss'

const Footer = () => {

    const footerRef = useRef<HTMLAreaElement>(null)
    const currnetPath = location.pathname
    useEffect(() => {
        if (footerRef.current) {
            currnetPath === '/' && (footerRef.current.style.display = "none")
            currnetPath !== '/' && (footerRef.current.style.display = "block")
        }
    }, [])
    return (
        <footer className={styles.footer} ref={footerRef}>
            <div className={styles.div}>
                <p>© {new Date().getFullYear()} FoodPicker. All rights reserved.</p>
            </div>
            <div className={styles.div}>
                <p>Contact us: qodna25@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;