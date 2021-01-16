import Link from 'next/link';
import Head from 'next/head';
import { charityRead, charityWrite, charitySearch } from '../lib/api.js';
import { useState } from 'react';

export default function HomePage() { // use arrow functions smh my head (shut) (you shut) (yo momma shut) (not you smh idot) (unless you wrote 'shut') (perhaps I did)

    const [charities, setCharities] = useState([]);

    charitySearch('', '').then(data => { // kinda makes me regret server side filtering
        setCharities(data);
    });

    return (
		<main>
            <Head>
                <title>Pana | Home</title>
            </Head>	
            <nav>
                <Link href="/login">
                    <a>Login</a>
                </Link>
                <input type="text" placeholder="Search..." />
                <button>Create Fund</button>
            </nav>
            <article>
                <ul>
                {
                    charities.size == 0 ? 'Loading...' : charities.map(item => {
                        <li>
                            {item.name}
                        </li>
                    })
                    // Improve this later obviously
                }
                </ul>
            </article>
		</main>
	);
}

//export default HomePage;