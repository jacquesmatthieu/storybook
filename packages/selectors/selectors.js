export const getColor = (type, tint = 'main') => ({ theme }) => theme.palette[type][tint];

export const getShadow = type => ({ theme }) => theme.shadows[type];

export const getPrimary = getColor('primary', 'main');

export const getSecondary = getColor('secondary', 'main');

export const inRem = units => ({ theme }) => theme.spacing.inRem(units);

const execOrValue = (value, args) => (typeof value === 'function' ? value(args) : value);
export const condition = (predicate, rule, fallback = '') => (args) => {
  if (typeof predicate === 'object') {
    const match = Object.entries(predicate).find(([key]) => args[key]);
    return match && match[0] ? execOrValue(match[1], args) : execOrValue(predicate[condition.fallback], args);
  }

  const isTrue = typeof predicate === 'function' ? predicate(args) : args[predicate];
  return isTrue ? execOrValue(rule, args) : execOrValue(fallback, args);
};

condition.fallback = Symbol('conditionFallback');
