const widget = {
	data: [],
	version: '0.5.0',
	type: 'chart-line',
	description: 'this is updated description',
	source: {
		name: 'lo-github',
		url: 'https://api.github.com'
	},
	server: {
		requests: {
			path: '/repos/{settings.owner}/{settings.repo}/stats/commit_activity',
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