import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div class="area">
   
       <h1 className='title'> <img class='house' src="house.jpeg" alt="house"/>HOUZEZ</h1>
       <h3>REALESTATE</h3>
    
    
    <div class="content">

      <h4>SIGN IN</h4>
      
        <input type="email" class="Email" name="Email" placeholder="Email Address*" /><br></br>
        <br></br>
        <br></br>
        <input type="text" class="password" name="last" placeholder="password" /><br></br>
        <br></br>
        <br></br>
        <button type="submit" class='block'>SIGN IN</button>
        <br></br>
        <h6><a href="/createaccount">forget your password? </a></h6>
       
        <h5>OR</h5>
        <a href="/first"><button type="submit" class='google'> <img  class='googleimage'src="https://img.icons8.com/color/16/000000/google-logo.png" alt="google"/> <span>CONTINUE WITH GOOGLE</span></button></a>
        <br></br>
        <br></br>
        <button type="submit" class='facebook'><img class='facebookimage' src="https://img.icons8.com/color/16/000000/facebook-logo.png" alt="facebook" /><span>CONTINUE WITH FACEBOOK</span></button>
        <br></br>
        <br></br>
        <button type="submit" class='apple'><img class='appleimage' src="https://img.icons8.com/color/16/000000/apple-logo.png" alt="apple"/><span>CONTINUE WITH APPLE</span></button>
        <h6>Not Signed up? <a href="/createaccount">Create an account</a></h6>
        
      
    </div>
    </div>
      
  )
}
