import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  handleUploadedImages(files: Array<Express.Multer.File>) {
    const urls = files.map(file => `/uploads/products/${file.filename}`);
    return {
      message: 'Images uploaded successfully!',
      imageUrls: urls,
    };
  }
}
