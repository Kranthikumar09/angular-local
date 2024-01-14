import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 constructor(){}
  ngOnInit(): void {};

   products = [
    {
      id: 1,
      name: "Analog Watch",
      price: 159.99,
      color: "Blue",
      available: 'Available',
      image: "src\assets\watch.jpeg"
    },
    {
      id: 2,
      name: "Hisense Ultra HD Smart TV",
      price: 399.99,
      color: "Red",
      available: 'Available',
      image: "src\assets\TV.jpeg"
    },
    {
      id: 3,
      name: "APPLE iphone 12",
      price: 327.99,
      color: "Green",
      available: 'Not Available',
      image: "src\assets\iphone 12.jpeg"
    },
    {
      id: 4,
      name: "LG Fully Automatic Washing Machine",
      price: 219.99,
      color: "Yellow",
      available: 'Not Available',
      image: "src\assets\washing machine.jpeg"
    },
    {
      id: 5,
      name: "LG Refrigerator with Door Cooling",
      price: 89.99,
      color: "Black",
      available: 'Available',
      image: "src\assets\refrigitor.jpeg"
    },
    {
      id: 6,
      name: "DELL inspiron One 27 RYZEN 7",
      price: 109.99,
      color: "White",
      available: 'Not Available',
      image: "src\assets\desktop.jpeg"
    }
  ];

}
