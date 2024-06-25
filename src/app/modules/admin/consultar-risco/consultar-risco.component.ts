import { Component, ApplicationModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule, MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { fuseAnimations } from '@fuse/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ObjetivosEstrategicosService, objetivosEstrategi } from 'app/services/ObjetivosEstrategicos.service';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'consultarRisco',
  standalone: true,
  imports: [
    ApplicationModule,
    MatCommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatOptionModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatTableModule,
    FuseHighlightComponent,
    MatListModule,
    FormsModule,
    CommonModule

  ],
  templateUrl: './consultar-risco.component.html',
  styleUrl: './consultar-risco.component.scss',
  animations: fuseAnimations,
})


export class ConsultarRiscoComponent implements OnInit {


  objetivosEstrategicos: objetivosEstrategi[] = [];
  errorMessage: string = '';
  objetivoEstrategico : string = '';

  constructor(private objetivosEstrategicosService: ObjetivosEstrategicosService) { }

  ngOnInit(): void {
    this.objetivosEstrategicosService.pegarObjetivos().subscribe(
      (data: objetivosEstrategi[]) => {
        this.objetivosEstrategicos = data;
      },
      (error) => {
        this.errorMessage = 'Ainda não possui objetivos estratégicos cadastrados!';
        console.error('Erro ao carregar os objetivos estratégicos:', error);
      }
    );
  }

  salvarObjetivo() {
    const objetivo: objetivosEstrategi = {
      objetivoEstrategico: this.objetivoEstrategico,

    };

    this.objetivosEstrategicosService.criarObjetivos(objetivo).subscribe(
      (response) => {

      },
      (error) => {
        console.error('Erro ao Criar Usuario:', error);
      }
    );
  }
}

