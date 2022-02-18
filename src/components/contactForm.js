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
            <div className='mt-[10vh] mb-5 mx-5 text-sm '>Si nesecitas dejarme un mensaje directo completa los datos y te voy a contestar a la brevedad. Gracias por pasarte :)</div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col mx-5 ">
                <div className=''>
                    <div className='flex flex-col mb-3'>
                        <label>Nombre: </label>
                        <input type="text" name="user_name" placeholder="Nombre" />
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label>Email: </label>
                        <input type="email" placeholder="Email" name="user_email" />
                    </div>
                </div>
                <div className='flex flex-col mb-3'>
                    <label>Mensaje: </label>
                    <textarea className='h-[10vh]' name="message" placeholder="Mensaje" />
                </div>

                <input className='w-20 px-2 py-1 rounded-md bg-[#0075FF]' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactForm;