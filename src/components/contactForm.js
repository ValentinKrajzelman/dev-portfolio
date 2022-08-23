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
        <div className='md:flex md:flex-col md:place-items-center md:mt-32 '>
            <div className='mb-5 mx-5 text-sm md:text-lg'>Or send me a direct message, i will contact you as soon as possible.</div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col mx-5">
                <div className='md:flex md:w-[50rem] md:place-items-center md:place-content-center'>
                    <div className='md:flex flex-col md:mr-7 md:w-[15rem]'>

                        <div className='flex flex-col mb-3'>
                            <label>Name: </label>
                            <input className='text-[#0A192F] p-1' type="text" name="user_name" placeholder="Name" />
                        </div>
                        <div className='flex flex-col mb-3'>
                            <label>Email: </label>
                            <input className='text-[#0A192F] p-1' type="email" placeholder="Email" name="user_email" />
                        </div>
                    </div>
                    <div className='flex flex-col mb-3 md:w-[15rem]'>
                        <label>Message: </label>
                        <textarea className='h-[10vh] text-[#0A192F] p-1' name="message" placeholder="Message" />
                    </div>
                </div>

                <input className='md:ml-36 w-20 px-2 py-1 rounded-md bg-[#0075FF]' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactForm;