var azure = require('azure-storage');
const storageConnectionString = process.env["storageConnectionString"];
const containerName = "leddevicecontainer";

module.exports = {
    storeMessage: function (message) {
        createContainerIfNotExists();
        uploadMessage(getBlobPath(message), message);
    }
}

function getBlobPath(msg)
{
    var now = new Date();        
    const del = "/";
    var datepath = now.getFullYear() + del + now.getMonth() + del + now.getDay() + del + 
        now.getHours() + del + now.getMinutes() + del + now.getSeconds();
    return datepath;
}

function uploadMessage(blobPath, msg) {
    var blobService = azure.createBlobService(storageConnectionString);

    blobService.createBlockBlobFromText(containerName, blobPath, msg, function (error, result, response) {
        if (!error) {
            // blob uploaded
            console.log("blob is uploaded to " + blobPath);
        }
        else{
            console.log(error);            
        }
    });
}

function createContainerIfNotExists() {
    var blobService = azure.createBlobService(storageConnectionString);

    blobService.createContainerIfNotExists(containerName, {
        publicAccessLevel: 'blob'
    }, function (error, result, response) {
        if (!error) {
            // if result = true, container was created.
            // if result = false, container already existed.
            console.log("container is good");
        }
        else{
            console.log(error);
        }
    });
}