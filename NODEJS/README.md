# SET UP SERVER / DEPENDENCIES

```
npm init		(initiate project, creates packages.json)
```


npm istall		(installs all packages listen in packages.json)
npm install ... 	(install dependencies Adds to packages.json)
npm install -g ... 	(install dependencies globally And to packages.json)

npm install -D ... 	(install DEV dependency, also installs dependencies and their dependencies)

node			(go into javascript console)
ctrl+C			(exit js console)


Packages : 
	nodemon 	(auto restart server on changes)



# IMPORT REQUIRE

Make one file with an object
______________________________ persons.js
const person = {
	name: 'john',
	ages: 30
};

module.exports = person


require file and use object in other file.
___________________________________________ index.js
const person = require('./person');
console.log(person);


# OBJECT CONSTRUCTOR
class Layer {
	constructor(name,age){
		this.name = name;
		this.age  = age;
	}

	greeting(){
		console.log('my name is ${this.name} and i am ${this.age}');
	}
}

# WORK WITH PATHNAMES
## Full Path + filename
__filename
> path/directory/filename.js

## Base Filename
path.basename(__filename)
> filename.js

## File Extention
path.extname(__filename)
> .js

## Directory Path
__dirname
> path/directory

## Directory name
path.dirname(__filename)
> directory

## Object with all info
path.parse(__filename)
> {
root: '/',
dir: 'path/directory',
base: 'filename.js',
ext: '.js',
name: 'filename'
}
// Part of the object
path.parse(__filename).base
> filename.js

## Create a path  			(Avoid / \ windows / \ problems)
path.join(__dirname,'test','test.js')
> path/dirname/test/test.js


# FileSystem
const fs = require('fs');
const path = require('path');

## Create Folder
fs.mkdir(path.join(__dirname,'/test'),{}, function(err){
	if (err) throw err;
		console.log('Folder created');
});

## Write File (ASYNC)
fs.writefile(path.join(__dirname,'/test','hello.txt'),'Hello World!', function(err){
	if (err) throw err;
		console.log('File OverWritten');

	//Append File (ASYNC)
	fs.appendfile(path.join(__dirname,'/test','hello.txt'),'Add stuff!', function(err){
		if (err) throw err;
			console.log('File Appended');
	});

});

## Append File (ASYNC)
fs.appendfile(path.join(__dirname,'/test','hello.txt'),'Add stuff!', function(err){
	if (err) throw err;
		console.log('File Appended');
});

## Read File
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8', function(err,data){
	if (err) throw err;
		console.log(data);
});

## Rename File
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','renamedfile.txt'), function(err,data){
	if (err) throw err;
		console.log('file renamed');
});















