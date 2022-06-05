/** @format */
module.exports = {
	presets: ['other-presets', 'mobx'],

	plugins: [
		[
			'@babel/plugin-proposal-decorators',
			{
				legacy: true,
			},
		],
	],
};
