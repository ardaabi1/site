import Hero from '../components/Projects/Hero.jsx';
import Main from '../components/Projects/Main.jsx';
import Head from 'next/head';

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projeler | Ardaaa</title>
            </Head>
            <div className="w-full my-5">
                <Hero />
                <Main />
            </div>
        </>
    );
};