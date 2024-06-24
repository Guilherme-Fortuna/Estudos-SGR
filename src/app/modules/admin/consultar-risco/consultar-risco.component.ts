import { Component, ApplicationModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule, MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { fuseAnimations } from '@fuse/animations';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
];

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
    
  ],
  templateUrl: './consultar-risco.component.html',
  styleUrl: './consultar-risco.component.scss',
  animations: fuseAnimations,
})


export class ConsultarRiscoComponent {

  formFieldHelpers: string[] = [''];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

