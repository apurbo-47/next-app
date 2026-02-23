"use client";

import React from "react";

function Button() {
  return (
    <div>
      <button
        className="bg-green-900 hover:bg-white hover:text-green-900 rounded-lg px-4 py-2 mt-5"
        onClick={() => console.log("I have clicked here")}
      >
        Click Here
      </button>
    </div>
  );
}

export default Button;
