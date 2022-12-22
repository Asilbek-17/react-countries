import React, { useState } from 'react';
import './header.css';
import { useContext } from 'react';
import { DarckModeContext } from '../../Context/DarckModeContext';
import { lang } from '../../lang/lang';
import { LanguageContext } from '../../Context/languageContext';

function Header() {
	const { theme, setTheme } = useContext(DarckModeContext);
	const { til, setTil } = useContext(LanguageContext);

	return (
		<header className={theme}>
			<div className='container'>
				<div className='head-box'>
					<a className='head-link' href='./index.html'>
						{lang[til].header.logo}
					</a>
					<button
						className='head-btn ms-auto me-5'
						type='button'
						value={'Dark'}
						onClick={() => setTheme(theme === 'Light' ? 'Dark' : 'Light')}
					>
						{theme === 'Light' ? lang[til].header.light : lang[til].header.dark}{' '}
						{lang[til].header.button}
					</button>
					<select defaultValue={'en'} className='selection' aria-label='Default select example' onChange={(evt) => setTil(evt.target.value)}>
						<option value='en' selected>en</option>
						<option value='ru'>ru</option>
						<option value='uz'>uz</option>
					</select>
				</div>
			</div>
		</header>
	);
}

export default Header;
