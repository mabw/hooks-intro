import init from 'jooks';
import useValue from '../useValue';


describe('useValue hook', () => {
  const jooks = init(() => useValue(3));

  it('should return the times with additional text', () => {
    // Act
    const text = jooks.run();

    // Assert
    expect(text).toEqual(`You clicked 3 times`);
  });
})