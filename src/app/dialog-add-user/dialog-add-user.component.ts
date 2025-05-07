import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  user = new User({});
  birthDate: Date | undefined;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent> ,private firestore: Firestore) {}

  saveUser(){
    if (this.birthDate) {
      this.user.birthDate = this.birthDate.getTime();
    } 

    console.log(this.user);
    const usersCollection = collection(this.firestore, 'users');
    addDoc(usersCollection, this.user.toJSON())
      .then(() => {
      console.log('User successfully saved to Firebase!');
      this.dialogRef.close();
      })
      .catch((error) => {
      console.error('Error saving user to Firebase: ', error);
      });

  }

}
