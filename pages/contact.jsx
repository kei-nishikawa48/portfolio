import { database } from 'firebase';
import {useState} from 'react';
import { useForm } from "react-hook-form"
import firebase from "../firebase/firebase";
import Router from 'next/router';
const Contact = () => {
  const { register, handleSubmit } = useForm()
  const [mail, set_mail] = useState({
    name: '',
    email: '',
    subject: 'お問い合わせ',
    message: '',
    replyTo: '@',
    accessKey: process.env.access_key,
  })
  const [response, setResponse] = useState({
    type: '',
    message: '',
  });
  const Submit =async (data) => {
    set_mail({ name: data.name, email: data.email, message: data.message,...mail})
    console.log(mail)
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(mail),
        headers: { 'Content-Type': 'application/json' },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type:"success",
          message:json.message,
        })
      } else {
        setResponse({
          type: 'error',
          message: json.message,
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form',
      });
    }


    
    // const now = new Date();
    // firebase.firestore().collection("message").add({
    //   name: data.name,
    //   email: data.email,
    //   title: data.title,
    //   discription: data.discription,
    //   time: now,
    // })
  }
  return (
    <>
      <p>{response.message}</p>
    <form onSubmit={handleSubmit(Submit)}>
      <p>名前</p>
      <input
        type="text"
        name="name"
        ref={register({ require: true })}
      />
      <p>email</p>
      <input
        type="text"
        name="email"
        ref={register({ require: true })}
      />
      <p>メッセージ</p>
      <input
        type="text"
        name="message"
        ref={register({ require: true })}
      />
      <button>送信</button>
    </form>
    </>
  );
}

export default Contact;