'use client';

import React, { FormEvent, useRef, useState, useEffect } from 'react';
import {
    DROPDOWN_CONTACT_US,
    EMAIL_VALIDATOR,
    PHONE_VALIDATOR
} from '@/utils/constants/constant';
import ContactForm from '@/components/contact/contact-form';

import '@/styles/contact/nous-contacter.css';

// import '@/styles/contact/contact.css';

export default function NousContacter({

}: {

})  {
    return (
        <main className="ctncntctpgwrp">
            <div className="wrpcontactform">
                <div className="ctncontactformpg">
                    <ContactForm
                        className={''}
                    />
                </div>
            </div>
        </main>
    );
};
