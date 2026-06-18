import { useState } from "react";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  const addHabit = () => {
    if (!newHabit) return;
    setHabits([...habits, { name: newHabit, done: false }]);
    setNewHabit("");
  };

  const toggleHabit = (index) => {
    const updated = [...habits];
    updated[index].done = !updated[index].done;
    setHabits(updated);
  };

  return (
    <div style={{ padding: 24, maxWidth: 500, margin: "0 auto", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Daily Habit Builder
      </h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          style={{ flex: 1, padding: 8 }}
          placeholder="Add a habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button
          onClick={addHabit}
          style={{ padding: "8px 12px", cursor: "pointer" }}
        >
          Add
        </button>
      </div>

      <div>
        {habits.map((habit, i) => (
          <div
            key={i}
            onClick={() => toggleHabit(i)}
            style={{
              border: "1px solid #ccc",
              padding: 12,
              marginBottom: 8,
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{habit.name}</span>
            <span>{habit.done ? "✅" : "⬜"}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, fontSize: 12, color: "gray" }}>
        Monetization idea: Freemium model with premium features later
      </div>
    </div>
  );
}
