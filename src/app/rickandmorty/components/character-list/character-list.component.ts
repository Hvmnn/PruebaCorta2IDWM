import { Component } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { ResponseApi_GetCharacters } from '../../interfaces/ResponseAPI';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  providers: [RickandmortyService],
  selector: 'app-character-list',
  imports: [CharacterCardComponent, SearchBarComponent, HttpClientModule, CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  characters: any[] = [];
  currentPage: number = 1;

  constructor(private service: RickandmortyService)
  {

  }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.service.getAllCharacters(this.currentPage).subscribe((response: ResponseApi_GetCharacters) => {
      this.characters = response.results;
    });
  }

  nextPage(): void {
    this.currentPage++;
    this.loadCharacters();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }

  async searchCharacters(name: string): Promise<void> {
    const response = await this.service.searchCharacter(name);
    this.characters = response.results;
  }

}
