import Image from 'next/image';
import React from 'react';
import Home from '@/components/home/home';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Solution Papiers',
	description: 'Powered by ESO Automation'
};

export default function HomeServerAppRouter({

} : {

})  {

  return (<Home />);
};
