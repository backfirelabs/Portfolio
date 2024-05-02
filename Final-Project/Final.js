class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = {};
        }
    }

    addEdge(src, dest, weight) {
        if (!this.vertices[src]) this.addVertex(src);
        if (!this.vertices[dest]) this.addVertex(dest);
        this.vertices[src][dest] = weight;
        this.vertices[dest][src] = weight; // For undirected graph
    }

    dijkstra(start) {
        const distances = {};
        const previous = {};
        const nodes = new Set();

        for (let vertex in this.vertices) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.add(vertex);
            } else {
                distances[vertex] = Infinity;
                nodes.add(vertex);
            }
            previous[vertex] = null;
        }

        while (nodes.size) {
            let smallest = null;
            nodes.forEach(vertex => {
                if (smallest === null || distances[vertex] < distances[smallest]) {
                    smallest = vertex;
                }
            });

            nodes.delete(smallest);

            for (let neighbor in this.vertices[smallest]) {
                let alt = distances[smallest] + this.vertices[smallest][neighbor];
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = smallest;
                }
            }
        }

        return {distances, previous};
    }

    findShortestPath(start, end) {
        let {distances, previous} = this.dijkstra(start);
        let path = [];
        while (previous[end]) {
            path.push(end);
            end = previous[end];
        }
        path.push(start);
        path.reverse();
        return path.join(" -> ");
    }
}

const graph = new Graph();

function addVertex() {
    const vertexName = document.getElementById("vertexName").value;
    graph.addVertex(vertexName);
    document.getElementById("vertexName").value = ''; // Clear input
}

function addEdge() {
    const from = document.getElementById("fromVertex").value;
    const to = document.getElementById("toVertex").value;
    const weight = Number(document.getElementById("edgeWeight").value);
    graph.addEdge(from, to, weight);
    document.getElementById("fromVertex").value = '';
    document.getElementById("toVertex").value = '';
    document.getElementById("edgeWeight").value = '';
}

function showGraph() {
    document.getElementById("graphVisual").textContent = JSON.stringify(graph.vertices);
}

function findPath() {
    const start = document.getElementById("startVertex").value;
    const end = document.getElementById("endVertex").value;
    const path = graph.findShortestPath(start, end);
    document.getElementById("pathResult").textContent = path
}