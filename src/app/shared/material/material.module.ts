import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule
  ],
  exports:[
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
