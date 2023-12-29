import React, { useRef, useState, useEffect, FormEvent } from 'react';
import {
    EMAIL_VALIDATOR,
    PHONE_VALIDATOR,
    DROPDOWN_CONTACT_US
} from '@/utils/constants/constant';

import '@/styles/contact/contact-form.css';

export default function ContactForm({
    className
}: {
    className: string
}) {
    const [openDropDown, setopenDropDown] = useState<boolean>(false);
    const [formContactUs, setFormContactUs] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        typeRDV: '',
        politics: false
    });
    const [formContactUsErr, setFormContactUsErr] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        typeRDV: '',
        politics: ''
    });
    const [formSubmitError, setFormSubmitError] = useState<boolean>(false);
    const [formSubmitSuccess, setFormSubmitSuccess] = useState<boolean>(false);

      
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setFormSubmitError(false);
        setFormSubmitSuccess(false);
        if (!formContactUs.first_name.length)
            return (
                setFormContactUsErr(prev => ({
                    ...prev,
                    first_name: 'Saisissez un prénom.'
                }))
            );
        setFormContactUsErr(prev => ({...prev, first_name: ''}));
        if (!formContactUs.last_name.length)
            return (
                setFormContactUsErr(prev => ({
                    ...prev,
                    last_name: 'Saisissez un nom.'
                }))
            );
        setFormContactUsErr(prev => ({...prev, last_name: ''}));
        if (!formContactUs.email.length || !EMAIL_VALIDATOR.test(formContactUs.email))
            return (
                setFormContactUsErr(prev => ({
                    ...prev,
                    email: 'Saisissez un email valide.'
                }))
            );
        setFormContactUsErr(prev => ({...prev, email: ''}));
        if (!formContactUs.phone.length || !PHONE_VALIDATOR.test(formContactUs.phone))
            return (
                setFormContactUsErr(prev => ({
                    ...prev,
                    phone: 'Saisissez un numéro de téléphone valide.'
                }))
            );
        setFormContactUsErr(prev => ({...prev, phone: ''}));
        if (!formContactUs.typeRDV.length)
            return (
                setFormContactUsErr(prev => ({
                    ...prev,
                    typeRDV: 'Choisissez un type de rendez-vous.'
                }))
            );
        setFormContactUsErr(prev => ({...prev, typeRDV: ''}));
        if (!formContactUs.politics)
            return (
                setFormContactUsErr(prev => ({
                    ...prev,
                    politics: 'Veuillez cocher cette case avant de continuer.'
                }))
            );
        setFormContactUsErr(prev => ({...prev, politics: ''}));

        const add_customer = {
            first_name: formContactUs.first_name,
            last_name: formContactUs.last_name,
            email: formContactUs.email,
            phone: formContactUs.phone,
            typeRDV: formContactUs.typeRDV
        };
        const form_add_customer = new FormData();
        form_add_customer.append('form', JSON.stringify(add_customer));

        const response = await fetch('/api/customer', {
            method: 'POST',
            body: form_add_customer
        });
        const data = await response.json();
        if (data.ok)    {
            setFormContactUs({
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                typeRDV: '',
                politics: false
            });
            setFormSubmitSuccess(true);
            setTimeout(() => 
                setFormSubmitSuccess(false)
            , 7500);
        }
        else    {
            setFormSubmitError(true);
            setTimeout(() => 
                setFormSubmitError(false)
            , 5000);
        }

    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className={`formcontactuscntctpg ${className}`}
        >
            <h3>Entrez vos informations. Nos équipes vous contacteront dans un délai maximum de 48h.</h3>
            <div className={`ctninptscntctcontactpg`}>
                <div className="ctnnamefirstnamecntctform">
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
                <div className="ctnphonezipcodeinpts">
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
                </div>
                <div className="ctndropdowntypeofcontact">
                    {formContactUsErr.typeRDV.length ?
                        <label className={`formerr${openDropDown ? ' hide' : ''} dropdown`}>
                            {formContactUsErr.typeRDV}
                        </label>
                        : null
                    }
                    <span className={`dropdownroller${openDropDown ? ' active' : ''}`}
                        onClick={() => setopenDropDown(!openDropDown)}>
                        A quelle service souhaitez-vous faire appel?
                    </span>
                </div>
                <div className="ctndropdowneventtype">
                    <div className={`ctnddownchooseeventtypecntct${openDropDown ? ' active':''}`}>
                    { DROPDOWN_CONTACT_US.map((txt, index) => (
                        <label onClick={() => {
                            setFormContactUs(prev => ({
                                ...prev,
                                typeRDV: txt
                            }));
                            setFormContactUsErr(prev => ({
                                ...prev,
                                typeRDV: ''
                            }))
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
            <div className="ctncgupoliticsaccept">
                <input
                    checked={formContactUs.politics}
                    type="checkbox"
                    onChange={(e) => 
                        setFormContactUs(prev => ({
                            ...prev,
                            politics: !formContactUs.politics
                        }))
                    }
                />
                <span className="ctntextpoliticsformcntctpg">
                    En soumettant ce formulaire, vous acceptez les
                    <a href="/cgu" target="_blank"> Conditions d'utilisation </a>
                    et vous confirmez avoir lu la
                    <a href="/politique-de-confidentialite" target="_blank"> Politique de confidentialité </a>
                    de Solution Papiers
                </span>
            </div>
            { formContactUsErr.politics.length ?
                <span className="formerr politics">
                    {formContactUsErr.politics}
                </span>
                : 
                null
            }
            { formSubmitSuccess ? 
                <span className="successsubmit">Le formulaire a été envoyé avec succès, nous vous contacterons dans les plus brefs délais.</span>
                : formSubmitError ?
                    <span className="errsubmit">Une erreur est survenue lors de l'envoi du fomulaire.</span>
                    : null
            }
            <button type="submit">Envoyer le formulaire</button>
        </form>
    );
};