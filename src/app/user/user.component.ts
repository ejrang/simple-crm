import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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
     MatCardModule
    ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  goToUser(id: string) {
    this.router.navigate(['/user', id]);
  }
  user = new User({});
  user$;
  users: any[] = [];
  
  constructor(public dialog: MatDialog, private firestore: Firestore, private router: Router) {
    const itemCollection = collection(this.firestore, 'users');
    this.user$ = collectionData(itemCollection, { idField: 'id' }); // Include Firestore document IDs
  }

  ngOnInit(): void {
    this.user$.subscribe(users => {
      this.users = users;
    });
  }

openDialog() {
this.dialog.open(DialogAddUserComponent)
}

}


