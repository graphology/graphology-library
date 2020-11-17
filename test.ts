import {default as Graph} from 'graphology';
import * as metrics from './metrics';

const graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);

graph.addEdge(1, 2);

const density = metrics.density(graph);

console.log('Graph density:', density);
