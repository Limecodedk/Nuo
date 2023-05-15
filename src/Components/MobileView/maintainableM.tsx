import mStyle from '../../styles/MobileView/maintainable.module.scss'
import Data from '../../../public/assets/json/data.json'
import Link from 'next/link';
import { useRouter } from "next/router";



interface myData {
  src: string;
  alt: string;
  Path: string;
}

const myData = Data;


const MaintainAbleM = () => {
  let router = useRouter();
  return (
    <>
      <section className={mStyle.main}>
        <nav className={mStyle.topnav}>
          <div className={mStyle.backbtn} onClick={() => router.back()}>
            <img src={Data.navigationBack.backBtn} alt="" />
          </div>
          <div>
            <div className={mStyle.topnavIcon}>
              {myData.topNav.map((Data, index) => (
                <Link href={Data.Path} key={index}>
                  <img src={Data.src} alt={Data.alt} />
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <img className={mStyle.topimg} src={Data.frontMobile[1].src} alt={Data.frontMobile[1].alt} />
        <h2>{Data.maintainable.header} <span className={mStyle.heading}>{Data.maintainable.heading}</span>{Data.maintainable.dot}</h2>
        <div className={mStyle.content}>
          <p>{Data.maintainable.text}</p>
          <p>{Data.maintainable.text2}</p>
          <p>{Data.maintainable.text3}</p>
        </div>
        <div className={mStyle.buttonlogo}>
          <img src={Data.logoMobile[0].src} alt="" />
        </div>
      </section>
    </>
  )
}
export default MaintainAbleM;