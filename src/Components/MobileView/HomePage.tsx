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
            <a href="/">
              <img src={myData.logo.src} alt={Data.logo.alt} />
            </a>
          </div>
          <div className={mStyle.image}>
            {myData.frontMobile.map((Data, index) => (
              <Link href={Data.Path} key={index}>
                <img src={Data.src} alt={Data.alt} />
              </Link>
            ))}
          </div>
          <div className={mStyle.btn}>
            <a className={mStyle.button}
              href={Data.button.url}>{Data.button.text}</a>
          </div>
        </div>
      </section>
    </>
  )
}
export default MobileHome;