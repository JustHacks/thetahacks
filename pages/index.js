import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() { // use arrow functions smh my head (shut) (you shut) (yo momma shut) (not you smh idot) (unless you wrote 'shut') (perhaps I did)
  return (
		<main>
            <Head>
                <title>Pana | Home</title>
            </Head>	
            <nav className={
            `
            flex
            `
            }>
                <Link href="/dashboard">
                    <a 
                        /*className={
                        `
                        rounded-md
                        bg-whit text-green-400 
                        hover:bg-green-400 hover:text-white
                        focus:bg-green-400 focus:text-white
                        border-2 border-green-400
                        box-border
                        p-2 m-1
                        focus:outline-none focus:ring focus:border-blue-300
						transition duration-800 ease-out
                        flex
                        items-center
                        `
												}*/>
                        Dashboard
                    </a>
                </Link>
            </nav>
		</main>
	);
}

//export default HomePage;