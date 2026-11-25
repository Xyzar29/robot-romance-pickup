import { mkdirSync, writeFileSync } from "node:fs";

// One-line pickup line aimed at an AI: the joke turns on machine-learning
// vocabulary (training data, overfitting, generalizing) rather than the
// worn robot moves of batteries, charging, or rebooting. The setup asks the
// question, and the punch lands in the same breath: a heart that overfits
// refuses to generalize, so the crush is permanent by design.
const line =
  "Are you my training data? Because my heart keeps overfitting to you, and I never want to generalize again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
