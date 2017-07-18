pragma solidity ^0.4.8;

contract SeqStudio {

    string deviceId;
    string injectionId;
    string status;
    string fileIds;

    event SampleFilesAvailable(string deviceId, string injectionId, string status, string fileIds);

    function setSampleFileId(string _deviceId, string _status, string _injectionId, string _fileIds) {
        deviceId = _deviceId;
        status = _status;
        injectionId = _injectionId;
        fileIds = _fileIds;

        SampleFilesAvailable(deviceId, injectionId, status, fileIds);
    }

    function getFileIds() returns (string) {
        return fileIds;
    }

}
