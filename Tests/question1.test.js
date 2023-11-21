import functionLength from "../Problems/question1";
describe('functionLength', () => {
  test('no arguments', () => {
    expect(functionLength(function foo() {})).toBe(0);
    expect(functionLength(() => {})).toBe(0);
  });

  test('one argument', () => {
    expect(functionLength(function foo(a) {})).toBe(1);
    expect(functionLength((a) => {})).toBe(1);
  });

  test('two arguments', () => {
    expect(functionLength(function foo(a, b) {})).toBe(2);
    expect(functionLength((a, b) => {})).toBe(2);
  });
});