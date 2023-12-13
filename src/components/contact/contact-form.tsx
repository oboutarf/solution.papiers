import React, { useRef, useState, useEffect, FormEvent } from 'react';
import { DROPDOWN_CONTACT_US } from '@/utils/constants/constant';

import '@/styles/contact/contact-form.css';

export default function ContactForm({
    switchColors
}: {
    switchColors: boolean
}) {
    const [swicth, setSwitch] = useState(switchColors)
    const [openDropDown, setopenDropDown] = useState<boolean>(false);
    const [formContactUs, setFormContactUs] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        zip_code: '',
        typeRDV: '',
        politics: false
    });
    const [formContactUsErr, setFormContactUsErr] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        zip_code: '',
        typeRDV: '',
        politics: true
    });

    const handleSubmit = (e: FormEvent) => {

    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className={`formcontactuscntctpg`}
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
                    <div className={`inputctncntctus${formContactUs.zip_code.length ? ' active' : ''}`}>
                        <input value={formContactUs.zip_code} onChange={(e) => {
                            setFormContactUs(prev => ({
                                ...prev,
                                zip_code: e.target.value
                            }))
                        }} type="text" />
                        <label>Code postal*</label>
                        {formContactUsErr.zip_code.length ?
                            <span className="formerr">{formContactUsErr.zip_code}</span>
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
                    <a href="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/cgu.docx" target="_blank"> Conditions d'utilisation </a>
                    et vous confirmez avoir lu la
                    <a href="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/ppdp.docx" target="_blank"> Politique de confidentialité </a>
                    de Solution Papiers
                </span>
            </div>
            { formContactUsErr.politics ?
                <span className="formerr politics">{'Veuillez cocher cette case avant de continuer.'}</span>
                : 
                null
            }
            <button type="submit">Envoyer le formulaire</button>
        </form>
    );
};