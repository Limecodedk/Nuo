import Image from 'next/image';
import style from '../../styles/DesktoView/whatwedo.module.scss'
import Data from '../../../public/assets/json/data.json'
import Link from 'next/link';
import { useRouter } from "next/router";
import { date } from 'yup';

interface myData {
  src: string;
  alt: string;
  Path: string;
}

const myData = Data;

const WhatWeDo = () => {
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
                width={60}
                height={80}
              />
            </div>
            <div className={style.topnav}>
              <div className={style.topnavIcon}>
                {myData.topNav.map((Data, index) => (
                  <Link href={Data.Path} key={index}>
                    <Image
                      src={Data.src}
                      alt={Data.alt}
                      width={80}
                      height={80} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={style.contentContainer}>
            <div className={style.img}>
              <Image
                src={Data.whatwedo.img}
                alt={Data.whatwedo.alt}
                height={750}
                width={290} />
            </div>
            <div className={style.content}>
              <h2>{Data.whatwedo.header} <span className={style.heading}>{Data.whatwedo.heading}</span>{Data.whatwedo.dot}</h2>
              <p>{Data.whatwedo.text}</p>
              <p>{Data.whatwedo.text2}</p>
              <p>{Data.whatwedo.text3}</p>

              <div className={style.btnContainer}>
                <Link className={style.btn} href="/">{Data.whatwedo.btn}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default WhatWeDo