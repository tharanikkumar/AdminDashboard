import React, { useState } from 'react';
import { FileUpload } from '@/components/ui/file-upload'; // Adjust the import path if necessary

const AddEvents = () => {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventPrice: '',
    eventDescription: '',
    eventImage: null
  });

  const handleFileChange = (files) => {
    setEventData((prevState) => ({
      ...prevState,
      eventImage: files[0] // Assuming only one file is uploaded
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(eventData);
    // Reset form after submission
    setEventData({
      eventName: '',
      eventPrice: '',
      eventDescription: '',
      eventImage: null
    });
  };

  return (
    <div className="mx-auto my-3 max-w-md rounded-md border border-gray-300 bg-transparent p-7 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Add Event</h2>
      <div className="h-[79vh] overflow-auto">
        {' '}
        {/* Adjust the height and enable scrolling */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="eventName"
            >
              Event Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border border-gray-300 bg-transparent px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="eventName"
              name="eventName"
              type="text"
              placeholder="Event Name"
              value={eventData.eventName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="eventPrice"
            >
              Event Price
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border border-gray-300 bg-transparent px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="eventPrice"
              name="eventPrice"
              type="text"
              placeholder="Event Price"
              value={eventData.eventPrice}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="eventDescription"
            >
              Event Description
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border border-gray-300 bg-transparent px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="eventDescription"
              name="eventDescription"
              placeholder="Event Description"
              value={eventData.eventDescription}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb--1 block text-sm font-bold text-gray-700">
              Event Image
            </label>
            <FileUpload onChange={handleFileChange} />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvents;
