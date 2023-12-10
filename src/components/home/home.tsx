'use client';

import React, { useRef, useState, useEffect } from 'react';
import { InlineWidget } from "react-calendly";
import { LINKS_SERVICES_HOMEPAGE } from "@/utils/constants/constant";

import '@/styles/home/home.css';

export default function Home({

}: {

    
})  {
    const [formContactUs, setFormContactUs] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {

    }, []);

    return (
        <main className="wraphomepg">
            
        </main>
    );
};
