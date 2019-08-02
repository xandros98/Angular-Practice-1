import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test', 'https://imgp2.schaer.com/sites/default/files/styles/header/public/1967_Shakshuka%20with%20Panini%20Rolls.jpg?itok=K5gD4LJa'),
    new Recipe('A Test Recipe', 'This is just a test', 'https://imgp2.schaer.com/sites/default/files/styles/header/public/1967_Shakshuka%20with%20Panini%20Rolls.jpg?itok=K5gD4LJa')
  ];

  constructor() { }

  ngOnInit() {
  }
}
