import Image from 'next/image';
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
                    height={90} />
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <Image className={mStyle.topimg}
          src={Data.frontMobile[2].src}
          alt={Data.frontMobile[2].alt}
          height={250}
          width={500}
        />
        <h2>{Data.getintouch.header} <span className={mStyle.heading}>{Data.getintouch.heading}</span>{Data.getintouch.dot}</h2>
        <div className={mStyle.content}>
          <p>{Data.getintouch.text}</p>
          <p>{Data.getintouch.text2}</p>
        </div>
        <div className={mStyle.contactIcon}>
          <div onClick={openModal}>
            <Image
              src={Data.getintouch.contactIcon}
              alt={Data.getintouch.alt}
              height={150}
              width={150} />
            <div>
              <Link href="#">lt@ooolish.com</Link>
            </div>
          </div>
          <div onClick={openModal}>
            <Image
              src={Data.getintouch.contactIcon2}
              alt={Data.getintouch.contactIconAlt}
              height={150}
              width={150}
            />
            <div>
              <Link href="#">pn@ooolish.com</Link>
            </div>
          </div>
          <div onClick={openModal}>
            <Image
              src={Data.getintouch.contactIcon3}
              alt={Data.getintouch.contactIconAlt}
              height={150}
              width={150}
            />
            <div>
              <Link href="#">mn@ooolish.com</Link>
            </div>
          </div>
        </div>
        <div className={mStyle.buttonlogo}>
          <Image
            src={Data.logoMobile[1].src}
            alt={Data.logo.alt}
            width={100}
            height={60} />
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