let obj = {
  a: "hello world",
  b: 42,
};

let b = "a";

console.log(obj[b]);
// hello world - Ovde se koristi promenljiva b koja ima vrednost "a",
// zbog toga ce biti ispisana vrednost koju drzi svojstvo a u objektu

console.log(obj["b"]);
// 42 - ovde se ne koristi promenljiva b nego se koristi literal tipa string

// literal je zapis koji direktno predstavlja neku vrednost u kodu, bez potrebe za izračunavanjem, funkcijama ili promenljivama
