import style from './description.module.scss';

function Description() {
  return (  
    <>
      <div className={`${style.heading} element-animation`}> 
        <h2><span className={style.name}>FitTrack</span> — is a new way to add sports to your life.</h2>
        <p>It is a comprehensive fitness app: track workouts, plan meals, stay motivated</p>
      </div>
      <section className={style.benefits}>
        <li className='element-animation'>
          <h3 className={style.number}>1</h3>
          <h2>Tracking</h2>
          <p>Simple and precise workout logging for effective progress monitoring</p>
        </li>
        <li className='element-animation'>
          <h3 className={style.number}>2</h3>
          <h2>Nutrition</h2>
          <p>Creating tailored meal plans aligned with your goals</p>
        </li>
        <li className='element-animation'>
          <h3 className={style.number}>3</h3>
          <h2>Motivation</h2>
          <p>Constant reminders, achievements, and tailored advice to boost motivation</p>
        </li>
        <li className='element-animation'>
          <h3 className={style.number}>4</h3>
          <h2>Support</h2>
          <p>Professional support to resolve queries, offer solutions, and optimize your app experience</p>
        </li>
      </section>
    </>
  );
}

export default Description;