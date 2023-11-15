'use client';
import { useState } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

type DraggableEventHandler = (e: DraggableEvent, data: DraggableData) => void;

export default function DiffComp() {
  const [isMemento, setIsMemento] = useState(true);

  // The handler for the drag event
  const handleDrag: DraggableEventHandler = (e, ui) => {
    // You can use the ui.x or ui.y values to determine the position of the drag
    const threshold = 50; // Adjust this threshold as needed
    const shouldToggle = ui.x > threshold; // Adjust the condition based on your desired behavior

    // Toggle the content based on the drag position
    if (shouldToggle && !isMemento) {
      setIsMemento(true);
    } else if (!shouldToggle && isMemento) {
      setIsMemento(false);
    }
  };

  return (
    <Draggable axis="x" onDrag={handleDrag}>
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div
            className={`bg-${
              isMemento ? 'primary' : 'base-200'
            } text-9xl font-black grid place-content-center`}
          >
            {isMemento ? 'MEMENTO' : 'MEMENTO'}
          </div>
        </div>
        <div className="diff-item-2">
          <div
            className={`bg-${
              isMemento ? 'base-200' : 'primary'
            } text-9xl font-black grid place-content-center`}
          >
            {isMemento ? 'MEMENTO' : 'MEMENTO'}
          </div>
        </div>
        <div className="diff-resizer" />
      </div>
    </Draggable>
  );
}
