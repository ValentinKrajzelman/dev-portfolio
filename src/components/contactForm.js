import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CgMail } from "react-icons/cg"

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w6jbyuv', 'plantilla_pie', form.current, 'user_vrYQ6D08ThV9yaVwlbQYo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <div className='mt-[10vh] mb-5 mx-5 text-sm '>If you prefer to send me a direct message leave it here and i will contact you as soon as possible. Thank you :)</div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col mx-5 ">
                <div className=''>
                    <div className='flex flex-col mb-3'>
                        <label>Name: </label>
                        <input type="text" name="user_name" placeholder="Name" />
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label>Email: </label>
                        <input type="email" placeholder="Email" name="user_email" />
                    </div>
                </div>
                <div className='flex flex-col mb-3'>
                    <label>Message: </label>
                    <textarea className='h-[10vh]' name="message" placeholder="Message" />
                </div>

                <input className='w-20 px-2 py-1 rounded-md bg-[#0075FF]' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactForm;