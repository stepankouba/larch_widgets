export default {
	data: [],
	version: '0.6.2',
	type: 'chart-line',
	description: 'fixed problem with transform data',
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
		}
	},
	general: {
		params: {
			owner: '{{text}}',
			repo: '{{text}}'
		}
	},
	transform: {
		template: [{
			key: 'Commits avg per week',
			area: true,
			values: ['$.*', {
				x: '$.week',
				y: '$..(*round)'
			}]
		}],
		methods: {
			round(value) {
				value = value[0];
				return [Math.round(value.total / value.days.length * 100) / 100];
			}
		}
	}
};