import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string = '';

  onSubmit() {
    // Aqui você pode implementar a lógica para realizar a pesquisa com o valor de searchTerm
    console.log('Termo de busca:', this.searchTerm);
  }
}
