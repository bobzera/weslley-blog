import Link from 'next/link'
import styles from './whatsapp.module.css'

const merda = true

export default function Whatsapp(){
  if(merda){    return (
        <>
                 <div className={styles.box}>          
                <Link href="https://api.whatsapp.com/send?phone=4407756118628&text=Ola%20eu%20gostaria%20de%20fazer%20um%20orcamento">  
                <img src='images/whatsapp.png' className={styles.img}></img>
                </Link>
                </div>    
            
        </>
    )
}else{
    return <h1>teste</h1>

}

}