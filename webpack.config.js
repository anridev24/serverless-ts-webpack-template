/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
	externals: ["aws-sdk", "chrome-aws-lambda"],
	mode: slsw.lib.webpack.isLocal ? "development" : "production",
	entry: slsw.lib.entries,
	stats: "summary",
	resolve: {
		extensions: [".ts", ".js", ".type.ts"],
	},
	target: "node",
	module: {
		rules: [
			{
				test: /\.(ts?)$/,
				loader: "ts-loader",
				options: { transpileOnly: true },
				exclude: [
					[
						path.resolve(__dirname, "node_modules"),
						path.resolve(__dirname, ".serverless"),
						path.resolve(__dirname, ".webpack"),
					],
				],
			},
		],
	},
};
