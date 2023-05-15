import Link from "next/link";
import style from '../../styles/DesktoView/maintainable.module.scss';
import Data from '../../../public/assets/json/data.json';
import { useRouter } from "next/router";

interface myData {
  src: string;
  alt: string;
  Path: string;
}

const myData = Data;

const MainTainAble = () => {
  let router = useRouter();

  return (
    <>
      <section className={style.main}>
        <div className={style.container}>
          <div className={style.navContainer}>
            <div className={style.back} onClick={() => router.back()}>
              <img src={Data.navigationBack.backBtn} alt="" />
            </div>
            <div className={style.topnav}>
              <div className={style.topnavIcon}>
                {myData.topNav.map((Data, index) => (
                  <Link href={Data.Path} key={index}>
                    <img src={Data.src} alt={Data.alt} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={style.contentContainer}>
            <div className={style.img}>
              <img src={Data.maintainable.img} alt="" />
            </div>
            <div className={style.content}>
              <h2>{Data.maintainable.header} <span className={style.heading}>{Data.maintainable.heading}</span>{Data.maintainable.dot}</h2>
              <p>{Data.maintainable.text}</p>
              <p>{Data.maintainable.text2}</p>
              <p>{Data.maintainable.text3}</p>

              <div className={style.btnContainer}>
                <a className={style.btn} href="/">{Data.maintainable.btn}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default MainTainAble;