import './globals.css';
import { Open_Sans, Shadows_Into_Light } from 'next/font/google';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const openSans = Open_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});
const shadowsIntoLight = Shadows_Into_Light({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-shadows-into-light',
});

export const metadata = {
  title: 'Memento',
  description: 'Where memories can be relived.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${shadowsIntoLight.variable}`}>
        {' '}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
