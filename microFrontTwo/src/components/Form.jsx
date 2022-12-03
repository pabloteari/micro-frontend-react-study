import React, { useState } from "react";
export const Form = () => {
    return (
      <div style={{backgroundColor: "yellow", padding: 10, borderRadius: 5}}>
        <h3>Micro-front 2</h3>
        <form>
          <label>Enter your name:
            <input type="text" />
          </label>
        </form>
      </div>
    );
}