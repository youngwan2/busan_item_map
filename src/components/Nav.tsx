import styles from './Layout/Header.module.scss'

import { Link } from "react-router-dom"

import { routes } from "../routes"


interface PropsType {
  isOpen: boolean

}

export default function Nav({ isOpen }: PropsType) {

  return (
    <>
    <nav className={`${isOpen ? styles.active : ''} ${styles.nav}`}>
      <ul className={styles.menu_wrapper_con}>
        <li className={styles.menu_wrapper}>
          <Link to={'#'}><span>향토 이야기</span></Link>
          <ul className={`${styles.menu_ul}`}>
            {routes[0].map((navi) => {
              return <li key={navi.name}><Link to={navi.route}>{navi.name}</Link></li>
            })}
          </ul>
        </li>
        <li className={styles.menu_wrapper}>
          <Link to={'#'}><span>조회 서비스</span></Link>
          <ul className={`${styles.menu_ul}`}>
            {routes[1].map((navi) => {
              return <li key={navi.name}><Link to={navi.route}>{navi.name}</Link></li>
            })}
          </ul>
        </li>
      </ul>
    </nav>

    </>
  )
}