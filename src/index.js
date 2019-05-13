const hasOwn = {}.hasOwnProperty;

class ClassNames {
  constructor(styles) {
    this.styles = styles;
    this.indexClass = styles[Object.keys(styles)[0]];
  }

  pushClass = (className) => {
    const { styles, extendClasses } = this;
    extendClasses.push(hasOwn.call(styles, className) ? styles[className] : className);
  }

  renderExtendClasses = (...args) => {
    const { pushClass } = this;
    const argsList = Array.from(args);
    argsList.map((arg) => {
      if (arg) {
        switch (typeof arg) {
          case 'string':
          case 'number':
            pushClass(arg);
            break;
          case 'object':
            if (Array.isArray(arg) && arg.length) {
              // ARRAY;
              const inner = this.renderExtendClasses(...arg);
              if (inner) {
                pushClass(inner);
              }
            } else {
              // OBJECT
              Object.keys(arg).forEach((key) => {
                if (hasOwn.call(arg, key) && arg[key]) {
                  pushClass(key);
                }
              });
            }
            break;
          default:
        }
      }
      return false;
    });
  }

  addClass = (...args) => {
    this.extendClasses = [];
    this.renderExtendClasses(args);
    const { indexClass, extendClasses } = this;
    return {
      className: indexClass + (extendClasses.length ? ` ${extendClasses.join(' ')}` : '')
    };
  }
}

export default function initClassName(styles = { component: 'component' }) {
  const classNames = new ClassNames(styles);
  return classNames.addClass;
}
