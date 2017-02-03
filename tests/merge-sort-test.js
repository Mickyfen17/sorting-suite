import { expect, assert } from 'chai';
import { mergeSort, split } from "../scripts/merge-sort";

describe("testing Merge Sort", function() {

  it('shift should be a function', () => {
    assert.isFunction(mergeSort);
  });

  it('mergeSort should be a function', () => {
    assert.isFunction(split);
  });

  it('shift should return to me an array after passing in an array of one value', () => {
    expect(Array.isArray(split([1]))).to.be.true;
  });

  it('mergeSort should accept two arrays and return to me one array', () => {
    expect(Array.isArray(mergeSort([], []))).to.be.true;
  });

  it("should throw an error when function does not receive an array", () => {
    expect( () => split("hello") ).to.throw(("Must pass in an array"));
  });

  it("split should check for a output", () => {
    expect(split([1,2,3])).to.deep.equal([1,2,3]);
  });

  it("mergeSort should accept two arrays with the highest value on the right and sort to return one array with lowest first then highest", () => {
    expect(mergeSort([2],[1])).to.deep.equal([1,2]);
  });

  it("should filter an unordered array of numbers", () => {
    expect(split([54,1,9,16,5])).to.deep.equal([1,5,9,16,54]);
  });

  it("should filter an unordered array of letters", () => {
    expect(split(["v","a","j","t","e"])).to.deep.equal(["a","e","j","t","v"]);
  });

  it("should filter an unordered array of 1000 letters", () => {
    let testArray= [];
    for(let i = 0; i < 100; i++) {
      testArray.push("x","c","t","a","b","z","l","w","c","p");
    }
    let sortedArray = testArray.sort();
    expect(split(testArray)).to.deep.equal(sortedArray);
  });

  it("should filter an unordered array of 150000 numbers between 0 & 149999", () => {
    let testArray= [];
    for(let i = 0; i < 150000; i++) {
      testArray.push(Math.floor(Math.random() * 150000));
    }
    let sortedArray = testArray.sort( (a, b) => a - b);
    expect(split(testArray)).to.deep.equal(sortedArray);
  });

});
