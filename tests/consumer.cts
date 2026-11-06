import * as api from '@lp-labs/strict-zip';
import { zipStrict } from '@lp-labs/strict-zip';
console.log(zipStrict(['a', 'b'], [1, 2]));
// @ts-expect-error invalid argument must be rejected by declarations
api.zipStrict([1], 'two');
