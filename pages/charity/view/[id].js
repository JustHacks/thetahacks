import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import Header from '../../../components/header.js';
import CharityView from "../../../components/charityView.js";

const CharityViewPage = () => {
	const { id } = useRouter().query;
    
	return (
		<>
			<Head>
				<title>Pana | { id }</title>
			</Head>
			<Header />
			<CharityView id={id}/>
		</>
	);
};

export default CharityViewPage;