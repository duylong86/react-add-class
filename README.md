# react-add-class

> Support React to add class names from css module

## How to use

```html
<!-- expected result -->
<div class="header__ab _block_xy -fixed__zh">
  <div class="header__ab _logo__yd -dark__ka"></div>
  <div class="header__ab _title__xn -global-text -big__xa"></div>
  <div class="header__ab _menu__ph -expanded__xh"></div>
</div>
```

```es6
import initClassName from 'react-add-class';
import styles from './styles.css';

const addClass = initClassName(styles);

/*
  styles = {
    header: 'header__ab',
    _block: '_block_xy',
    _logo: '_logo__yd',
    _title: '_title__xn',
    _menu: '_menu__ph',
    '-fixed': '-fixed__zh',
    '-dark': '-dark__ka',
    '-expanded': '-expanded__xh',
    '-big': '-big__xa'
  };
*/

render() {
  return (
    <div {...addClass('_block')}>
      <div {...addClass('_logo', '-dark')}></div>
      <div {...addClass('_title', [ '-global-text' ], [{ '-big': true }])}></div>
      <div {...addClass('_menu', { '-expanded': true })}></div>
    </div>
  )
}
```
