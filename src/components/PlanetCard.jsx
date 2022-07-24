import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <section className="section-planet-cards">
        <div data-testid="planet-card">
          <p data-testid="planet-name">{ planetName }</p>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } className="planet" />
        </div>
      </section>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCard;
