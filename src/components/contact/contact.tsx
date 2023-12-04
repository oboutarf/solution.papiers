'use client';

import React, { FormEvent, useRef, useState, useEffect } from 'react';
import {
    DROPDOWN_CONTACT_US,
    EMAIL_VALIDATOR,
    PHONE_VALIDATOR
} from '@/utils/constants/constant';

import '@/styles/contact/contact.css';

export default function ContactForm({

}: {

    
})  {
    document.body.style.overflow = 'hidden';

    const [formContactUs, setFormContactUs] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        typeRDV: ''
    });
    const [formContactUsErr, setFormContactUsErr] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        typeRDV: ''
    });
    const [openDropDown, setopenDropDown] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formContactUs.first_name.length)
            return (setFormContactUsErr(prev => ({
                ...prev,
                first_name: 'Saisis ton prénom.'
            })));
        setFormContactUsErr(prev => ({...prev, first_name: ''}));
        if (!formContactUs.last_name.length)
            return (setFormContactUsErr(prev => ({
                ...prev,
                last_name: 'Saisis ton nom.'
            })));
        setFormContactUsErr(prev => ({...prev, last_name: ''}));
        if (!formContactUs.email.length || !EMAIL_VALIDATOR.test(formContactUs.email))
            return (setFormContactUsErr(prev => ({
                ...prev,
                email: 'Saisis une adresse e-mail valide.'
            })));
        setFormContactUsErr(prev => ({...prev, email: ''}));
        if (!formContactUs.phone.length || !PHONE_VALIDATOR.test(formContactUs.phone))
            return (setFormContactUsErr(prev => ({
                ...prev,
                phone: 'Saisis un numéro de téléphone valide.'
            })));
        setFormContactUsErr(prev => ({...prev, phone: ''}));
        if (!formContactUs.typeRDV.length)
            return (setFormContactUsErr(prev => ({
                ...prev,
                typeRDV: 'Saisis un type de rendez-vous.'
            })));
        setFormContactUsErr(prev => ({...prev, typeRDV: ''}));
        alert('Form submitted!');
    };

    return (
        <main className="wrapcontactformpg">
            <section className="ctnformadscontactpg">
                <div className="logotextctn">
                    <img className="topimgformlogo"
                        src="https://transcendance-avatars.s3.eu-west-3.amazonaws.com/Capture+d%E2%80%99e%CC%81cran+2023-12-04+a%CC%80+19.45.16.png" alt=""/>
                    <h2>Vos démarches en un click</h2>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className="formcontactuscntctpg">
                    <h3>Entrez vos informations. Nos équipes vous contacteront dans un délai maximum de 48h.</h3>
                    <div className="ctninptscntctcontactpg">
                        <div className={`inputctncntctus${formContactUs.first_name.length ? ' active' : ''}`}>
                            <input value={formContactUs.first_name} onChange={(e) => {
                                setFormContactUs(prev => ({
                                    ...prev,
                                    first_name: e.target.value
                                }))
                            }} type="text" />
                            <label>Prénom*</label>
                            {formContactUsErr.first_name.length ?
                                <span className="formerr">{formContactUsErr.first_name}</span>
                                : null
                            }
                        </div>
                        <div className={`inputctncntctus${formContactUs.last_name.length ? ' active' : ''}`}>
                            <input value={formContactUs.last_name} onChange={(e) => {
                                setFormContactUs(prev => ({
                                    ...prev,
                                    last_name: e.target.value
                                }))
                            }} type="text" />
                            <label>Nom*</label>
                            {formContactUsErr.last_name.length ?
                                <span className="formerr">{formContactUsErr.last_name}</span>
                                : null
                            }

                        </div>
                        <div className={`inputctncntctus${formContactUs.email.length ? ' active' : ''}`}>
                            <input value={formContactUs.email} onChange={(e) => {
                                setFormContactUs(prev => ({
                                    ...prev,
                                    email: e.target.value
                                }))
                            }} type="text" />
                            <label>E-mail*</label>
                            {formContactUsErr.email.length ?
                                <span className="formerr">{formContactUsErr.email}</span>
                                : null
                            }
                        </div>
                        <div className={`inputctncntctus${formContactUs.phone.length ? ' active' : ''}`}>
                            <input value={formContactUs.phone} onChange={(e) => {
                                setFormContactUs(prev => ({
                                    ...prev,
                                    phone: e.target.value
                                }))
                            }} type="text" />
                            <label>Numéro de téléphone*</label>
                            {formContactUsErr.phone.length ?
                                <span className="formerr">{formContactUsErr.phone}</span>
                                : null
                            }
                        </div>
                        <div className="ctndropdowntypeofcontact">
                            {formContactUsErr.typeRDV.length ?
                                <label className={`formerr${openDropDown ? ' hide' : ''} dropdown`}>{formContactUsErr.typeRDV}</label>
                                : null
                            }
                            <span className={`dropdownroller${openDropDown ? ' active' : ''}`} onClick={() => setopenDropDown(!openDropDown)}>
                                A quelle service souhaitez-vous faire appel?
                            </span>
                            <div className={`ctnddownchooseeventtypecntct${openDropDown ? ' active':''}`}>
                            { DROPDOWN_CONTACT_US.map((txt, index) => (
                                <label onClick={() => {
                                    setFormContactUs(prev => ({
                                        ...prev,
                                        typeRDV: txt
                                    }));
                                    setopenDropDown(!openDropDown);
                                }}>
                                    {txt}
                                </label>
                            ))}
                            </div>
                            <span className={`selectedelemddown${openDropDown ? ' none' : ''}`}>
                                {`${formContactUs.typeRDV.length ? '•' : ''}`}{formContactUs.typeRDV}
                            </span>
                        </div>
                    </div>
                    <button style={{
                        display: `${openDropDown ? 'none' : 'flex'}`
                    }} type="submit">Envoyer le formulaire</button>
                </form>
            </section>
        </main>
    );
};