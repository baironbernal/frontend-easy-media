import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';
import { CardComponent } from './components/card/card.component';
import { AllComponent } from './pages/all/all.component';
import { CreateComponent } from './pages/create/create.component';
import { MyPublicationsComponent } from './pages/my-publications/my-publications.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DateSelectorComponent,
    CardComponent,
    AllComponent,
    CreateComponent,
    MyPublicationsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule
  ]
})
export class PostModule { }
