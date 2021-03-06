"use strict";

import d3 from 'd3';

const width = 960;
const height = 500;
const margins = {top: 40, right: 100, bottom: 40, left: 100};

export default {
  width: width,
  height: height,
  margins: margins,
  y: (d) => {return +d;},
  xScale: 'linear',
  yScale: 'linear',
  showXGrid: true,
  showYGrid: true
}

export const horizontalProps = {
  width: width,
  height: height,
  margins: margins,
  x: (d) => {return +d;},
  xScale: 'linear',
  yScale: 'linear',
  showXGrid: true,
  showYGrid: true
}

export const pieProps = {
  width: width,
  height: height,
  margins: margins,
  innerRadius: 0,
  categoricalColors: d3.scale.category10(),
  pieSort: d3.descending
}
