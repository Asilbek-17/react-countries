import { useState, useEffect, useContext } from 'react';
import { DarckModeContext } from '../../Context/DarckModeContext';
import Card from '../Card/card';
import './hero.css';
// import { useContext } from 'react';
// import { DarckModeProvider } from '../../Context/DarckModeContext';
import { lang } from "../../lang/lang";
import { LanguageContext } from '../../Context/languageContext';


function Hero() {
	let [value, setValue] = useState({
		loading: true,
		data: [],
		isError: false,
	});

	let [inpValue, setInpValue] = useState('all');

	// const {theme, setTheme} = useContext(DarckModeProvider);
	let API = `https://restcountries.com/v3.1/${inpValue}`;

	useEffect(
		() =>
			fetch(API)
				.then((res) => res.json())
				.then((data) =>
					setValue({
						loading: false,
						data: data,
						isError: false,
					}),
				)
				.catch((err) =>
					setValue({
						loading: false,
						data: [],
						isError: true,
					}),
				),
		[API],
	);

	function inpGetValue(evt) {
		setInpValue('name/' + evt.target.value);
	}
	console.log(inpValue);

	const { theme } = useContext(DarckModeContext);

	const { til } = useContext(LanguageContext);



	return (
		<section className={'hero ' + theme}>
			<div className='container'>
				<form className='hero-form js-form' method='POST' autoComplete='off'>
					<input
						className='hero-inp me-auto'
						type='text'
						name='user_search'
						placeholder={lang[til].section.input}
						onChange={inpGetValue}
					/>
					<select className='hero-slct js-select'>
						<option className='hero-opt' value='All' selected>
							{lang[til].section.select}
						</option>
						<option className='hero-opt' value='africa'>
							Africa
						</option>
						<option className='hero-opt' value='america'>
							America
						</option>
						<option className='hero-opt' value='asia'>
							Asia
						</option>
						<option className='hero-opt' value='europe'>
							Europe
						</option>
						<option className='hero-opt' value='oceania'>
							Oceania
						</option>
						<option className='hero-opt' value='antarctic'>
							Antarctic
						</option>
					</select>
				</form>
				{value.loading && <h3 className='text-center'>Loading...</h3>}
				{value.isError && <h3 className='text-center'>Error!!!</h3>}
				{value.data.length !== 0 && (
					<ul className='hero-list'>
						{value.data.map((item) => {
							return (
								<Card
									key={item.id + item.ccn3}
									img={item.flags.svg}
									name={item.name.common}
									population={item.population}
									capital={item.capital}
									region={item.region}
								/>
							);
						})}
					</ul>
				)}
			</div>
		</section>
	);
}

export default Hero;
