import Image from "next/image";
import Link from "next/link";
import mStyle from '../../styles/MobileView/home.module.scss';
import Data from '../../../public/assets/json/data.json'

interface myData {
  src: string;
  alt: string;
  Path: string;
}

const myData = Data;

const MobileHome = () => {
  return (
    <>
      <section className={mStyle.main}>
        <div className={mStyle.container}>
          <div className={mStyle.logo}>
            <Link href="/">
              <Image
                src={myData.logo.src}
                alt={Data.logo.alt}
                width={120}
                height={60} />
            </Link>
          </div>
          <div className={mStyle.image}>
            {myData.frontMobile.map((Data, index) => (
              <Link href={Data.Path} key={index}>
                <Image
                  src={Data.src}
                  alt={Data.alt}
                  height={300}
                  width={400} />
              </Link>
            ))}
          </div>
          <div className={mStyle.btn}>
            <Link className={mStyle.button} href={Data.button.url}>{Data.button.text}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
export default MobileHome;