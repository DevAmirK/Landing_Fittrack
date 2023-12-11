import style from './footer.module.scss';
import logo from '../../../public/fittrack.svg'

function Footer() {
  return (  
    <footer className={style.wrapper}>
      <div className={style.container}>
        <img src={logo} alt="" width='24' height='24' />
        <p><small>Copyright ©FitTrack, 2023 All rights reserved</small></p>
      </div>
    </footer>
  );
}

export default Footer;