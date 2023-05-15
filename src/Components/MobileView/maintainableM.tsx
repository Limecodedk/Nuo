import Image from 'next/image';
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
            <Image
              src={Data.navigationBack.backBtn}
              alt={Data.navigationBack.alt}
              width={60}
              height={90}
            />
          </div>
          <div>
            <div className={mStyle.topnavIcon}>
              {myData.topNav.map((Data, index) => (
                <Link href={Data.Path} key={index}>
                  <Image
                    src={Data.src}
                    alt={Data.alt}
                    width={40}
                    height={90}
                  />
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <Image
          className={mStyle.topimg}
          src={Data.frontMobile[1].src}
          alt={Data.frontMobile[1].alt}
          height={250}
          width={500}
        />
        <h2>{Data.maintainable.header} <span className={mStyle.heading}>{Data.maintainable.heading}</span>{Data.maintainable.dot}</h2>
        <div className={mStyle.content}>
          <p>{Data.maintainable.text}</p>
          <p>{Data.maintainable.text2}</p>
          <p>{Data.maintainable.text3}</p>
        </div>
        <div className={mStyle.buttonlogo}>
          <Image
            src={Data.logoMobile[0].src}
            alt={Data.logo.alt}
            width={100}
            height={60} />
        </div>
      </section>
    </>
  )
}
export default MaintainAbleM;