import style from './btn.module.css'

export default function Btn({children}){
 return (    
        <div className={style.border}>        
            {children}
        </div>   
 )
}