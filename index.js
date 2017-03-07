import './a';

require.ensure([], (require) => {
    require('./b.js');
});
