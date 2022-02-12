import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentModeratorPage } from './content-moderator.page';

const routes: Routes = [
  {
    path: '',
    component: ContentModeratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentModeratorPageRoutingModule {}
