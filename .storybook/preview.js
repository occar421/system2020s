import React from "react";
import "@system2020s/reset-style/index.css";

export const decorators = [
  (Story) => (
    // To ease specificity issue in demo, using deprecated tag
    <center style={{ textAlign: "unset" }}>
      <Story />
    </center>
  ),
];
