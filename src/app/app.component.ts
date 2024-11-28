import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SearchBarComponent } from './rickandmorty/components/search-bar/search-bar.component';
import { CharacterListComponent } from './rickandmorty/components/character-list/character-list.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [HttpClientModule, CharacterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'PruebaCorta2IDWM';

  ngOnInit(): void {
    initFlowbite();
  }
}
