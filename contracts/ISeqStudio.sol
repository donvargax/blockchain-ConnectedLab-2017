pragma solidity ^0.4.8;

contract ISeqStudio {
  function setSampleFileId(string _deviceId, string _status, string _injectionId, string _fileIds);
  function analyze(string _fileIds);
  function generateReport(string _deviceId);
  function getFileIds() returns (string);

  event TriggerAnalysis(string fileIds);
  event TriggerReportGeneration(string deviceId);
  event SampleFilesAvailable(string deviceId, string injectionId, string status, string fileIds);
}
