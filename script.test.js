const {capitalize, reverseString,calculator,caesarCipher,analyzeArray} =require('./script');

test('Capitalize',()=>{
    expect(capitalize('ciao')).toBe('Ciao');
});

test('Reversing a string',()=>{
    expect(reverseString('topo')).toBe('opot');
});

test('Calculator Object',()=>{
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.subtract(1,2)).toBe('Impossible');
    expect(calculator.divide(4,2)).toBe(2);
    expect(calculator.multiply(1,2)).toBe(2);
});

test('Caesar Cipher',()=>{
    expect(caesarCipher("xyz", 3)).toBe("abc");
})

test('Analyze array',()=>{
    expect( obj = analyzeArray([1,8,3,4,2,6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
});