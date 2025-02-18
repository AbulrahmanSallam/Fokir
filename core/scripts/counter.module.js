import { CountUp } from "./countUp.min.js";

export class Counter {
  constructor(targetVals, sectionId, counterIds) {
    // Initialize properties
    this.targetVals = targetVals;
    this.section = document.getElementById(sectionId);
    this.counterElements = counterIds.map((id) => document.getElementById(id));

    // Initialize counters
    this.initCounters();
  }

  // Initialize counters
  initCounters() {
    this.counterElements.forEach((element, index) => {
      this.startCounter(element, this.targetVals[index]);
    });
  }

  // Start the counter animation
  startCounter(element, targetVal) {
    const options = {
      duration: 3,
      useEasing: true,
      useGrouping: false,
      enableScrollSpy: true,
    };

    const countUp = new CountUp(element, targetVal, options);
    countUp.start();
  }
}
