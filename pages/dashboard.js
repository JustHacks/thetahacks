import Link from 'next/link';
import Head from 'next/head';
import { charityRead, charityWrite, charitySearch } from '../lib/api.js';
import { useState } from 'react';
import Footer from '../components/footer';

export default function HomePage() { // use arrow functions smh my head (shut) (you shut) (yo momma shut) (not you smh idot) (unless you wrote 'shut') (perhaps I did)

    const [charities, setCharities] = useState([]);

    charitySearch({ name: '', tags: '' }).then(({ data }) => { // kinda makes me regret server side filtering
        setCharities(data);
    });

    return (
			<div>
            <Head>
                <title>Pana | Dashboard</title>
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
					<Footer/>
		</div>
	);
}

//export default HomePage;