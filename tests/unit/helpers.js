global.see = (needle, element) => {
  expect(element).toContain(needle);
};

global.dontSee = (needle, element) => {
  expect(element).not.toContain(needle);
};
