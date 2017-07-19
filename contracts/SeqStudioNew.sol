pragma solidity ^0.4.8;

contract SeqStudioNew {

  string deviceId;
  string injectionId;
  string status;
  string fileIds;

  function setSampleFileId(string _deviceId, string _status, string _injectionId, string _fileIds) {
    deviceId = _deviceId;
    status = _status;
    injectionId = _injectionId;
    fileIds = _fileIds;

    SampleFilesAvailable(deviceId, injectionId, status, fileIds);
  }
  function analyze(string _fileIds) {
    fileIds = _fileIds;

    TriggerAnalysis(fileIds);
  }

  function generateReport(string _deviceId) {

    deviceId = _deviceId;
    TriggerReportGeneration(deviceId);
  }
  function getFileIds() returns (string) {
    return fileIds;
  }

  event TriggerAnalysis(string fileIds);
  event TriggerReportGeneration(string deviceId);
  event SampleFilesAvailable(string deviceId, string injectionId, string status, string fileIds);
}
