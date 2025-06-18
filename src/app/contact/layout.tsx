
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata :Metadata = {
  title: 'Room - Contacto | Muebles de Diseño Premium',
  description: 'Envíanos tus preguntas, comentarios o sugerencias. Nuestro equipo se pondrá en contacto contigo lo antes posible.',
  icons: {
    icon: '/assents/images/shopping-bag-fill.png',
  }
}

interface ContactLayoutProps {
  children: ReactNode;
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return (
    <section className="">
      <div className="">
        {children}
      </div>
    </section>
  );
}