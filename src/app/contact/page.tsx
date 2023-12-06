import Image from 'next/image';
import React from 'react';
import ContactForm from '@/components/contact/contact';

export default async function ContactFormServerAppRouter({

} : {

})  {
  // const res = await fetch('https://transcendance-avatars.s3.eu-west-3.amazonaws.com/POLITIQUE+DE+PROTECTION+DES+DONNE%CC%81ES+PERSONNELLES.docx')  
  // const chunks = [];
// @ts-ignore  
  // for await (const chunk of res.body) {
// @ts-ignore
  //   chunks.push(chunk);
  // }
  // @ts-ignore
  // const blob = new Blob([Buffer.concat(chunks).toString("utf8")], { type: res.headers.get('Content-Type') });
  // const file = new File([blob], "document.docx", { type: blob.type });
  // console.log(file);
  // console.log(JSON.stringify(file))
  // @ts-ignore
  // return (<ContactForm politics={JSON.stringify(file)}/>);
  return (<ContactForm />);
};
