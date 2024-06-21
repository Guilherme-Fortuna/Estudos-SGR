import { Component, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
    selector     : 'chamados',
    standalone   : true,
    templateUrl  : './chamados.component.html',
    styleUrl: './chamados.component.scss',
    imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
    encapsulation: ViewEncapsulation.None,
})
export class ChamadosComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
