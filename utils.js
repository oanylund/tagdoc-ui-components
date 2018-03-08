export const compose2 = (a, b) => c => a(b(c));

export const ifElse = predicate => (tru, fals) => props =>
  predicate(props) ? tru(props) : fals(props);

export const when = predicate => (...styles) => props =>
  predicate(props) ? css(...styles) : null;

export const notUndefOrElse = (thisOne, thatOne) =>
  thisOne !== undefined ? thisOne : thatOne;
