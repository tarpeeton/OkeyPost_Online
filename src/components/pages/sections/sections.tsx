import {FC} from 'react';
import style from "./sections.module.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Sections: FC = (): JSX.Element =>  {
    return(
     <div className={style.Container}>
        <div className={style.MainContent}>
            <div className={style.Contents}>
                <div className={style.ContentInfo}>
                    <h1>
                    Доставка товаров из Великобритании в Россию
                    </h1>
                    <p>Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.</p>
                    <button> Получить адрес в UK</button>
                </div>
                <div className = {style.ContentImage}>
                    <div className = {style.PossitionImage}>
                        <LazyLoadImage effect="blur" src="https://ucarecdn.com/3479bd16-bc09-46e5-b3a3-9c6c1fef684b/" alt="Iltimos ozgina kuting"/>
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}




export default Sections;