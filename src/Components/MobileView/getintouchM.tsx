import mStyle from '../../styles/MobileView/getintouch.module.scss'
import Data from '../../../public/assets/json/data.json'
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState } from "react";;
import Modal from "@/Components/Modal";

interface myData {
  src: string;
  alt: string;
  Path: string;
}

const myData = Data;

const GetInTouchM = () => {
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
      <section className={mStyle.main}>
        <nav className={mStyle.topnav}>
          <div className={mStyle.backbtn} onClick={() => router.back()}>
            <img src={Data.navigationBack.backBtn} alt={Data.navigationBack.alt} />
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
        <img className={mStyle.topimg} src={Data.frontMobile[2].src} alt={Data.frontMobile[2].alt} />
        <h2>{Data.getintouch.header} <span className={mStyle.heading}>{Data.getintouch.heading}</span>{Data.getintouch.dot}</h2>
        <div className={mStyle.content}>
          <p>{Data.getintouch.text}</p>
          <p>{Data.getintouch.text2}</p>
        </div>
        <div className={mStyle.contactIcon}>
          <div onClick={openModal}>
            <img
              src={Data.getintouch.contactIcon}
              alt={Data.getintouch.alt}
            />
            <div>
              <a href="#">lt@ooolish.com</a>
            </div>
          </div>
          <div onClick={openModal}>
            <img
              src={Data.getintouch.contactIcon2}
              alt={Data.getintouch.contactIconAlt}
            />
            <div>
              <a href="#">pn@ooolish.com</a>
            </div>
          </div>
          <div onClick={openModal}>
            <img
              src={Data.getintouch.contactIcon3}
              alt={Data.getintouch.contactIconAlt}
            />
            <div>
              <a href="#">mn@ooolish.com</a>
            </div>
          </div>
        </div>
        <div className={mStyle.buttonlogo}>
          <img src={Data.logoMobile[1].src} alt={Data.logo.alt} />
        </div>
        <Modal
          isOpen={open}
          onClose={closeModal}
        />
      </section >
    </>
  )
}
export default GetInTouchM;