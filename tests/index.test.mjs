import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('zips two arrays', () => {
  assert.deepEqual(api.zipStrict(['a', 'b'], [1, 2]), [
    ['a', 1],
    ['b', 2],
  ]);
});
test('zips three arrays', () => {
  assert.deepEqual(api.zipStrict([1], [2], [3]), [[1, 2, 3]]);
});
test('returns empty for no arrays', () => {
  assert.deepEqual(api.zipStrict(), []);
});
test('returns empty for empty arrays', () => {
  assert.deepEqual(api.zipStrict([], []), []);
});
test('preserves object references', () => {
  const x = { a: 1 };
  assert.equal(api.zipStrict([x])[0]?.[0], x);
});
test('rejects unequal lengths', () => {
  assert.throws(() => api.zipStrict([1], [2, 3]), RangeError);
});
