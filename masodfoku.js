let egyenlet = '2x^2-22x+22=9';
const masodfok = (egyenlet) => {
  let x1;
  let x2;
  let megoldas = [];
  let aarr = egyenlet.split('x');
  let a = Number(aarr[0]);
  let barr = aarr[1].slice(2);
  let b = Number(barr);
  let carr = aarr[2].split('=');
  let c = Number(carr[0]);
  let d = Number(carr[1]);
  /* console.log(aarr);
  console.log(barr);
  console.log(carr);
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d); */
  if (d !== 0) {
    c = c - d;
  }
  if ((b ^ 2 - 4 * a * c) <= 0) {
    x1 = 'nincs ilyen';
    x2 = 'nincs ilyen';
    megoldas.push(x1);
    megoldas.push(x2);
  } else {
    x1 = (-b + Math.sqrt(b ^ 2 - 4 * a * c)) / 2 * a;
    x2 = (-b - Math.sqrt(b ^ 2 - 4 * a * c)) / 2 * a;
    megoldas.push(x1);
    megoldas.push(x2);
  }
  return megoldas;
};

console.log(masodfok(egyenlet));
