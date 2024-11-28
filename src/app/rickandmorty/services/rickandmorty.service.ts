import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseApi_GetCharacters } from '../interfaces/ResponseAPI';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  private baseUrl: string = "https://rickandmortyapi.com/api";
  public errors: string[] = [];
  private http = inject(HttpClient);

  getAllCharacters(page: number = 1): Observable<ResponseApi_GetCharacters> {
    return this.http.get<ResponseApi_GetCharacters>(`${this.baseUrl}/character?page=${page}`);
  }

  async searchCharacter(name: string): Promise<ResponseApi_GetCharacters> {
    const url = `${this.baseUrl}/character?name=${name}`;
    const response = await this.http.get<ResponseApi_GetCharacters>(url).toPromise();
    if (!response) {
      throw new Error('No se encontraron resultados');
    }
    return response;
  }
}
