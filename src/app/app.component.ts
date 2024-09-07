import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pizza time 🍕';
  total: number = 0;
  menuItems: MenuItem[] = [
    {
      "name": "Margherita Pizza",
      "category": "entree",
      "price": 12.99,
      "vegetarian": true,
      "soldOut": false
    },
    {
      "name": "Pepperoni Pizza",
      "category": "entree",
      "price": 14.99,
      "vegetarian": false,
      "soldOut": false
    },
    {
      "name": "Garlic Bread",
      "category": "sides",
      "price": 5.99,
      "vegetarian": true,
      "soldOut": false
    },
    {
      "name": "Buffalo Wings",
      "category": "sides",
      "price": 8.99,
      "vegetarian": false,
      "soldOut": false
    },
    {
      "name": "Chocolate Lava Cake",
      "category": "dessert",
      "price": 6.49,
      "vegetarian": true,
      "soldOut": false
    },
    {
      "name": "Caesar Salad",
      "category": "sides",
      "price": 7.99,
      "vegetarian": false,
      "soldOut": true
    },
    {
      "name": "Vegetable Pizza",
      "category": "entree",
      "price": 13.99,
      "vegetarian": true,
      "soldOut": false
    }
  ]
}
