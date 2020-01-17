		const data = [{
			cat: 'library', name: 'D3', value: 20,
			icon: 'img/d3.svg',
			desc: `
				A JavaScript library for
				producing dynamic, interactive data visualizations in web browsers.
				It makes use of the widely implemented SVG, HTML5, and CSS standards.<br>
				This infographic you are viewing is made with D3.
			`
		}, {
			cat: 'library sub', name: 'Lodash', value: 30,
			icon: 'img/lodash.svg',
			desc: `
				Lodash is a JavaScript library which provides <strong>utility functions</strong> for
				common programming tasks using the functional programming paradigm.`
		}, {
			cat: 'library sub', name: 'Moment JS', value: 30,
			icon: 'img/momentjs.png',
			desc: `
				Handy and resourceful JavaScript library to parse, validate, manipulate, and display dates and times.
			`
		}, {
			cat: 'framework', name: 'ExpressJS', value: 60,
			icon: 'img/expressjs.png',
			desc: `
				Express.js, or simply Express, is a JavaScript framework designed for building web applications and APIs.
				It is the de facto server framework for Node.js.
			`
		}, {
			cat: 'framework', name: 'ReactJS', value: 20,
			icon: 'img/react.png',
			desc: `
				React (sometimes written React.js or ReactJS) is an open-source JavaScript framework maintained by Facebook for building user interfaces.
				React processes only user interface in applications and can be used in combination with other JavaScript libraries
				or frameworks such as Redux, Flux, Backbone...
			`
		}, {
			cat: 'tooling', name: 'Google Chrome & Devtool', value: 70,
			icon: 'img/chrome-devtools.svg',
			desc: `
				<strong>Web development tools (devtool)</strong> allow web developers to test and debug their code.
				At Nau, we use the one come with Google Chrome to debug our apps. It is one the the most powerful
				and sophisticated devtool available.
			`
		},   {
			cat: 'tooling', name: 'Visual Studio Code', value: 50,
			icon: 'img/vscode.png',
			desc: `
				Visual Studio Code is a cross-platform source code editor developed by Microsoft.
				It includes support for debugging, embedded Git control, syntax highlighting,
				intelligent code completion, snippets, and code refactoring. Its extensions eco system is
				growing quickly and it is becoming the best Front End editors out there.
			`
		}, {
			cat: 'tooling', name: 'Performance Tooling', value: 30,
			icon: 'Performance;Tooling',
			desc: `
				At Nau, web performance is our top priority when development web sites and applications.
				We're practicing code optimization and Front End delivery optimization from day 1.
				To measure the resuslts, we use several tools to audit and benchmark our applications,
				including (but not limit to): Chrome devtool timeline & audit, Google PageSpeed Insights, Web Page Test, Website Grader...
			`
		},   {
			cat: 'tooling', name: 'PostCSS', value: 30,
			icon: 'img/postcss.svg',
			desc: `
				PostCSS is a software development tool that uses JavaScript-based plugins to automate routine CSS operations.<br>
				We use PostCSS mainly for auto-vendor-prefixing, but very soon we'll use it for NextCSS compilation.
			`
		},   {
			cat: 'backend', name: 'MongoDB', value: 70,
			icon: 'img/mongodb.png',
			desc: `
				The de-facto Database solution for JavaScript and Node.js applications. It is a light weight,
				high performance NoSQL database and can be used for small and large websites.
			`
		}, {
			cat: 'backend', name: 'NodeJS', value: 100,
			icon: 'img/nodejs.svg',
			desc: `
				Node.js is a cross-platform JavaScript runtime environment.
				Node.js allows creation of high performance and high concurrency websites with smaller footprint compared to
				other server-side solution. Node.js ecosystem is growing very fast and is trusted by a lot of big companies who
				are adopting it to enhance current products as well as for new ones.
			`
		}, {
			cat: 'platform', name: 'Docker Platform', value: 10,
			icon: 'img/docker.svg',
			desc: `
				Docker is an open-source project that automates the deployment of applications inside software containers.
				At Nau, we're still learning this technology to later facilitate easy web app deployments.
			`
		}, {
			cat: 'language', name: 'HTML5 & CSS3', value: 100,
			icon: 'img/html5-css3.png',
			desc: `
				The languages of the Web Front End. At Nau, they are in our blood and with them we can build
				world-class websites with any kind of visual effects or designs requested.
			`
		}, {
			cat: 'language', name: 'JavaScript', value: 100,
			icon: 'img/javascript.png',
			desc: `
				JavaScript is the heart of modern Web front end development and essential element of any Single Page
				Applications. In Nau, we invest a good deal in training developers to have good control of this universal language
				and now caplable of developing full stack websites with only JavaScript.
			`
		}, {
			cat: 'language', name: 'CSS Next', value: 10,
			icon: 'img/cssnext.png',
			desc: `
				The CSS language specs of the future but with the help of PostCSS (like Babel for ES6),
				we can use CSS Next today.
			`
		}, {
			cat: 'language', name: 'GraphQL', value: 80,
			icon: 'img/graphql.svg',
			desc: `
				GraphQL is a data query language developed by Facebook publicly released in 2015.
				It provides an alternative to REST and ad-hoc webservice architectures. In combination
				with RelayJS, this combo help us reduce the time to develop web apps for weeks.
			`
		}, {
			cat: 'language', name: 'SASS (SCSS flavor)', value: 70,
			icon: 'img/sass.png',
			desc: `
				This is our main CSS preprocessor language helping us lay structured foundation to CSS as well
				as assisting on writing more convenient BEM anotations.
			`
		}, {
			cat: 'language', name: 'TypeScript 2', value: 30,
			icon: 'img/typescript.png',
			desc: `
				The strict-typing flavor of ECMAScript, always requires a compiler to compile to vanilla JavaScript
				but the type checking and other syntactical sugar are exceptional. Right now, we only use it for
				Angular 2 projects when needed.
			`
		}, {
			cat: 'workflow', name: 'BabelJS', value: 50,
			icon: 'img/babel.png',
			desc: `
				The de-facto tool to work with ECMAScript 6 and ReactJS nowadays.
			`
		}, {
			cat: 'workflow', name: 'ESLint', value: 20,
			icon: 'img/eslint.svg',
			desc: `
				The tool to check and validate JavaScript code when we develop and prevent potential issues with code.
			`
		}, {
			cat: 'workflow', name: 'GulpJS', value: 50,
			icon: 'img/gulp.png',
			desc: `
				GulpJS is a task automation tools written for Node.js. It is among the most popular
				Front End and Node project automation tools nowadays
			`
		}, {
			cat: 'workflow', name: 'Webpack', value: 30,
			icon: 'img/webpack.svg',
			desc: `
				A module bundler library that is becoming de-facto tool to use in ReactJS or SPA apps nowadays.
			`
		}, {
			cat: 'legacy', name: 'AngularJS 1', value: 10,
			icon: 'img/angular1.png',
			desc: `
				Angular 1. Deprecated
			`
		}, {
			cat: 'legacy', name: 'jQuery', value: 50,
			icon: 'img/jquery.png',
			desc: `
				Deprecated, because <a href='http://youmightnotneedjquery.com/' target='_blank'>youmightnotneedjquery.com</a>
			`
		}, {
			cat: 'legacy tooling', name: 'Browser Sync', value: 40,
			icon: 'Browser Sync',
			desc: `
				Web development server popular among gulp/grunt web apps. No deprecated and replaced by live-server
				or webpackDevServer.
			`
		}, {
			cat: 'legacy tooling', name: 'http-server', value: 20,
			icon: 'http-server',
			desc: `
				A quick test web server based on Node.js, deprecated and replaced by live-server.
			`
		}, ];