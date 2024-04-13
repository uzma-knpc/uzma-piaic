// q21:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Define types for items
type Book = {
    title: string;
    author: string;
    pages: number;
  };
  
  type Fruit = {
    name: string;
    color: string;
    quantity: number;
  };
  
  type Mobilephone = {
    name: string;
    brand: string;
    price: number;
  };
  
  // Create objects containing items
  const book1: Book = {
    title: "Seeratunnabi (P.B.U.H)",
    author: "Salman Nadvi",
    pages: 500,
  };
  
  const book2: Book = {
    title: "Hamayaran Doozaq",
    author: "Siddique Salik",
    pages: 300,
  };
  
    
  const Phone1 :Mobilephone = {
    name: "IPHONE6",
    brand: "Apple",
    price: 114000 ,
  };
  
  const phone2:Mobilephone = {
    name: "Notebook",
    brand: "Samsung",
    price: 132557,
  };
  
  // Print out the objects
  
  console.log("Book 1:", book1.author);
  console.log("Book 1:", book1.title);
  console.log("Book 2:", book2.author);
  console.log("Book 2:", book2.title);
  
  console.log("phone 1:", Phone1);
  console.log("phone 2:", phone2);
