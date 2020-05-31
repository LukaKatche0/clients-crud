import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageSnippet } from '../../models/image-snippet';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {

  @Output() imageUploaded = new EventEmitter<ImageSnippet>();

  constructor() { }

  ngOnInit(): void {
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.imageUploaded.next(new ImageSnippet(event.target.result, file));
    });

    reader.readAsDataURL(file);
  }

}
