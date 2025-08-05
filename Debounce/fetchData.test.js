const fetchData = require('./fetchData');

test('the data is freeCodeCamp',async()=>{
    const data = await fetchData();
    expect(data).toBe('freeCodeCamp');
})