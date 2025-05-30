import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
     MatToolbarModule,
     MatSidenavModule, 
     MatIconModule, 
     RouterLink, 
     MatButtonModule,
     MatTooltipModule,
     MatDialogModule,
     MatInputModule,
     MatFormFieldModule,
     MatDatepickerModule,
     MatNativeDateModule,
     FormsModule,
     AsyncPipe,
     MatCardModule,
     MatMenuModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);
  title = 'simple-crm';
}
