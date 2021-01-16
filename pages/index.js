import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function HomePage() { // use arrow functions smh my head (shut) (you shut) (yo momma shut) (not you smh idot) (unless you wrote 'shut') (perhaps I did)
  return (
		<main>
            <Head>
                <title>Pana | Home</title>
            </Head>	
            <nav>
                <Link href="/dashboard">
                    <a>
                        Dashboard
                    </a>
                </Link>
            </nav>
		</main>
	);
};

//export default HomePage;