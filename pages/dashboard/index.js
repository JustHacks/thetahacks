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
            max-h-10
            mt-1
            `
            }>
                <Link href="/login">
                    <a 
                        className={
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
                    }>
                        Login
                    </a>
                </Link>
                <input 
                    type="text" 
                    placeholder="Search..."
                    className={
                    `
                    p-2 m-1
                    placeholder-gray-400 
                    rounded-md 
                    border border-gray-200 focus:outline-none focus:ring focus:border-blue-300 focus:border-1
					transition duration-800 ease-out
                    flex
                    items-center
                    ` 
                }/>
                <button 
                    className={
                    `
                    rounded-md
                    bg-green-400 text-white 
                    hover:bg-white hover:text-green-400 
                    focus:bg-white focus:text-green-400
                    border-2 border-transparent
                    hover:border-green-400
                    box-border
                    p-2 m-1
                    focus:outline-none focus:ring focus:border-blue-300
					transition duration-800
                    flex
                    items-center
                    `
                }>
                    Create Fund
                </button>
            </nav>
		</main>
	);
}

//export default HomePage;