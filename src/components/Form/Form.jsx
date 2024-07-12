import React from "react";
import Events from "../Events/Events";
import "./Form.css";

function Form({
  result,
  events,
  showResult,
  handleChange,
  handleAddEvent,
  handleEnable,
  handleDelete,
  handleEdit,
}) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={events.title}
          onChange={handleChange}
          placeholder="Enter the Event name please.."
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date: </label>
        <input
          type="date"
          id="date"
          name="date"
          value={events.date}
          onChange={handleChange}
          placeholder="Select the Date of Events..."
          className="form-input"
        />
      </div>
      <button
        type="button"
        onClick={handleAddEvent}
        className="add-event-button"
      >
        Add Event
      </button>
      {/* Event result with enable reminder, delete and edit  */}
      {showResult ? (
        <Events
          result={result}
          handleEnable={handleEnable}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <p>Please Add Some Events...</p>
      )}
    </form>
  );
}

export default Form;
