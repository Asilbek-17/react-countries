import React, { useContext, useState } from 'react';
import { DarckModeContext } from '../../Context/DarckModeContext';
import './card.css';
import { lang } from "../../lang/lang";
import { LanguageContext } from '../../Context/languageContext';


function Card({img, name, population, region, capital}) {
	const { theme } = useContext(DarckModeContext);
	const { til } = useContext(LanguageContext);


	return (
		<li className={' hero-item d-flex flex-column justify-content-between ' +  theme}>
			<img
				className='item-img'
				src={img}
				width='280'
				height='180'
				alt='Germany Flag'
			/>
			<h2 className='hero-title'>{name}</h2>
			<p className='hero-text'>
				{lang[til].card.title}: <span className='hero-span'>{population}</span>
			</p>
			<p className='hero-text'>
			{lang[til].card.region}: <span className='hero-span1'>{region}</span>
			</p>
			<p className='hero-text mb-4'>
			{lang[til].card.capital}: <span className='hero-span2'>{capital}</span>
			</p>
			<button
				className='js-btn btn btn-outline-info'
				type='button'
				data-bs-toggle='modal'
				data-bs-target='#exampleModal'
				data-id='tt7026230'
			>
				{lang[til].card.button}
			</button>
		</li>
	);
}

export default Card;
