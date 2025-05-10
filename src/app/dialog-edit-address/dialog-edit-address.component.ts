import { Component } from '@angular/core';
import { User } from '../../models/user.class';
import { MatFormField, matFormFieldAnimations, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatFormField,
     MatLabel,
     CommonModule, 
     FormsModule, 
     MatButtonModule,
     MatInputModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatDialogModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {

constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

saveUser() {
throw new Error('Method not implemented.');
}
  user!: User;

}
