import Link from 'next/link'
import Head from 'next/head'

export default function HomePage() { // use arrow functions smh my head (shut)
  return (
		<main>
		<Head>
			<title>Pana | Home</title>
		</Head>	
				<div className="topnav">
					<Link href="/login/login">
						<a class>Login</a>
					</Link>
				</div>
		</main>
	);
}

//export default HomePage;