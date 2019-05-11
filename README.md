# react-add-class

> Support React to add class names from css module

## How to use

```es6
import { initClass, addClass } from 'react-add-class';
import styles from './styles.css';

/*
  styles = {
    header: 'header__abc',
    _logo: '_logo__def',
    ['-big']: '-big__xyz',
    ['-dark']: '-dark__lmn'
  };
*/

initClass(styles);

<Component {...addClass(
  '_logo',
  { ['-big']: true, ['-true']: true, ['-false']: false },
  ['-array-item-1', '-dark'],
  [{ '-object-in-array-item-1': true }]
);} />

// result class="header__abc _logo -big -true -array-item-teim-1 -dark__lmn -object-in-array-item-1"
```
