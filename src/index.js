import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { DarckModeProvider } from './Context/DarckModeContext';
import { LanguageProvider } from './Context/languageContext';
import './index.css';

const root = ReactDom.createRoot(document.querySelector('#root'));

root.render(
	<DarckModeProvider>
		<LanguageProvider>
			<App />
		</LanguageProvider>
	</DarckModeProvider>,
);
