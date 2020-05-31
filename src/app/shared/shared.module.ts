import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { SharedState } from './store/shared.state';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';


@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([SharedState]),
  ],
  declarations: [ImageUploadComponent],
  exports: [ImageUploadComponent]
})
export class SharedModule { }
