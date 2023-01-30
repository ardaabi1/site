import Head from 'next/head';

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 | Ardaaa</title>
            </Head>
            <h1 className="text-5xl text-white font-bold text-center mt-20">404</h1>
            <p className="text-gray-400 text-center mb-20 text-lg">Bu sayfa bulunamadı.</p>
        </>
    );
};