export const toMap = (arr, property) => {
    if (!Array.isArray(arr)){
        throw Error("argument arr is not an array");
    }

    if (typeof property !== "string"){
        throw Error("argument property is not a string");
    }
    
    return arr.reduce((accumulator, current) => {
        const key = current[property];
        accumulator.set(key, current);
        return accumulator;
    }, new Map());
};
