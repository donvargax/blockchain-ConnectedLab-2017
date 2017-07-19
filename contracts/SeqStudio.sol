pragma solidity ^0.4.8;

contract SeqStudio {

  event RunStart(address indexed starter, uint256 time);
  event SampleFilesAvailable(string deviceId, uint256 time);
  event TriggerAnalysis(string fileIds, uint256 time);
  event TriggerReportGeneration(string deviceId, uint256 time);

  function setSampleFileId() {
    SampleFilesAvailable("device1", now);
  }

  function analyze() {
    TriggerAnalysis("file1,file2", now);
  }

  function generateReport() {
    TriggerReportGeneration("device1", now);
  }

}
