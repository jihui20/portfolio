import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'NanumBarunGothic';
		font-style: normal;
		font-weight: 100;
		src: url('../fonts/NanumBarunGothicUltraLight.ttf'),
			/* IE6-IE8 */ url('../fonts/NanumBarunGothicUltraLight.woff2') format('woff2'),
			/* Modern Browsers */ url('../fonts/NanumBarunGothicUltraLight.woff') format('woff'),
			/* Modern Browsers / url('../fonts/NanumBarunGothicUltraLight.ttf') format('truetype'); / Safari, Android, iOS */
	}

	@font-face {
		font-family: 'NanumBarunGothic';
		font-style: normal;
		font-weight: 300;
		src: url('../fonts/NanumBarunGothicLight.ttf'),
			/* IE6-IE8 */ url('../fonts/NanumBarunGothicLight.woff2') format('woff2'),
			/* Modern Browsers */ url('../fonts/NanumBarunGothicLight.woff') format('woff'),
			/* Modern Browsers / url('../fonts/NanumBarunGothicLight.ttf') format('truetype'); / Safari, Android, iOS */
	}

	@font-face {
		font-family: 'NanumBarunGothic';
		font-style: normal;
		font-weight: 500;
		src: url('../fonts/NanumBarunGothic.ttf'),
			/* IE6-IE8 */ url('../fonts/NanumBarunGothic.woff2') format('woff2'),
			/* Modern Browsers */ url('../fonts/NanumBarunGothic.woff') format('woff'),
			/* Modern Browsers */ url('../fonts/NanumBarunGothic.ttf')
				format('truetype'); /* Safari, Android, iOS */
	}

	@font-face {
		font-family: 'NanumBarunGothic';
		font-style: normal;
		font-weight: 800;
		src: url('../fonts/NanumBarunGothicBold.ttf'),
			/* IE6-IE8 */ url('../fonts/NanumBarunGothicBold.woff2') format('woff2'),
			/* Modern Browsers */ url('../fonts/NanumBarunGothicBold.woff') format('woff'),
			/* Modern Browsers */ url('../fonts/NanumBarunGothicBold.ttf')
				format('truetype'); /* Safari, Android, iOS */
	}

	html,
	body {
		margin: 0;
		padding: 0;
		font: normal normal 10px/1.2 'NanumBarunGothic', sans-serif;
	}
	html,
	body,
	div,
	span,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	abbr,
	address,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	samp,
	small,
	strong,
	sub,
	sup,
	var,
	b,
	i,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section,
	summary,
	time,
	mark,
	audio,
	video,
	textarea,
	button,
	select,
	input,
	pre {
		margin: 0;
		padding: 0;
	}
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	hr {
		display: none;
	}
	select {
		outline: none;
	}
	p,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	form {
		list-style-image: none;
		list-style-position: outside;
		list-style-type: none;
		border: 0px;
	}
	img,
	fieldset,
	iframe {
		border: 0 none;
	}
	button {
		border: 0 none;
		background-color: transparent;
		cursor: pointer;
	}
	address,
	caption,
	cite,
	code,
	dfn,
	em,
	var {
		font-style: normal;
		font-weight: normal;
	}
	a {
		text-decoration: none;
	}

	button,
	input,
	select,
	table,
	textarea {
		font-family: 'NanumBarunGothic', sans-serif;
	}
`;
export default GlobalStyle;