import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/ResponseAPI';

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
