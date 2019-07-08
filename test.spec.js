const assert = require('assert');
const feyzSplit = require('./utils')
describe('Array', function () {
    it('data should be valid', function () {
        const line = {
            "type": "LineString", "coordinates": [
                [0, 0, 0],
                [1, 0, 0],
                [1, 2, 0],
            ]
        }
        const splitter = {
            "type": "LineString", "coordinates": [
                [0, 1],
                [5, 1]
            ]
        }
        const expectedFirstLine = [
            [0, 0, 0],
            [1, 0, 0],
            [1, 1, 0],
        ]
        const expectedSecondLine = [
            [1, 1, 0],
            [1, 2, 0],
        ]
        assert.deepEqual(feyzSplit(line, splitter), [expectedFirstLine, expectedSecondLine])
    });
    it('data should be valid', function () {
        const line = {
            "type": "LineString", "coordinates": [
                [0, 0, 0],
                [1, 0, 100],
                [1, 20, 0],
            ]
        }
        const splitter = {
            "type": "LineString", "coordinates": [
                [0, 1],
                [5, 1]
            ]
        }
        const expectedFirstLine = [
            [0, 0, 0],
            [1, 0, 100],
            [1, 1, 95],
        ]
        const expectedSecondLine = [
            [1, 1, 95],
            [1, 20, 0],
        ]
        assert.deepEqual(feyzSplit(line, splitter), [expectedFirstLine, expectedSecondLine])
    });
    it('data should be valid', function () {
        const line = {
            "type": "LineString", "coordinates": [
                [0, 10, 70],
                [10, 0, 80],
                [20, 5, 90],
            ]
        }
        const splitter = {
            "type": "LineString", "coordinates": [
                [1, 1],
                [5, 5]
            ]
        }
        const expectedFirstLine = [
            [0, 10, 70],
            [5, 5, 75],
        ]
        const expectedSecondLine = [
            [5, 5, 75],
            [10, 0, 80],
            [20, 5, 90],
        ]
        assert.deepEqual(feyzSplit(line, splitter), [expectedFirstLine, expectedSecondLine])
    });
    it('data should be valid', function () {
        const line = {
            "type": "LineString", "coordinates": [
                [0, 10, 70],
                [10, 0, -80],
                [20, 5, 90],
            ]
        }
        const splitter = {
            "type": "LineString", "coordinates": [
                [1, 1],
                [50, 50]
            ]
        }
        const expectedFirstLine = [
            [0, 10, 70],
            [5, 5, -5],
        ]
        const expectedSecondLine = [
            [5, 5, -5],
            [10, 0, -80],
            [20, 5, 90],
        ]
        assert.deepEqual(feyzSplit(line, splitter), [expectedFirstLine, expectedSecondLine])
    });
    it('data should be valid', function () {
        const line = {
            "type": "LineString", "coordinates": [
                [0, 10, -70],
                [10, 0, -80],
                [20, 5, 90],
            ]
        }
        const splitter = {
            "type": "LineString", "coordinates": [
                [1, 1],
                [50, 50]
            ]
        }
        const expectedFirstLine = [
            [0, 10, -70],
            [5, 5, -75],
        ]
        const expectedSecondLine = [
            [5, 5, -75],
            [10, 0, -80],
            [20, 5, 90],
        ]
        assert.deepEqual(feyzSplit(line, splitter), [expectedFirstLine, expectedSecondLine])
    });
});