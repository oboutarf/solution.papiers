
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
                        <a className="ttlnoserviceslnk" href="/services">NOS SERVICES</a>
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
                        <a className="ttlnoserviceslnk" href="/nous-contacter">NOUS CONTACTER</a>
                        <div className="ctncntntcontactusfooter">
                            <span className="ctnaddrfootercontactus">
                                Pl. de l'Hôtel de Ville<br/>75004 Paris, France
                            </span>
                            <div className="ctncontactinfofooter">
                                <a
                                    target="_blank"
                                    href="https://wa.me/+33771473026"
                                >
                                    +33 7 71 47 30 26
                                </a>
                            </div>
                            <div className="ctncontactinfofooter">
                                <a
                                    target="_blank"
                                    href="mailto:contact@solutionpapiers.fr"
                                >
                                    contact@solutionpapiers.fr
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ctnpoliticslegalftr">
                            <a href="/politique-de-confidentialite">
                                Politique de confidentialité
                            </a>
                            <a href="/cgu">
                                Conditions Générales d'Utilisation
                            </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
