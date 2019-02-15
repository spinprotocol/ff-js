const FF = require('../../ff-js');
Object.assign(global, FF);

/**
 * @description Async error handling used go & pipe + try-catch
 */


/**
 * @case Sync
 * @result 111
 */
const e1 = go(
    0,
    a => a + 1,
    a => a + 10,
    a => a + 100);
log(e1);

/**
 * @case Sync - Error
 * @result { err: 'Error~~' }
 */
try {
  const e2 = go(
    0,
    a => { throw { err: 'Error~~'} },
    a => a + 1,
    a => a + 13);

  console.log(e2);
} catch (err) {
  console.log(err);
}

/**
 * @case Async
 * @result 5
 */
(async () => {
    const t3 = await go(
        0,
        a => Promise.resolve(a + 1),
        a => a + 1,
        a => a + 3);

    console.log(t3);
})();

/**
 * @case Async - Error
 * @result { err: 'Error~~' }
 */
(async () =>  {
    try {
    const t4 = await go(
        0,
        a => Promise.resolve(a + 1),
        a => Promise.reject({ err: 'Error~~' }),
        a => a + 3);

    console.log(t4);
    } catch (err) {
    console.log(err);
    }
}) ();
