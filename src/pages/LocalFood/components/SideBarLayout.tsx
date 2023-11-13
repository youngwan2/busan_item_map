import styles from '../LocalFood.module.scss'
import { useState } from 'react';



interface setDisplay {
    setDisplay:(p:boolean)=>void
}
const SideBarLayout= ({setDisplay}:setDisplay) =>{

    return (  
        <div role='button' className={styles.layout} onClick={()=>{
            setDisplay(false)
        }}>

        </div>
    )
}

export default SideBarLayout;