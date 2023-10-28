// @deno-types="npm:@types/diff"
import * as Diff from 'npm:diff';

const changes = Diff.diffLines(
  'test',
  'test updated',
);
changes.forEach((change) => {
  console.log(change);
  console.log('hello');
});
