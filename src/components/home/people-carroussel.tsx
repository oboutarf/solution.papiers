'use client';

import React, { useRef, useState, useEffect } from 'react';
import { PERSONNES_HISTOIRES_HOMEPAGE } from '@/utils/constants/constant';

import '@/styles/home/people-carroussel.css';

export default function PeopleCarroussel({

}: {

})  {
    const [carrousselControl, setCarrousselControl] = useState<number>(0);
    const [carrousselIndex, setCarrousselIndex] = useState<number>(0);

    const switchCarroussel = (action: number) => {
        const carroussel = document.querySelector('.ctncrslhmpgscroll') as HTMLDivElement;
        if (carroussel) {
            if (action) {
                if (carrousselIndex === 5)
                    return (setCarrousselControl(0), setCarrousselIndex(0));
                carroussel.style.transform = `translateX(${carrousselControl - 70}%)`;
                setCarrousselControl(carrousselControl - 70);
                setCarrousselIndex(carrousselIndex + 1);
            }
            else {
                if (!carrousselIndex)
                    return;
                carroussel.style.transform = `translateX(${carrousselControl + 70}%)`;
                setCarrousselControl(carrousselControl + 70);
                setCarrousselIndex(carrousselIndex - 1);
            }
        }
    };

    useEffect(() => {

        const scrollCarrousselPeople = () => {
            const carroussel = document.querySelector('.ctncrslhmpgscroll') as HTMLDivElement;
            if (carroussel) {
                console.log({carrousselControl})
                carroussel.style.transform = `translateX(${carrousselControl}%)`;
                setCarrousselControl(carrousselControl - 70);
                setCarrousselIndex(carrousselIndex + 1);
                if (carrousselIndex === 5)
                    return (setCarrousselControl(0), setCarrousselIndex(0));
            }
        };
        const intervalCarroussel = setInterval(scrollCarrousselPeople, 4500);

        return (() =>
            clearInterval(intervalCarroussel)
        );
    }, [carrousselControl, carrousselIndex]);

    return (
        <div className="peoplecarrousselhmpg">
            <div className="ctnttlcarrousselhmpg">
                <img
                    alt=""
                    src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/staryellowsvg.svg"
                />
                <h4>Ils nous ont fait confiance!</h4>
            </div>
            <div className="ctncrslhmpgscroll">
            { PERSONNES_HISTOIRES_HOMEPAGE.map((person, idx) => (
                <div className="ctnpeoplehistorycntnt">
                    <div className="ctnpeoplenamehsitory">
                        <div className="ctnpersontitle">
                            <h4>{person.name}</h4>
                            <label>{person.age_and_profession}</label>
                        </div>
                        <span>{person.histoire}</span>
                    </div>
                    <img
                        alt=""
                        src={person.people_img}
                        className={`imgpersoncarroussel`}
                    />
                </div>
            ))}
            </div>
            <div className="ctncarrousselswitchershmpg">
                <div
                    onClick={() => switchCarroussel(0)}
                    className="ctnswitchcrsl"
                >
                    <img
                        alt=""
                        className="swtchcrsllefthmpg"
                        src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/lucideiconchevron.svg"
                    />
                </div>
                <div
                    onClick={() => switchCarroussel(1)}
                    className="ctnswitchcrsl"
                >
                    <img
                        alt=""
                        className="swtchcrslrighthmpg"
                        src="https://ptgtzkrlzagjqwcntumc.supabase.co/storage/v1/object/public/solution_papiers/icons/lucideiconchevron.svg"
                    />
                </div>
            </div>
        </div>
    );
};
