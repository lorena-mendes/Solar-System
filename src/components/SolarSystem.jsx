import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <Title headline="Planetas" />
        <div data-testid="solar-system" className="solar-system">
          {planets.map(({ name, image }) => (
            <PlanetCard
              planetName={ name }
              planetImage={ image }
              key={ name }
            />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
