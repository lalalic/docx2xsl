var isWin = /^win/.test(process.platform);
var fopFile = "fop" + (isWin ? ".bat" : "");

var childProcess = require('child_process')

module.exports=function(xslFilePath){
    var childArgs = ["-fo",xslFilePath,"-pdf",xslFilePath+".pdf"]

    return new Promise(function(resolve, reject){
        childProcess.execFile(fopFile, childArgs, function(error, stdOut, stdErr){
            if(error){
                reject(error)
            } else{
                resolve(xslFilePath)
            }
        })
    })
}
