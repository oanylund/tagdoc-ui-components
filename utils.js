import { css } from "styled-components";

export const compose2 = (a, b) => c => a(b(c));
export const compose3 = (a, b, c) => d => a(b(c(d)));

export const concat = a => b => [...a, ...b];
export const appendTo = a => b => [...a, b];

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

const callWithPropsIfFunction = (f, p) => (typeof f === "function" ? f(p) : f);

export const ifElse = predicate => (tru, fals) => props =>
  predicate(props)
    ? callWithPropsIfFunction(tru, props)
    : callWithPropsIfFunction(fals, props);

export const whenTrueApplyStyles = predicate => (...styles) => props =>
  predicate(props) ? css(...styles) : null;

export const notUndefOrElse = (thisOne, thatOne) =>
  thisOne !== undefined ? thisOne : thatOne;
