import mStyle from '../../styles/MobileView/whatwedo.module.scss'
import Data from '../../../public/assets/json/data.json'
import Link from 'next/link';
import { useRouter } from "next/router";

interface myData {
  src: string;
  alt: string;
  Path: string;
}

const myData = Data;

const WhatWeDoM = () => {
  let router = useRouter();
  return (
    <>
      <section className={mStyle.main}>
        <nav className={mStyle.topnav}>
          <div className={mStyle.backbtn} onClick={() => router.back()}>
            <img
              src={Data.navigationBack.backBtn}
              alt={Data.navigationBack.alt}
            />
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
        <img className={mStyle.topimg} src={Data.frontMobile[0].src} alt={Data.frontMobile[0].alt} />
        <h2>{Data.whatwedo.header} <span className={mStyle.heading}>{Data.whatwedo.heading}</span>{Data.whatwedo.dot}</h2>
        <div className={mStyle.content}>
          <p>{Data.whatwedo.text}</p>
          <p>{Data.whatwedo.text2}</p>
          <p>{Data.whatwedo.text3}</p>
        </div>
        <div className={mStyle.buttonlogo}>
          <img src={Data.logoMobile[0].src} alt={Data.logo.alt} />
        </div>
      </section>
    </>
  )
}
export default WhatWeDoM;