import styles from '../../styles/DesktoView/Home.module.scss';
import Data from '../../../public/assets/json/data.json'
import Link from 'next/link';

interface myData {
  src: string;
  alt: string;
  Path: string;
}

const myData = Data;

const HomePage = () => {

  return (
    <>
      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.topnavIcon}>
            {myData.topNav.map((Data, index) => (
              <Link href={Data.Path} key={index}>
                <img src={Data.src} alt={Data.alt} />
              </Link>
            ))}
          </div>
          <div className={styles.logo}>
            <a href="/">
              <img src={myData.logo.src} alt={Data.logo.alt} />
            </a>
          </div>
          <div className={styles.frontImage}>
            {myData.frontImg.map((Data, index) => (
              <Link href={Data.Path} key={index}>
                <img src={Data.src} alt={Data.alt} />
              </Link>
            ))}
          </div>
          <div className={styles.btn}>
            <a className={styles.button}
              href={myData.button.url}>
              {myData.button.text}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
