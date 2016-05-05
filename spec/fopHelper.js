var isWin = /^win/.test(process.platform);
var fopFile = "fop" + (isWin ? ".bat" : "");

var childProcess = require('child_process')

function fop(xslFilePath){
    var childArgs = ["-fo",xslFilePath,"-pdf",xslFilePath+".pdf"]

    return new Promise(function(resolve, reject){
        childProcess.execFile(fopFile, childArgs, function(error, stdOut, stdErr){
			if(error){
                reject(error)
            }else if(stdErr.includes("SEVERE: Exception")){
				reject(stdErr)
			} else{
                resolve(xslFilePath+".pdf")
            }
        })
    })
}

fop.fromContent=function(content){
    var fileName=`${__dirname}/temp/test.fo`
    require("fs").writeFileSync(fileName,content,"utf8")

    return fop(fileName)
}

module.exports=fop
