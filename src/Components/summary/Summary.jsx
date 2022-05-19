import React from "react";

export default function summary({ summary }) {
  return (
    <div className="mx-2 summary-wrapper">
      <p>{summary}</p>
    </div>
  );
}
