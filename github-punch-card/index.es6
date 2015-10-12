const widget = {
	data: [],
	version: '0.3.1',
	type: 'punch-card',
	description: 'this is new punch-card chart',
	source: {
		name: 'lo-github',
		url: 'https://api.github.com'
	},
	server: {
		requests: {
			path: '/repos/{settings.owner}/{settings.repo}/stats/punch_card',
			method: 'get'
		}
	},
	assets: {
		readme: 'this is readme file',
		screenshots: [''],
		template: ''
	},
	client: {
		display: {
			height: 200,
			width: 700
		},
		modal: {
			size: 'large'
		}
	},
	general: {
		params: {
			owner: '{{text}}',
			repo: '{{text}}'
		}
	}
};