export default {
	data: [],
	version: '0.4.0',
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
		}
	},
	general: {
		params: {
			owner: '{{text}}',
			repo: '{{text}}'
		}
	},
	// transform: {
	// 	template: [
	// 		{
	// 			key: 'Sunday',
	// 			values: ['$..[?(@[0] == 0)]', {
	// 				x: '$.[1]',
	// 				y: '$.[0]',
	// 				value: '$.[2](*value)',
	// 				shape: 'circle'
	// 			}]
	// 		},
	// 		{
	// 			key: 'Monday',
	// 			values: ['$..[?(@[0] == 1)]', {
	// 				x: '$.[1]',
	// 				y: '$.[0]',
	// 				value: '$.[2](*value)',
	// 				shape: 'circle'
	// 			}]
	// 		},
	// 		{
	// 			key: 'Tuesday',
	// 			values: ['$..[?(@[0] == 2)]', {
	// 				x: '$.[1]',
	// 				y: '$.[0]',
	// 				value: '$.[2](*value)',
	// 				shape: 'circle'
	// 			}]
	// 		},
	// 		{
	// 			key: 'Wednesday',
	// 			values: ['$..[?(@[0] == 3)]', {
	// 				x: '$.[1]',
	// 				y: '$.[0]',
	// 				value: '$.[2](*value)',
	// 				shape: 'circle'
	// 			}]
	// 		},
	// 		{
	// 			key: 'Thursday',
	// 			values: ['$..[?(@[0] == 4)]', {
	// 				x: '$.[1]',
	// 				y: '$.[0]',
	// 				value: '$.[2](*value)',
	// 				shape: 'circle'
	// 			}]
	// 		},
	// 		{
	// 			key: 'Friday',
	// 			values: ['$..[?(@[0] == 5)]', {
	// 				x: '$.[1]',
	// 				y: '$.[0]',
	// 				value: '$.[2](*value)',
	// 				shape: 'circle'
	// 			}]
	// 		},
	// 		{
	// 			key: 'Saturday',
	// 			values: ['$..[?(@[0] == 6)]', {
	// 				x: '$.[1]',
	// 				y: '$.[0]',
	// 				value: '$.[2](*value)',
	// 				shape: 'circle'
	// 			}]
	// 		}
	// 	],
	// 	methods: {
	// 		value(value) {
	// 			value = value[0];
	// 			return [Math.round(value / 250 * 100)];
	// 		}
	// 	}
	// }
};