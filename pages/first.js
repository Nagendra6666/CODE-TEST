import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function first() {
  return (
    <div className='googleaccount'>
        <img  class='message' src='/message.jpeg'></img>
<h1>confirm your Email </h1>
<p>your account has been successfully registered.To complete the processs please check your email for validations</p>
<a href="/"><button class="continue">CONTINUE</button></a><br></br><br></br>
<button className='resendemail'>Resend Verification email</button>
</div>
  )
}
