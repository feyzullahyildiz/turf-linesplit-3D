const lineSplit = require('@turf/line-split');
const feyzSplit = function (line, splitter) {
    const newGeom = lineSplit({ type: 'Feature', geometry: line }, splitter)

    const lines = newGeom.features.map(a => a.geometry.coordinates)
    const [first, second] = lines
    const len = first.length
    const firstCuttedVertex = line.coordinates[len - 2]
    const lastCuttedVertex = line.coordinates[len - 1]
    const middleCuttedVertex = first[len - 1]
    // console.log(len)
    // console.log(firstCuttedVertex)
    // console.log(lastCuttedVertex)
    // console.log(middleCuttedVertex)
    // middleCuttedVertex.push(0)
    const lengthFirstAndPoint = Math.pow(
        Math.pow(firstCuttedVertex[0] - middleCuttedVertex[0], 2) +
        Math.pow(firstCuttedVertex[1] - middleCuttedVertex[1], 2),
        1 / 2
    )
    const lengthLastAndPoint = Math.pow(
        Math.pow(lastCuttedVertex[0] - middleCuttedVertex[0], 2) +
        Math.pow(lastCuttedVertex[1] - middleCuttedVertex[1], 2),
        1 / 2
    )
    const zDif = firstCuttedVertex[2] - lastCuttedVertex[2]
    // console.log('zDif', zDif)
    // console.log('LENNNn', lengthFirstAndPoint)
    // console.log('LENNNn', lengthLastAndPoint)
    const val = lengthLastAndPoint / (lengthLastAndPoint + lengthFirstAndPoint)
    middleCuttedVertex.push((val * zDif) + lastCuttedVertex[2])
    // console.log(middleCuttedVertex[2])
    // console.log("\n")
    // console.log(second)

    return lines
}

module.exports = feyzSplit