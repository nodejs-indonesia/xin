/* globals describe, it */

import assert from 'assert';
import xin from '../../';
import '../../components/xhr';

// <template id="tpl">
//   <xin-xhr url="../mock/people.json"></xin-xhr>
// </template>

describe('XHR', () => {
  it('defined', () => {
    assert(xin('xin-xhr'));
  });
});