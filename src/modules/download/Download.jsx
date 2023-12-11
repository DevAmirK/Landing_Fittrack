import style from './download.module.scss';
import screens from '../../assets/images/screens.png';
import GP from '../../assets/icons/googleplay.svg';
import AS from '../../assets/icons/appstore.svg'

function Download() {
  return (  
    <section className={style.wrapper}>
      <i id='download_section'/>
      <div className={`${style.content} element-animation`}>
      <div className={style.container}>
        <h2>Download the app to start exercising</h2>
        <p>A universal assistant in sports. Install and see for yourself</p>
        <div className={style.links}>
          <a className={style.button} href="https://play.google.com/store/games" target='_blank' rel="noreferrer">
            <div className={style.box}>
              <img src={GP} alt="googleplay" width='32' height='32' loading='lazy'/>
              <div className={style.boxtext}>
                <p className={style.subtitle}>Available on</p>
                <p className={style.title}>Google Play</p>
              </div>
            </div>
          </a>
          <a className={style.button} href="https://www.apple.com/app-store/" target='_blank' rel="noreferrer">
            <div className={style.box}>
              <img src={AS} alt="appstore" width='32' height='32' loading='lazy'/>
              <div className={style.boxtext}>
                <p className={style.subtitle}>Available on</p>
                <p className={style.title}>App Store</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className={style.screens}>
        <img src={screens} alt="" loading='lazy'/>
      </div>
      </div>
    </section>
  );
}

export default Download;