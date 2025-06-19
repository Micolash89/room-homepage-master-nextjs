
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Room - Acerca de Nosotros | Muebles de Diseño Premium",
  description:
    "Conoce la historia de Room. Más de 30 años creando muebles excepcionales con artesanía de calidad y diseño atemporal.",
  icons: {
    icon: "/assents/images/shopping-bag-fill.png",
  },
};


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