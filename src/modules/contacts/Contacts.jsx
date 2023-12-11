import style from './contacts.module.scss';
import WA from '../../assets/icons/whatsapp.svg'

function Contacts() {
  return (  
    <section className={style.wrapper} id='contacts'>
      <div className={`${style.container} element-animation`}>
        <h2 className={style.title}>Any questions?</h2>
        <p className={style.title}>Contact us, we&apos;ll help</p>
        <a href="https://wa.me/15551234567" target="_blank" rel='noreferrer'>
          <img src={WA} alt="whatsapp" width='16' height='16'/>
          <p>Contact via Whatsapp</p>
        </a>
      </div>
    </section>
  );
}

export default Contacts;