// let sales = 12;
// let course = "typescript";
// let is_published = true;
// let level;

// function render(something: any) {
//   console.log(something);
// }

// let numbers:number[] =[1,2,3];
// numbers.forEach(n=>n.toString())

// let user: [number,string] = [1,"Rahul"]

// const small = 2;
// const medium = 3;
// const large = 4;

//PascalCode
// const enum Size {
//   Small = 2,
//   Medium,
//   large,
// }

// const mySize: Size = Size.Medium;
// console.log(mySize);

// function calculateTax(income: number, taxyear = 2022): number {
//   if (taxyear < 2022) return income / 2;
//   return income / 3;
// }
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (data: Date) => void;
// };
// let employee: Employee = {
//   id: 1,
//   name: "Rahul",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// function kgToLbs(weight: number | string): number {
//   if (typeof weight === "number") return weight * 2.2;
//   else return parseInt(weight) * 2.2;
// }

// console.log(kgToLbs(10));
// console.log(kgToLbs("10kg"));

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// type Quantity = 50 | 200;

// const value: Quantity = 50;

// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   else console.log("HOla");
// }

// greet(null);

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());
