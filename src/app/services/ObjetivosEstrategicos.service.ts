import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export type objetivosEstrategicos = {
  objetivoEstrategico: string;

}; 
export type objetivosOperacionais = {
  objetivoOperacional: string;
}; 

@Injectable({
  providedIn: 'root'
})

export class ObjetivosEstrategicosService {
  criarObjetivoEstrategico(objetivo: objetivosEstrategicos) {
    throw new Error('Method not implemented.');
  }
  criarObjetivoOperacional(objetivo: objetivosOperacionais) {
    throw new Error('Method not implemented.');
  }
  apiUrl = 'http://localhost:3000/riscos';
  constructor(private http: HttpClient) { }

  pegarObjetivos(): Observable<objetivosEstrategicos[]> {
    return this.http.get<objetivosEstrategicos[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erro ao buscar os objetivos estratégicos:', error);
        return throwError(error);
      })
    );
  }

  criarObjetivosEstrategicos(objetivos : objetivosEstrategicos){
    return this.http.post(this.apiUrl, objetivos);
  }
  criarObjetivosOperacionais(objetivos : objetivosOperacionais){
    return this.http.post(this.apiUrl, objetivos);
  }
}