import React, { useState } from "react";

// Сгенерируем массив объектов с именами и фамилиями
const people = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Smith" },
  { id: 3, firstName: "Alice", lastName: "Johnson" },
  { id: 4, firstName: "Bob", lastName: "Brown" },
];

export default function Playground() {
  const [index, setIndex] = useState(0);

  // Обработчик нажатия на кнопку
  const handleButtonClick = (i) => {
    setIndex(i);
  };

  return (
    <div>
      <h2>Click on a button to see a name</h2>

      {/* Кнопки для выбора человека */}
      {people.map((person, i) => (
        <button key={person.id} onClick={() => handleButtonClick(i)}>
          Show {person.firstName}
        </button>
      ))}

      {/* Отображение заголовка с именем и фамилией */}
      {index !== null && (
        <h1>
          {people[index].firstName} {people[index].lastName}
        </h1>
      )}
    </div>
  );
}
