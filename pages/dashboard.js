import Link from 'next/link';
import Head from 'next/head';
import { charityRead, charityWrite, charitySearch } from '../lib/api.js';
import { useState, useEffect } from 'react';
import Footer from '../components/footer';
import firebase from "firebase";
import SearchBar from "../components/searchBar";
import styles from "../styles/dashboard.module.css";
import Header from "../components/header";
import { useRouter } from "next/router";

export default function HomePage() { // use arrow functions smh my head (shut) (you shut) (yo momma shut) (not you smh idot) (unless you wrote 'shut') (perhaps I did)
	const router = useRouter();
	const [charities, setCharities] = useState([]);

    useEffect(() => {
		firebase.auth().onAuthStateChanged(() => {
			if (!firebase.auth().currentUser) {
				router.push("/login");
			}
		});

      charitySearch({ name: '', tags: '' }).then((data) => { // kinda makes me regret server side filtering
            if (data.ok) {
                console.log(data.data);
                setCharities(data.data);
            }
        });
	}, []);

    return (
		<>
            <Head>
                <title>Pana | Dashboard</title>
            </Head>
			<div>	
				<nav>
					<Header doStuff={(res) => setCharities(res.data)}/>
					
					<div className={styles.why}>
						<h3>Donate to charities today, help out a cause,what may seem small to one person, could potentially change the life of another. Donate to a vast selection of charities with a variety of causes such as: LQBTQIA+, Suicide Prevention, Hospitals ad much more. Donate to a cause today!</h3>
						<Link href="/charity/new">
							<a className={styles.btn}>Create Fund</a>
						</Link>
					</div>
				</nav>

				<article>
					<ul className={styles.charities}>
					{
						charities.size == 0 ? 'Loading...' : charities.map(item => (
							<li>
								<Link href={`/charity/view/${item.id}`}>
									<h3>{item.name}</h3>
								</Link>
								<p>{item.desc.slice(0, 100)}</p>
								
								<ul className={styles.tags}>
									{item.tags.split(' ').map(tag => <li>{tag}</li>)}
								</ul>
                				<Link href={`/charity/view/${item.id}`}><a className="btn secondary-btn">Read More</a></Link>
							</li>
						))
						// Improve this later obviously
					}
					</ul>
				</article>
				<Footer />
			</div>
		</>
	);
}