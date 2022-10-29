// const { exec } = require('child_process');

module.exports.index = function(req, res) {
	res.sendFile(process.cwd() + '/public/html/index.html');
};


module.exports.postUpload = function(req, res) {
	console.log('go to postUpload');
	console.log('req = \n');
	console.log(req.filename);

	let cmd_autosub = 'cd public/uploads/ && autosub ' + 
	req.file.filename + 
	' -S en';
	console.log(cmd_autosub);
//*********write to file***********************************/
    var fs = require('fs');

	// var data = "New File Contents";

	fs.writeFileSync('script_call_api.sh', cmd_autosub, function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to File.");
	});
//********end of writing file to excute********************/
	require('child_process').execSync('chmod +x script_call_api.sh');
	var spawn = require('child_process').spawn;
	var proc = spawn('./script_call_api.sh');
	proc.stdout.on('data', function(data) {
	  process.stdout.write(data);
	});
	proc.stderr.on('data', function(data) {
	  process.stderr.write(data);
	});
	proc.on('close', function(code, signal) {
	  console.log('script closed');
	  
	var file = process.cwd() + 
	'/public/uploads/'+ 
	req.file.filename + '.srt';
	res.download(file); // Set disposition and send it.	  
	});
	// res.render('upload');
};







