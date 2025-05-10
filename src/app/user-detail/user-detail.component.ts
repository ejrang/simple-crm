import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { collection, collectionData, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { User } from '../../models/user.class';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule,
     CommonModule,
     MatIcon,
     MatMenuModule,
     MatButtonModule,
     DialogEditAddressComponent
   ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
editDetail() {
throw new Error('Method not implemented.');
}
  routeSub: any;
  userId: any;
  user$: User = new User({});
  docSnap: any
  constructor(private route: ActivatedRoute,
     private firestore: Firestore
     , public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    this.userId = this.route.snapshot.paramMap.get('id');
    const docRef = doc(this.firestore, "users", this.userId);
    this.docSnap = await getDoc(docRef);
    this.user$ = this.docSnap.data() 

      console.log("Document data:", this.docSnap.data());
   }

   editMenu(){
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user$;

  }

   editUserDetail(){
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = this.user$;
   }


}
