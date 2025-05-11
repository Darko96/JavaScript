// Napisite program koji izracunava ukupan iznos vase kupovine telefona.
// Kupujete telefone dok imate dovoljno novca na vasem racun u banci.
// Uz telefone kupujete i dopunsku opremu sve dok je ukupan iznos kupovine ispod mentalnog praga trosenja koji sebi zadate.

// Posto izracunate iznos kupovine, dodajte porez, a zatim ispisite ukupan izracunati iznos, pravilno formatiran.

// Na kraju proverite stanje na svom bakovnom racunu da biste videli mozete li sebi da priustite kupovine.

// Trebalo bi da definisete nekoliko konstanti,
// za stopu poreza, cenu uredjaja, cenu dodatne opreme, maksimum troska, kao i promenljivu za vase stanje na bankovnom racunu

// Trebalo bi da definisete funkcije za izracunavanje poreza, za dopunjavanje iznosa znakom za valutu (na primer $) i zaokruzivanje na dva decimalna mesta

// Pokusajte da u svoj program ugradite mogucnost unosenja ulaznih podataka, mozda pomocu funkcije prompt.
// Recimo mozete zatraziti da korisnik unese stanje na svom bankovnom racunu. Zabavite se i budite mastoviti

let bankAccountAmount = prompt("Unesite stanje na vasem racunu: ");
const canSpend = prompt(
  "Unesite koliko maksimalno zelite da potrosite na telefone: "
);

let = numberOfPhonesBought = 0;
let = numberOfAccBought = 0;

let cart = 0;
const tax = 0.08;

const phone = 99;
const accessories = 10;

// Kupovina proizvoda
while (cart + phone < bankAccountAmount) {
  cart = cart + phone;
  numberOfPhonesBought++;

  if (cart < canSpend) {
    cart = cart + accessories;
    numberOfAccBought++;
  }
}

// Izracunavanje poreza
function calculateTax(amount) {
  return amount * tax450;
}
cart = calculateTax(cart);

// Da li se kupovina moze izvrsiti
if (bankAccountAmount > cart) {
  console.log("Mogu sebi da priustim kupovinu");
  console.log("Broj kupljenih telefona: " + numberOfPhonesBought);
  console.log("Broj kupljenih dodataka: " + numberOfAccBought);
} else {
  console.log("Ne mogu sebi da priustim kupovinu");
}

bankAccountAmount = bankAccountAmount - cart;
// Formatiranje cene
function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}
cart = formatAmount(cart);

bankAccountAmount = formatAmount(bankAccountAmount);

console.log("Korpa sa PDV-om: " + cart);
console.log("Stanje na bankovom racunu: " + bankAccountAmount);
