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
  risco: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {risco: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae mauris non nisi porta lacinia.'},
  {risco: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae mauris non nisi porta lacinia.'},
  {risco: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae mauris non nisi porta lacinia.'},
  {risco: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae mauris non nisi porta lacinia.'},
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

  displayedColumns: string[] = ['risco'];
  dataSource = ELEMENT_DATA;
}

