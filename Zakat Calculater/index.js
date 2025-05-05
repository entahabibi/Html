
a=+prompt("Cash in hand & in bank accounts : PKR");
b=+prompt("Cash deposited for some future purpose, e.g. Hajj : PKR");
c=+prompt("Cash given out in loans: PKR");
d=+prompt("Investments, shares, saving certificates, pensionsded by money in one’s possession : PKR");
e=+prompt("Borrowed money, goods bought on credit : PKR");
f=+prompt("Wages due to employees : PKR");
g=+prompt("Taxes, Rent, utility bills due immediately : PKR");
h=+prompt("Value of Gold that you possess : PKR");
i=+prompt("Value of Silver that you possess : PKR");
j=+prompt("Value of stock : PKR");

res= a+b+c+d+e-f-g-h+i+j % 2.5;
alert(res);
document.write(res)
console.log(res)