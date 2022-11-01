import React, { Component } from 'react'
import css from '../style/Signup.module.css'
import imgbg from '../assets/images/img-property.png'
import Footer from '../component/Footer/Footer'
import { Link } from "react-router-dom";
import withNavigate from "../Helper/withNavigate";


class Signup extends Component {
  render() {
    return (
        <div>
      <div className={css.container}>
        <main className={css.mainctg}>
            <aside className={css.sidecontent}>
                <img className={css.imgbg} src={imgbg} alt=''/>
            </aside>
            <section className={css.formcontent}>
                <div className={css.headcontent}>
                    <div className={css.logodetail}>
                        <h2 className={css.title}>Monlight</h2>
                    </div>
                    <div className={css.rightheadcontent}>
                        <Link to={'/'}>
                        <p>Login</p>
                        </Link>
                    </div>
                </div>
                <div className={css.signupcontent}>
                    <h1 className={css.h1}>Sign Up</h1>
                    <form className={css.fullwidth}>
                        <div className={css.inputdiv}>
                            <label className={css.labelsign}>Email Address:</label>
                            <input className={css.signlabel} type="text" placeholder="Enter your email address" />
                        </div>
                        <div className={css.inputdiv}>
                            <label className={css.labelsign}>Password:</ label>
                           <input className={css.signlabel} type="password" placeholder="Enter your password" />
                        </div>
                        <div className={css.inputdiv}>
                            <label className={css.labelsign}>Phone Number:</label>
                           <input className={css.signlabel}  type="tel" placeholder="Enter your phone number" />
                        </div>
                        <div className={css.signcontainer}>
                            <button className={css.btnsignup}>Sign Up</button>
                            <button className={css.signup}>Sign Up with Google</button>
                        </div>
                    </form>
                </div>
               
            </section>
        </main>
    
        <section className={css.getmember}>
            <div className={css.infomember}>
                <h2>Get your member card now!</h2>
                <p>Let's join with our member and enjoy the deals.</p>
            </div>
            <div >
                <button className={css.btncreate}>Create Now</button>
            </div>
        </section>
      </div>
        <Footer />
        </div>
    )
  }
}

export default withNavigate(Signup)