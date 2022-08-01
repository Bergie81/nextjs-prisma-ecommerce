import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Navbar from './../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className="py-10">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
