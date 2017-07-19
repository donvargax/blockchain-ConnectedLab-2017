pragma solidity ^0.4.8;

contract SeqStudio {

  event RunStart(address indexed starter, uint256 time);
  event SampleFilesAvailable(address indexed starter, uint256 time);
  event TriggerAnalysis(string fileIds, uint256 time);
  event TriggerReportGeneration(string deviceId, uint256 time);

  function setSampleFileId() {
    SampleFilesAvailable(msg.sender, now);
  }

  function analyze() {
    TriggerAnalysis("device1", now);
  }

  function generateReport() {
    TriggerReportGeneration("device1", now);
  }

}
