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
                alignItems: 'center',
                // background: 'rgba(0, 85, 164, .9);',
                // backdropFilter: 'blur(8px)'
            }}
            url="https://calendly.com/solutionpapiers/30min?month=2023-12"
        />
    );
};
