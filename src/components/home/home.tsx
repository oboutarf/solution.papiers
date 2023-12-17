'use client';

import React, { useRef, useState, useEffect } from 'react';
import Calendly from '@/components/calendly/calendly-form';
import { LINKS_SERVICES_HOMEPAGE, HOMEPAGE_WHO_WE_ARE } from '@/utils/constants/constant';
import { InlineWidget } from "react-calendly";
import ContactForm from '@/components/contact/contact-form';
import PeopleCarroussel from '@/components/home/people-carroussel';

import '@/styles/home/home.css';

export default function Home({

}: {
    
})  {

    return (
        <main className="wraphomepg">
            <div className="mainbghomepage">
                <div className="wrpttlhmpgmain">
                    <h1>Votre partenaire simplifiant vos démarches administratives en toute efficacité.</h1>
                    <div className="hmpgctniconswhoweare">
                    { HOMEPAGE_WHO_WE_ARE.map((we, idx) => (
                        <div className="fieldiconwhoweare">
                            <img
                                alt=""
                                src={we.image}
                            />
                            <span>{we.text}</span>
                        </div>
                    ))}
                    </div>
                    <a
                        href="/nous-contacter"
                        className="mainhomepagebtnrdctn"
                    >
                        Découvrir
                        <img
                            alt=""
                            src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/lucideiconchevron.svg"
                        />
                    </a>
                </div>
                <img
                    alt=""
                    className="mainhmpgimg"
                    src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/homepage/drapeau-francais-scaled-removebg.png"
                />
            </div>
            <div className="ctnhmpgmaintxt">
                <h1>Faire valoir vos droits auprès des administrations françaises, nous sommes là pour vous guider !</h1>
                <h3>Obtenir des papiers en France vous semble compliqué ? Vous vous demandez vers qui vous tourner ? La prise de rendez-vous en préfecture ou dans une administration est difficile pour vous ? Vous n’obtenez pas l’aide attendue de votre avocat ?</h3>
            </div>
            <div className="mainhmpgservices">
            { LINKS_SERVICES_HOMEPAGE.map((service, idx) => (
                <a  
                    href={service.link}
                    className="ctnservicesblckhmpg"
                >
                    <img
                        alt=""
                        className="bgimgservicehmpg"
                        src={service.img}
                    />
                    <div className="ctntxtnosserviceshmpg">
                        <span>{service.text}</span>
                    </div>
                </a>
            ))}
            </div>
            <div className="ctnservicestxtexplhmpg">
                <a>
                    Découvrez nos services
                </a>
            </div>
            <Calendly />
            <PeopleCarroussel /> 
            <ContactForm
                className={'home'}
            />
        </main>
    );
};
