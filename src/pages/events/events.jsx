import React from 'react';
import './events.css'
import { tourismData } from '../../utils/tourismData';

const Events = () => {
  const localEvents = tourismData.Local_tourism_site;
  return (
    <>
    <div className="events-page">
      <h1>Local Events</h1>
      <div className="events-list">
        {localEvents && localEvents.length > 0 ? (
          localEvents.map((event, index) => (
            <div key={index} className="event-item">
              <img src={event.image} alt={event.name} />
              <h2>{event.name}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p>{event.description}</p>
              <p><strong>Ticket Price:</strong> {event.ticketPrice}</p>
            </div>
          ))
        ) : (
          <p>No local events available at the moment. Please check back later!</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Events;
