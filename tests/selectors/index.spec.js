import { productColourSelector } from '../../src/selectors'

describe("productColourSelector function", () => {
    const input = [
        { colour: "red" },
        { colour: "black" },
        { colour: "blue" },
    ];
    let output;
    test("it should return a single colour", () => {
        output = [{ colour: "red" }];
        expect(productColourSelector('red', input)).toEqual(output);
    });
    test("it should return all colours for colour filter equal to 'all'", () => {
        output = input;
        expect(productColourSelector('all', input)).toEqual(output);
    });
    test("it should return all colours for empty colour filter", () => {
        output = input;
        expect(productColourSelector(null, input)).toEqual(output);
    });
});