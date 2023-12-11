import style from './banner.module.scss';
import banner from '../../assets/images/mainbanner.png'

function Banner() {
  return (  
    <section className={style.wrapper}>
      <div className={`${style.text} element-animation`}>
        <div className={style.h1}>
          <h1>Your Fitness Companion Always Within Reach</h1>
        </div>
        <div className={style.download}>
          <a href='#download_section'>Download Now</a>
        </div>
      </div>
      <div className={`${style.banner} element-animation`}>
        <img src={banner} alt=""/> 
      </div>
      <i id='info'/>
    </section>
  );
}

export default Banner;