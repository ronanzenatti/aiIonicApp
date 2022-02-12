import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentModeratorPageRoutingModule } from './content-moderator-routing.module';

import { ContentModeratorPage } from './content-moderator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentModeratorPageRoutingModule
  ],
  declarations: [ContentModeratorPage]
})
export class ContentModeratorPageModule {}
