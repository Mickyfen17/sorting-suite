import { expect, assert } from 'chai';
import insertionSort from "../scripts/insertion-sort";

describe("testing Insertion Sort", function() {

  it('insertionSort be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('insertionSort should return to me an array', () => {
    expect(Array.isArray(insertionSort([]))).to.be.true;
  });

  // it('helperSort should return to me an array', () => {
  //   expect(Array.isArray(helperSort(0, []))).to.be.true;
  // });
  //
  // it('helperSort should add a higher value number after the array index value', () => {
  //   expect(helperSort(2, [0,1])).to.deep.equal([0,1,2]);
  // });
  //
  // it('helperSort should insert the value number inbetween the existing numbers', () => {
  //   expect(helperSort(9, [8,10])).to.deep.equal([8,9,10]);
  // });
  //
  // it("insertionSort filter an unordered array of numbers", () => {
  //   expect(insertionSort([4,2,0,3,1])).to.deep.equal([0,1,2,3,4]);
  // });
  //
  // it("insertionSort filter an unordered array of letters", () => {
  //   expect(insertionSort(["e","c","a","d","b"])).to.deep.equal(["a","b","c","d","e"]);
  // });


});
