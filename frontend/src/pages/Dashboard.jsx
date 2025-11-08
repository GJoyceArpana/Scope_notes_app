import React, { useState } from "react";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if (text.trim() === "") return;
    setNotes([...notes, text]);
    setText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Notes</h1>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write something..."
          className="p-2 rounded-l-md border w-1/2 outline-none"
        />
        <button
          onClick={addNote}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {notes.map((note, i) => (
          <div key={i} className="bg-white shadow-md p-4 rounded-md">
            {note}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
