import { Link } from "react-router-dom"
import styles from '../Layout/Header.module.scss'
import { routes } from "../../routes"
import { MouseEventHandler } from "react"
import { HiXCircle } from "react-icons/hi"

interface PropsType {
  isOpen: boolean
  onClickDropDown: MouseEventHandler<HTMLButtonElement>

}

export default function Nav({ isOpen, onClickDropDown }: PropsType) {

  return (
    <nav className={`${isOpen ? styles.active : ''} ${styles.nav}`}>
      {/* <button onClick={onClickDropDown} className={styles.menu_icon}><HiXCircle/></button> */}
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
  )
}