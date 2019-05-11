let styles = {};
const hasOwn = {}.hasOwnProperty;

const pushClass = function pushClass(className) {
  this.push(hasOwn.call(styles, className) ? styles[className] : className);
};

const getClasses = function getClasses(...args) {
  const classes = [];
  const argsList = Array.from(args);
  argsList.map(arg => {
    if (arg) {
      switch (typeof arg) {
        case 'string':
        case 'number':
          pushClass.call(classes, arg);
          break;
        case 'object':
          if (Array.isArray(arg) && arg.length) {
            // ARRAY;
            const inner = getClasses(...arg);
            if (inner) {
              pushClass.call(classes, inner);
            }
          } else {
            // OBJECT
            Object.keys(arg).forEach(key => {
              if (hasOwn.call(arg, key) && arg[key]) {
                pushClass.call(classes, key);
              }
            });
          }
          break;
        default:
      }
    }
    return false;
  });
  return classes.join(' ');
};

export const initClass = function initClass(initStyles) {
  styles = initStyles;
};

export const addClass = function addClass(...args) {
  const indexClass = styles[Object.keys(styles)[0]];
  return {
    className: `${indexClass} ${getClasses(args)}`
  };
};
