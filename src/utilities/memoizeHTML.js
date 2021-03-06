import { GLOBALS } from "../consts/GLOBALS";
import { createElement } from "./createElement";

export const memoizeHTML = query => {
  return (
    GLOBALS.HTML_CACHE[query] ||
    (GLOBALS.HTML_CACHE[query] = createElement(query))
  );
};
