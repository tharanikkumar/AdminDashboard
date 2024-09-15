import React, { useState } from 'react';

// Define an interface for Event with image and price
interface Event {
  id: number;
  name: string;
  description: string;
  image: string; // URL or path to the event image
  price: string; // Price of the event
}

const initialEvents: Event[] = [
  {
    id: 1,
    name: 'Neuro Tech Titans',
    description: 'Description for Event 1',
    image:
      'https://www.knowafest.com/files/uploads/WhatsApp%20Image%202023-02-27%20at%2012.12.02%20PM-2023022705.jpeg',
    price: '$20'
  },
  {
    id: 2,
    name: 'FOSS',
    description: 'Description for Event 2',
    image: 'http://www.srmistvdp.edu.in/wp-content/uploads/2022/11/event2.jpg',
    price: '$30'
  }
  // Add more events here
];

const RemoveEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event);
    setShowConfirmDialog(true);
  };

  const handleConfirmRemove = () => {
    if (selectedEvent) {
      setEvents((prevEvents) =>
        prevEvents.filter((e) => e.id !== selectedEvent.id)
      );
      setShowConfirmDialog(false);
      setSelectedEvent(null);
    }
  };

  const handleCancelRemove = () => {
    setShowConfirmDialog(false);
    setSelectedEvent(null);
  };

  return (
    <div className="mx-auto my-4 max-w-4xl p-4">
      <h2 className="mb-4 text-2xl font-semibold">Remove Event</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative cursor-pointer rounded-lg border border-gray-300 p-4 shadow-md hover:shadow-lg"
            onClick={() => handleCardClick(event)}
          >
            <img
              src={event.image}
              alt={event.name}
              className="mb-4 h-40 w-full rounded-md object-cover"
            />
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <p className="mt-2 text-gray-400">{event.description}</p>
            <p className="mt-2 font-bold text-gray-100">{event.price}</p>
          </div>
        ))}
      </div>

      {showConfirmDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="rounded-lg bg-black p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">
              Are you sure you want to remove this event?
            </h3>
            <div className="flex justify-end gap-4">
              <button
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                onClick={handleConfirmRemove}
              >
                Yes
              </button>
              <button
                className="rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 focus:outline-none"
                onClick={handleCancelRemove}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoveEvents;
