import Head from "next/head";
import { Header, Body, Footer } from "@@components";

export default function Home() {
	return (
		<div className="flex flex-col justify-center h-screen">
			<Head>
				<title>Google</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<Header />

			{/* Body */}
			<Body />

			{/* Footer */}
			<Footer />
		</div>
	);
}
