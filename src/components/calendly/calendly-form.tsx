'use client';

import { InlineWidget } from "react-calendly";

export default function Calendly({

}: {
    
})  {

    return (
        <InlineWidget
            styles={{
                minWidth: '100%',
                height: '750px',
                minHeight: '1000px',
                margin: '0 0 0 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            url="https://calendly.com/direction-jau/30min"
        />
    );
};
