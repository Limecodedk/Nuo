import style from '@/styles/Notfound.module.scss'
import Data from '../../public/assets/json/data.json'

const Notfound = () => {
  return (
    <>
      <section className={style.main}>
        <div className={style.containerContent}>
          <h2 className={style.heading}>{Data.notfound.pagetitle}</h2>
          <h1 className={style.content}>{Data.notfound.content}</h1>
          <a className={style.btn} href={Data.notfound.src}>{Data.notfound.btn}</a>
        </div>
      </section>
    </>
  )
}
export default Notfound;