import React from 'react'

export default ({ location }) => (
  <section className="location">
    <h3 className="location__name">Location: {location.location}</h3>
    <div className="location__address">Address: {location.address}</div>
    <div className="location__size">
      Square Footage: {location.squareFootage}
    </div>
    <div className="location__accessibility">
      Handicap Accessible? {location.handicapAccessible ? 'yes' : 'no'}
    </div>
  </section>
)
