import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// the below is all 'inline' as the above uses the standardly generated VS Code. 
// Both work, the above uses the link to other files in the folder vs having the code explicitly in the component declaration
// Warning: Inline is ONLY good for SMALL components.

// @Component({
//   selector: 'app-home',
//   template: `
//   <p class="red">
//     Inline Works!
//   </p>`,
//   styles: [`
//   .red{
//     color: red;
//   }`]
// })
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }
}
