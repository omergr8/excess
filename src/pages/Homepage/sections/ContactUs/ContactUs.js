import React from 'react'
import ContactUsGrid from './Component/ContactUsGrid'
import YellowBar from './Component/YellowBar';
import styles from './contactus.module.css';

const ContactUs = () => {
    return (
        <div id="contactus" className={`${styles.container} position-relative`}>
            <YellowBar />
            <ContactUsGrid />
            <p className={styles.textCopyright}>ALL COPYRIGHTS RESERVED  2020-2021 XCCESS, LLC, a subsidary of Remote Xccess</p>
        </div>
    )
}

export default ContactUs
