import React, { useState } from "react";
import './contact.scss';


  


const Contact = () => { 

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [object, setObject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("template_zcwsm5k", {
      email,
      subject,
      object
    });
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("service_31fqeap", templateId, variables)
      .then((res) => {
        console.log('success !');
        setEmail("");
        setSubject("");
        setObject("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };

    
        return(
            <div className='main-container-contact'>

                <div className='div-secondary-container-contact'>

                <div className='container-h1-text-contact'>
                    <h1 className='main-title-contact'>Contact</h1>
                    <p className='paraph-contact'>Feel free to contact me for a project, an opportunity or anything else…</p>
                </div>

                <div>
                        <form>
                            <div className='div-container-email-subject'>
                                <div className='div-email div-input-contact'>
                                <label className='name-label'>Email</label>
                                <input type='email'
                                       name='email'
                                       className='email-input input-contact'
                                       onChange={(e) => setEmail(e.target.value)}
                                       value={email}  />
                                 </div>

                            <div className='div-subject-title div-input-contact'>
                                <label className='name-label'>Subject</label>
                                <input type='text'
                                    name='subject'
                                    className='subject-input input-contact'
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject}   />
                                 </div>
                            </div>
                           

                            <div className='div-object-text div-input-contact'>
                                <label className='name-label'>Object</label>
                                        <textarea name='object'
                                            className='object-input input-contact'
                                            onChange={(e) => setObject(e.target.value)}
                                            value={object}
                                              />
                            </div>
                            <div className='div-button-send'> 
                            <button className='button-send' onClick={handleSubmit} type='button' >Send</button>
                            </div>
                            <div className='form-message'></div>
                           
                        </form>
                    
                </div>

                </div>
               
            </div>
        )
       
    }

    export default Contact;