import Image from "next/image";
import Link from "next/link";
import style from '../../styles/DesktoView/getintouch.module.scss';
import Data from '../../../public/assets/json/data.json';
import { useRouter } from "next/router"
import React, { useState } from "react";;
import Modal from "@/Components/Modal";
import { date } from "yup";

interface myData {
  src: string;
  alt: string;
  Path: string;
}

const myData = Data;

const GetInTouch = () => {

  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const openModal = () => {
    setOpen(true);
    console.log('open modal');
  }

  const closeModal = () => {

    setOpen(false);

  };

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
                height={80} />
            </div>
            <div className={style.topnav}>
              <div className={style.topnavIcon}>
                {myData.topNav.map((data, indeks) => (
                  <Link href={data.Path} key={indeks}>
                    <Image
                      src={data.src}
                      alt={data.alt}
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
                src={Data.getintouch.img}
                alt={Data.getintouch.alt}
                height={750}
                width={290} />
            </div>
            <div className={style.content}>
              <h2>
                {Data.getintouch.header}
                <span className={style.heading}>{Data.getintouch.heading}</span>
                {Data.getintouch.dot}
              </h2>
              <p>{Data.getintouch.text}</p>
              <p>{Data.getintouch.text2}</p>

              <div className={style.contact}>
                <div className={style.contactIcon} onClick={openModal}>
                  <Image
                    src={Data.getintouch.contactIcon}
                    alt={Data.getintouch.contactIconAlt}
                    width={150}
                    height={150}
                  />
                  <div>
                    <Link href="#">lt@ooolish.com</Link>
                  </div>
                </div>
                <div onClick={openModal}>
                  <Image
                    src={Data.getintouch.contactIcon2}
                    alt={Data.getintouch.contactIconAlt}
                    width={150}
                    height={150}
                  />
                  <div>
                    <Link href="#">pn@ooolish.com</Link>
                  </div>
                </div>
                <div onClick={openModal}>
                  <Image
                    src={Data.getintouch.contactIcon3}
                    alt={Data.getintouch.contactIconAlt}
                    width={150}
                    height={150}
                  />
                  <div>
                    <Link href="#">mn@ooolish.com</Link>
                  </div>
                </div>
              </div>
              <div className={style.btnContainer}>
                <Link className={style.btn} href="/">{Data.getintouch.btn}</Link>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={open}
          onClose={closeModal}
        />
      </section>
    </>
  )
}
export default GetInTouch;