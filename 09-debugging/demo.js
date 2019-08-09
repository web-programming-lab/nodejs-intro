/**
 * Converts an array to an object via reduce function
 * @param {*} array Array to convert
 */
function convertToObj(array) {
    return array.reduce((current, accumulator) => {
        accumulator[current[0]] = current[1];
        return accumulator;
    }, {});
}

const obj = convertToObj([
    [1, 'First'],
    [2, 'Second'],
    [3, 'Third']
]);

console.log(obj);

// Output should be:
// Object {1: "First", 2: "Second", 3: "Third"}