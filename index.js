const flat = require('flattenarray-node');

module.exports = (array, mapper) => flat(array
    .map((value, index, thisArg) => {
        if (Array.isArray(value)) return value.map(mapper);
        const mapped = mapper(value, index, thisArg);
        return mapped;
    }));
