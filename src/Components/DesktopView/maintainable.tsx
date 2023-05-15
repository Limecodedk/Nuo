import Image from "next/image";
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
              <Image
                src={Data.navigationBack.backBtn}
                alt={Data.navigationBack.alt}
                height={80}
                width={60} />
            </div>
            <div className={style.topnav}>
              <div className={style.topnavIcon}>
                {myData.topNav.map((Data, index) => (
                  <Link href={Data.Path} key={index}>
                    <Image
                      src={Data.src}
                      alt={Data.alt}
                      height={80}
                      width={80} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={style.contentContainer}>
            <div className={style.img}>
              <Image
                src={Data.maintainable.img}
                alt={Data.maintainable.alt}
                height={750}
                width={290} />
            </div>
            <div className={style.content}>
              <h2>{Data.maintainable.header} <span className={style.heading}>{Data.maintainable.heading}</span>{Data.maintainable.dot}</h2>
              <p>{Data.maintainable.text}</p>
              <p>{Data.maintainable.text2}</p>
              <p>{Data.maintainable.text3}</p>

              <div className={style.btnContainer}>
                <Link className={style.btn} href="/">{Data.maintainable.btn}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default MainTainAble;