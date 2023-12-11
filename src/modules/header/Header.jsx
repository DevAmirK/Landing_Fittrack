import style from './header.module.scss'

function Header() {
  return (
    <>
      <header className={style.wrapper}>
        <a href="#root" className={style.logo}><h2><i>FitTrack</i></h2></a>
        <ul className={style.links} type='none'>
          <li><a href="#info">Description</a></li>
          <li><a href="#contacts">Contact us</a></li>
        </ul>
      </header>
      <div id={style.headerPlug}></div>
    </>  
  );
}

export default Header;