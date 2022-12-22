import { useState, useEffect, useContext } from 'react';
import { DarckModeContext } from '../../Context/DarckModeContext';
import Card from '../Card/card';
import './hero.css';
// import { useContext } from 'react';
// import { DarckModeProvider } from '../../Context/DarckModeContext';
import { lang } from '../../lang/lang';
import { LanguageContext } from '../../Context/languageContext';

function Hero() {
	let [value, setValue] = useState({
		loading: true,
		data: [],
		isError: false,
	});
	let [inpValue, setInpValue] = useState('all');
	let [select, setSelect] = useState('all');

	let API = `https://restcountries.com/v3.1/${inpValue}`;

	useEffect(() => {
		(async () => {
			const res = await fetch(API);
			const data = setValue({
				loading: false,
				data: await res.json(),
				isError: false,
			});
		})();
	}, [API]);

	function formSubmit(evt) {
		evt.preventDefault();
	}
	const { theme } = useContext(DarckModeContext);

	const { til } = useContext(LanguageContext);

	return (
		<>
			<section className={'hero ' + theme}>
				<div className='container'>
					<form
						className='hero-form js-form'
						method='POST'
						autoComplete='off'
						onSubmit={formSubmit}
					>
						<input
							className='hero-inp me-auto'
							type='text'
							name='user_search'
							placeholder={lang[til].section.input}
							onKeyDown={(evt) => {
								if (evt.code === 'Enter') {
									setInpValue('name/' + evt.target.value);
								}
							}}
						/>
						<select
							className='hero-slct js-select'
							onChange={(evt) => {
								setSelect('region/' + evt.target.value);
							}}
						>
							<option className='hero-opt' value='all' selected>
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
		</>
	);
}
export default Hero;
