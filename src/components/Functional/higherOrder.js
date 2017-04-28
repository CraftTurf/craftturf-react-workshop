const add = (f) => {
  let accumulator = f();
  return g => (accumulator += g());
};

export default add;
