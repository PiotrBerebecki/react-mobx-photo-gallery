import React, { Component } from 'react';

class RailWrapper extends Component {
  shouldComponentUpdate(nextProps) {
    const { selectedRailId, railId } = this.props;
    return nextProps.selectedRailId === railId || selectedRailId === railId;
  }
  handleTileClick = event => {
    const { railId } = this.props;
    this.props.handleTileClick(railId, Number(event.target.id));
  };

  renderTiles(railId, tileIds) {
    const { selectedRailId, selectedTileId } = this.props;

    return tileIds.map(tileId => {
      const tileClassName =
        selectedRailId === railId && selectedTileId === tileId
          ? 'tile tile__selected'
          : 'tile';

      return (
        <img
          key={tileId}
          id={tileId}
          className={tileClassName}
          src={`http://via.placeholder.com/250x150?text=Rail-${railId}-${tileId}`}
          alt="placeholder"
          onClick={this.handleTileClick}
        />
      );
    });
  }

  render() {
    const { title, railId, tileIds } = this.props;

    return (
      <section className="rail-wrapper">
        <h2 className="rail__header">{title}</h2>
        <div className="rail">{this.renderTiles(railId, tileIds)}</div>
      </section>
    );
  }
}

export default RailWrapper;
