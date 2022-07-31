import Head from 'next/head';

export default function Home(props: HomeProps) {
  return (
    <div>
      <Head>
        <title>Next.js Prisma Ecommerce</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <h1 className="text-6xl">Next.js Prisma Ecommerce</h1>
      </div>
    </div>
  );
}
