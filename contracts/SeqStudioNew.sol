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

    SampleFilesAvailable(deviceId, injectionId, status, fileIds, now);
  }
  function analyze(string _fileIds) {
    fileIds = _fileIds;

    TriggerAnalysis(fileIds, now);
  }

  function generateReport(string _deviceId) {

    deviceId = _deviceId;
    TriggerReportGeneration(deviceId, now);
  }
  function getFileIds() returns (string) {
    return fileIds;
  }

  event TriggerAnalysis(string fileIds, uint256 time);
  event TriggerReportGeneration(string deviceId, uint256 time);
  event SampleFilesAvailable(string deviceId, string injectionId, string status, string fileIds, uint256 time);
}
