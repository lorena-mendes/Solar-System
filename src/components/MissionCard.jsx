import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <section className="section-missions">
        <div data-testid="mission-card" className="mission">
          <p data-testid="name">{ name }</p>
          <p data-testid="year">{ year }</p>
          <p data-testid="country">{ country }</p>
          <p data-testid="destination">{ destination }</p>
        </div>
      </section>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
