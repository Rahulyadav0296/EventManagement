import React from "react";
import "./Events.css";

function Events({ result, handleEnable, handleDelete, handleEdit }) {
  return (
    <>
      {result.map((event, index) => (
        <div
          key={index}
          className={`event-item ${event.enabled ? "enabled" : ""}`}
        >
          <p className="event-title">{event.title}</p>
          <p className="event-date">{event.date}</p>
          <div className="event-actions">
            <button
              type="button"
              className="event-button"
              onClick={() => handleEnable(index)}
            >
              {event.enabled ? "Disable Reminder" : "Enable Reminder"}
            </button>
            <button
              type="button"
              className="event-button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            <button
              type="button"
              className="event-button"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Events;
