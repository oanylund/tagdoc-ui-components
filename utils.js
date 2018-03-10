export const compose2 = (a, b) => c => a(b(c));

export const path = (paths, obj) => {
  let val = obj;
  let idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx++;
  }
  return val;
};

export const prop = p => obj => obj[p];

export const ifElse = predicate => (tru, fals) => props =>
  predicate(props) ? tru(props) : fals(props);

export const when = predicate => (...styles) => props =>
  predicate(props) ? css(...styles) : null;

export const notUndefOrElse = (thisOne, thatOne) =>
  thisOne !== undefined ? thisOne : thatOne;
