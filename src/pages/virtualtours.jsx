import React from 'react'

import { tourismData } from '../utils/tourismData'
const Virtualtours = () => {
  const virtualEvents = tourismData.virtualEvents;
  return (
    < >

      <div className="events-page">
        <h1>Virtual Events</h1>
        <div className="events-list">
          {virtualEvents && virtualEvents.length > 0 ? (
            virtualEvents.map((event, index) => (
              <div key={index} className="event-item">
                <img src={event.image} alt={event.name} />
                <h2>{event.groupName}</h2>
                <p><strong>Leader:</strong> {event.leader}</p>
                <p>{event.description}</p>
                <p><strong>Performance:</strong> {event.performanceFee}</p>
              </div>
            ))
          ) : (
            <p>No local events available at the moment. Please check back later!</p>
          )}
        </div>
      </div>

    </>
  )
}

export default Virtualtours