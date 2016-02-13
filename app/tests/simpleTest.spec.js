describe('The test object', function() {

	var st = new simpleTest();

	it('adds two numbers together', function() {
		expect(st.addNumbers(1, 2)).toEqual(3);
	});
});