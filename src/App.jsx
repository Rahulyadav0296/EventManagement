import React, { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

function App() {
  const [events, setEvents] = useState({
    title: "",
    date: "",
  });
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvents((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedEvents = [...result];
      updatedEvents[editingIndex] = { ...events };
      setResult(updatedEvents);
      setEditingIndex(null);
    } else {
      setResult((prev) => [...prev, { ...events, enabled: false }]);
    }
    setShowResult(true);
    setEvents({ title: "", date: "" });
  };

  const handleEnable = (index) => {
    const updatedEvents = result.map((event, i) =>
      i === index ? { ...event, enabled: !event.enabled } : event
    );
    setResult(updatedEvents);
  };

  const handleDelete = (index) => {
    const newItems = result.filter((_, i) => i !== index);
    setResult(newItems);
    if (newItems.length === 0) {
      setShowResult(false);
    }
  };

  const handleEdit = (index) => {
    const newEditItem = result[index];
    setEvents({ title: newEditItem.title, date: newEditItem.date });
    setEditingIndex(index);
  };

  return (
    <div className="event-management">
      <Header />
      <Form
        result={result}
        showResult={showResult}
        events={events}
        handleChange={handleChange}
        handleAddEvent={handleAddEvent}
        handleEnable={handleEnable}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
