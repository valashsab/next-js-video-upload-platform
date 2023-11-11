import './globals.css';
import { Inter } from 'next/font/google';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Memento',
  description: 'Where memories can be relived.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {' '}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
