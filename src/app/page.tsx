
import Main from "@/components/Main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Room - Inicio | Muebles de Diseño Premium',
  description: 'Bienvenido a Room. Descubre formas innovadoras de decorar tu hogar con nuestra colección de muebles premium. Calidad, comodidad y estilo únicos.',
  icons: {
    icon: '/assents/images/shopping-bag-fill.png',
  }
};

export default function Home() {
  return (
    <>
      <Main />
    </>
  );
}
