import ReactDOM from "react-dom";
import modalStyle from '../styles/modal.module.scss';
import { GrClose } from 'react-icons/gr';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";

interface mProps {

  isOpen: boolean
  onClose: () => void
}

const Modal = (props: mProps) => {

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Please enter your name"),

    email: yup
      .string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        { message: "Invalid email" }
      )
      .required('Please enter your email'),

    comment: yup
      .string()
      .required('Please enter your message')
  })

  const { register,
    handleSubmit,
    formState: { errors } } = useForm({ resolver: yupResolver(schema), });

  const onSubmit = (data: any) => console.log(data);

  if (!props.isOpen) return null;

  return ReactDOM.createPortal(

    <div className={modalStyle.modal} id="modal">
      <div className={modalStyle.close} onClick={props.onClose}><GrClose /></div>
      <h2>Get in Touch and Let Us Help You!</h2>
      <div className={modalStyle.error}>
        {errors.name?.message} <br />
        {errors.email?.message} <br />
        {errors.comment?.message}
      </div>
      <div className={modalStyle.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={modalStyle.form}>
          <label>Name*</label>
          <input
            type="text" id="name" {...register("name", { required: true, minLength: 2, maxLength: 10, pattern: /^[A-Za-z]+$/i })} />
          <label>Email*</label>
          <input type="email" id="email" {...register("email")} />
          <label >Comment*</label>
          <textarea id="comment" {...register("comment")}></textarea>
          <div>
            <button className={modalStyle.btn}>Submit</button>
          </div>
        </form>
      </div>
    </div>, document.body
  )
}
export default Modal;