import { Component, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FuseAlertComponent } from '@fuse/components/alert';


@Component({
    selector     : 'chamados',
    standalone   : true,
    templateUrl  : './chamados.component.html',
    styleUrl: './chamados.component.scss',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule, 
        MatInputModule, 
        ReactiveFormsModule,MatButtonModule, 
        MatDividerModule, 
        MatIconModule,
        FuseAlertComponent
    ],
    encapsulation: ViewEncapsulation.None,
})
export class ChamadosComponent
{

    // constructor()
    // {
    // }
    
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);

    popUp= false;


}
