import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import RailWrapper from './RailWrapper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedRailId: 0,
      selectedTileId: 1,
      rails: {
        first: {
          title: 'First',
          railId: 0,
          tileIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
        second: {
          title: 'Second',
          railId: 1,
          tileIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
        third: {
          title: 'Third',
          railId: 2,
          tileIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
      },
    };
  }

  handleTileClick = (selectedRailId, selectedTileId) => {
    this.setState({
      selectedRailId,
      selectedTileId,
    });
  };

  render() {
    const { rails, selectedRailId, selectedTileId } = this.state;

    return (
      <div className="app">
        <Header />
        <Player
          selectedRailId={selectedRailId}
          selectedTileId={selectedTileId}
        />
        <RailWrapper
          handleTileClick={this.handleTileClick}
          railId={rails.first.railId}
          title={rails.first.title}
          tileIds={rails.first.tileIds}
          selectedRailId={selectedRailId}
          selectedTileId={selectedTileId}
        />
        <RailWrapper
          handleTileClick={this.handleTileClick}
          railId={rails.second.railId}
          title={rails.second.title}
          tileIds={rails.second.tileIds}
          selectedRailId={selectedRailId}
          selectedTileId={selectedTileId}
        />
        <RailWrapper
          handleTileClick={this.handleTileClick}
          railId={rails.third.railId}
          title={rails.third.title}
          tileIds={rails.third.tileIds}
          selectedRailId={selectedRailId}
          selectedTileId={selectedTileId}
        />
      </div>
    );
  }
}

export default App;
