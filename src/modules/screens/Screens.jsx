import style from './screens.module.scss'
import screen1 from '../../assets/images/screen1.png'
import screen2 from '../../assets/images/screen2.png'
import screen3 from '../../assets/images/screen3.png'
import screen4 from '../../assets/images/screen4.png'

function Screens() {
  return (  
    <section className={style.wrapper}>
      <div className={`${style.screens} element-animation`}>
        <div className={style.screenCard}>
          <img src={screen1} alt="screenshot-1" loading='lazy' />
        </div>
        <div className={style.screenCard}>
          <img src={screen2} alt="screenshot-2" loading='lazy' />
        </div>
        <div className={style.screenCard}>
          <img src={screen3} alt="screenshot-3" loading='lazy' />
        </div>
        <div className={style.screenCard}>
          <img src={screen4} alt="screenshot-4" loading='lazy' />
        </div>
      </div>
    </section>
  );
}

export default Screens;