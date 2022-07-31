import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto py-10">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
