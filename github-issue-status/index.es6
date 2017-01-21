export default {
	data: [],
	version: '0.5.1',
	type: 'pie-chart',
	description: 'Simple pie chart displaying milestone',
	source: {
		name: 'lo-github',
		url: 'https://api.github.com'
	},
	server: {
		requests: [
			{
				path: '/repos/{settings.owner}/{settings.repo}/milestones',
				method: 'get'
			},
			{
				path: {
					filterResponse: `$..[?(@.title === "{settings.milestone}")]`,
					url: '{filtered.url}'
				},
				method: 'get'
			}
		]
	},
	assets: {
		readme: 'this is readme file',
		screenshots: [''],
		template: ''
	},
	client: {
		display: {
			height: 150,
			width: 200
		}
	},
	general: {
		params: {
			owner: '{{text}}',
			repo: '{{text}}',
			milestone: '{{text}}'
		}
	},
	transform: {
		template: [
			{
				key: 'opened',
				value: '$.open_issues'
			},
			{
				key: 'closed',
				value: '$.closed_issues'
			}
		]
	}
};