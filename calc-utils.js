// Shared helpers for ATechno Hub calculators
function pkr(n) {
  if (isNaN(n) || n === null) n = 0;
  n = Math.round(n);
  return 'PKR ' + n.toLocaleString('en-PK');
}
function pct(n, digits) {
  if (isNaN(n)) n = 0;
  return n.toFixed(digits === undefined ? 1 : digits) + '%';
}
function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}
