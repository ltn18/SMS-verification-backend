const generateAccessCode = () => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const c = Math.floor(Math.random() * 10);
  const d = Math.floor(Math.random() * 10);
  const e = Math.floor(Math.random() * 10);
  const f = Math.floor(Math.random() * 10);
  return "" + a + b + c + d + e + f;
};

module.exports = generateAccessCode;