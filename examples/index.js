const initClassName = require('../lib').default;

const styles = {
  header: 'header__abc',
  _logo: '_logo__def',
  '-big': '-big__xyz',
  '-dark': '-dark__lmn'
};

const addClass = initClassName(styles);

console.log('addClass:\n', addClass());

const headerClass = addClass(
  '_logo',
  { '-big': true, '-true': true, '-false': false },
  ['-array-item-1', '-dark'],
  [{ '-object-in-array-item-1': true }]
);

const expectedVal = {
  className:
    'header__abc _logo__def -big__xyz -true -array-item-1 -dark__lmn -object-in-array-item-1'
};

console.log('headerClass:\n', headerClass);
console.log('expectedVal:\n', expectedVal);
