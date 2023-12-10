'use client';

import React, { useRef, useState, useEffect } from 'react';
import Calendly from '@/components/calendly/calendly-form';
import {
    LINKS_SERVICES_HOMEPAGE,
    LIST_REDIRECTS_SERVICES,
    PERSONNES_HISTOIRES_HOMEPAGE
} from '@/utils/constants/constant';

import '@/styles/home/home.css';

export default function Home({

}: {
    
})  {

    return (
        <main className="wraphomepg">
            <div className="mainbghomepage">
                <div className="wrpttlhmpgmain">
                    <h1>Résider ou obtenir un<br/> emploi en France de manière légale.</h1>
                    <button className="mainhomepagebtnrdctn">
                        Découvrir
                        <img
                            alt=""
                            src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/lucideiconchevron.svg"
                        />
                    </button>
                </div>
                <img
                    alt=""
                    className="mainhmpgimg"
                    src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/homepage/drapeau-francais-scaled-removebg.png"
                />
            </div>
            <h2 className="ttlmainhmpgservices">
                NOS SERVICES 
                <div className="linettlserviceshmpg"></div>
            </h2>
            <div className="mainhmpgservices">
            { LINKS_SERVICES_HOMEPAGE.map((service, idx) => (
                <div className="ctnservicesblckhmpg">
                    <img
                        alt=""
                        className="bgimgservicehmpg"
                        src={service.img}
                    />
                    <div className="ctntxtnosserviceshmpg">
                        <span>{service.text}</span>
                    </div>
                </div>
            ))}
            </div>
            <div className="peoplecarrousselhmpg">
            { PERSONNES_HISTOIRES_HOMEPAGE.map((person, idx) => (
                <div className="ctnpeoplehistorycntnt">
                    <div className="ctnpeoplenamehsitory">
                        <h4>{person.name}</h4>
                        <span>{person.histoire}</span>
                    </div>
                    <img
                        src={person.people_img}
                        alt=""
                    />
                </div>
            ))}
            </div>
            <Calendly />
        </main>
    );
};
