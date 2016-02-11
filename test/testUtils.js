/**
 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */
import {expect, assert} from 'chai';

export function assertEquals(expected, actual, message){
    if(expected != null || actual != null) {
        if(expected != null) {
            if(typeof expected.equals === 'function'){
                expect(expected.equals(actual), message != null ? message : `${expected} not equals ${actual}`).to.be.true;
            } else {
                expect(expected, message).to.eql(actual);
            }
        } else {
            expect(actual).to.be.null;
        }
    }
}

export function assertSame(expected, actual, message){
    expect(expected === actual, message != null ? message : `${expected} !== ${actual}`).to.be.true;
}

export function assertNotNull(object, message){
    expect(object, message).to.be.not.null;
}

export function assertTrue(condition, message) {
    if(!condition) {
        fail(`assertTrue: ${condition} not true, ${message}`);
    }
}

export function assertFalse(condition, message) {
    if(condition) {
        fail(`assertFalse: ${condition} not true, ${message}`);
    }
}

export function fail(message){
    assert(false, message);
}

export function isCoverageTestRunner(){
    return (process.env.COVERAGE != null) && process.env.COVERAGE !== 0 && process.env.COVERAGE !== '';
}

