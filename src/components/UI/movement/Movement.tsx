import styles from './Movement.module.css'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'

const Movement = () => {

    const [scrollY, setScrollY] = useState(0)
    const scrollYHandler = () => {
        setScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollYHandler)
        return () => {
            if (scrollY > 200) window.removeEventListener('scroll', scrollYHandler)
        }
    }, [scrollY])

    return (
        <article className={styles.movement}>
            <button
                style={scrollY < 50 ? { visibility: 'hidden' } : { visibility: 'visible' }}
                onClick={() => {
                    window.scrollTo({ 'top': 0, behavior: 'smooth' })
                }}><FontAwesomeIcon icon={faChevronUp} /></button>
            <button
                style={scrollY > document.body.offsetHeight - 1000 ? { visibility: 'hidden' } : { visibility: 'visible' }}
                onClick={() => {
                    window.scrollTo({ 'top': 10000, behavior: 'smooth' })
                }}><FontAwesomeIcon icon={faChevronDown} /></button>
        </article>


    )
}

export default Movement