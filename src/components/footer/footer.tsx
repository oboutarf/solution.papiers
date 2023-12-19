
'use client';
import React, { useRef, useState, useEffect } from 'react';
import { LIST_REDIRECTS_SERVICES } from "@/utils/constants/constant";

import '@/styles/footer/footer.css';

export default function Footer({

}: {

    
})  {

    useEffect(() => {

    }, []);

    return (
        <footer className="mainctnfooterwrp">
            <img
                className="logofooter"
                alt=""
                src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/logo/okq1MGt0.jpg"
            />
            <div className="wrpfootercntnt">
                <div className="ctnfooterservicesetc">
                    <div className="ctnanosservicesfooter">
                        <h3>NOS SERVICES</h3>
                        <div className="ctncntntnsoservicesfooter">
                            {LIST_REDIRECTS_SERVICES.map((redirect, idx) => (
                                <a
                                    href={redirect.link}
                                    className="ctnservicestxtfooter"
                                >
                                    &bull; {redirect.text}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="ctncontactusfooter">
                        <h3>NOUS CONTACTER</h3>
                        <div className="ctncntntcontactusfooter">
                        <span className="ctnaddrfootercontactus">
                            Pl. de l'Hôtel de Ville<br/>75004 Paris, France
                        </span>
                        <div className="ctncontactinfofooter">
                            <a
                                target="_blank"
                                href="https://wa.me/+33123742312"
                            >
                                +33 1 23 74 23 12
                            </a>
                        </div>
                        <div className="ctncontactinfofooter">
                            <a
                                target="_blank"
                                href="mailto:contact@solution-papiers.fr"
                            >
                                contact@solution-papiers.fr
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
