import { useState } from "react";

export default function SettingCard({ setIsSettingsOpen }) {
  const resetAllState = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="instruction-card">
      <button className="btn-close" onClick={() => setIsSettingsOpen(false)}>
        Close
      </button>
      <div>
        <h2>Settings</h2>
      </div>
      <div className="tasks">
        <div className="task">
          <p>
            Music <input type="radio"></input>
          </p>
        </div>
        <div className="task">
          <p> Leave Game (All progress will be lost)</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-door-open-fill"
              viewBox="0 0 16 16"
              className="star-icon"
              onClick={resetAllState}
            >
              <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15zM11 2h.5a.5.5 0 0 1 .5.5V15h-1zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}
