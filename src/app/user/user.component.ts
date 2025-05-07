import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import {MatCardModule} from '@angular/material/card';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc, collection, collectionData, Firestore, onSnapshot } from '@angular/fire/firestore';
import { log } from 'console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule,
     MatButtonModule,
     MatTooltipModule,
     MatDialogModule,
     MatCardModule,],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = new User({});
  user$;

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    const itemCollection = collection(this.firestore, 'users');
    this.user$ = collectionData(itemCollection);
  }

  ngOnInit(): void {
console.log("Hey");

console.log(this.user$);


    // console.log("Fetching users from Firestore...");
    // const usersCollection = collection(this.firestore, 'users');
    // onSnapshot(usersCollectio, (snapshot) => {
    //   snapshot.docs.forEach(doc => {
    //     console.log('User data:', doc.data());
    //   });
    // }, error => {
    //   console.error('Error fetching users from Firestore:', error);
    // });
  }

openDialog() {
this.dialog.open(DialogAddUserComponent)
}

}
