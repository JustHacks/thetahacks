import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import firebase from "firebase";

import Header from "../components/header";
import Footer from "../components/footer";
import About from "../components/about";
import Hero from "../components/hero";
import WCard from "../components/wcard";

export default function HomePage() { // use arrow functions smh my head (shut) (you shut) (yo momma shut) (not you smh idot) (unless you wrote "shut") (perhaps I did)
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		setCurrentUser(firebase.auth().currentUser ? "yes" : "no");
		
		firebase.auth().onAuthStateChanged(() => {
			setCurrentUser(firebase.auth().currentUser ? "yes" : "no");
		});
	});

// show how u make it :think-pika:

	return (
		<main>
            <Head>
                <title>Pana | Home</title>
            </Head>
			<Header/>
			<Hero/>
			<WCard/>
            <About/>
            <nav>
                <Link href="/dashboard">
                    <a>
                        Dashboard
                    </a>
                </Link>
            </nav>
			
            <Footer/>
		</main>
	);
};

//export default HomePage;