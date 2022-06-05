/** @format */

var fs = require('fs');
var path = require('path');
var topic = 'Museum';
var dir = `/Users/xiaodongliu/Documents/project-acron/acornus/src/assets/wordCardImage/${topic}`;

let exportFile = `const ${topic} = [`;
// read directory
const fileNameList = [];
fs.readdir(dir, (error, fileNames) => {
	if (error) throw error;

	fileNames.forEach((filename) => {
		const name = path.parse(filename).name;
		if (name !== '.DS_Store') {
			const filepath = path.resolve(dir, filename);
			const fileArray = filepath.split('/');
			fileNameList.push("'" + fileArray[fileArray.length - 1] + "'");
		}
	});
	exportFile += fileNameList.toString();
	exportFile += '];';
	exportFile += '\n';
	exportFile += `export default ${topic}`;

	fs.writeFile(
		`/Users/xiaodongliu/Documents/project-acron/acornus/src/assets/wordCardList/${topic}.js`,
		exportFile,
		function (err) {
			if (err) {
				return console.log(err);
			}
		}
	);
});
