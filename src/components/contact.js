import React from "react";
import { BsLinkedin, BsFillArrowRightCircleFill, BsFillTelephoneFill, BsGithub } from "react-icons/bs"
import { FiExternalLink } from "react-icons/fi";
import { CgMail } from "react-icons/cg"


const Contact = () => {

    return (<div className="ml-7" id='contact'>
        <div className="text-4xl pt-[10vh] ml-[-10px] tracking-wider"> Contact.
            <div className="text-xl mt-10 ">
                <div className="flex place-content-start items-center mb-9"> <BsLinkedin className="mr-3 text-3xl" />
                    <a className="flex place-content-start items-center" rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/valentin-krajzelman-b23380161/">
                        <div className="mr-4">Linkedin</div> <div className="flex text-xs items-center "> ValentinKrajzelman <FiExternalLink />
                        </div>

                    </a>
                </div>
                <div className="flex place-content-start items-center mb-9"> <BsGithub className="mr-3  text-3xl" />
                    <a className="flex place-content-start items-center" rel="noopener noreferrer" target='_blank' href="https://github.com/ValentinKrajzelman">
                        <div className="mr-4">GitHub</div> <div className="flex text-xs items-center "> ValentinKrajzelman <FiExternalLink />
                        </div>
                    </a>
                </div>
                <div className="flex place-content-start items-center mb-9"> <CgMail className="mr-3  text-3xl" />
                    <div className="mr-4">Mail</div> <div className="text-sm">valentinkrajzelman@hotmail.com
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default Contact;