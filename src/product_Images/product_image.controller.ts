import {
    Controller,
    Post,
    UploadedFiles,
    UseInterceptors,
  } from '@nestjs/common';
  import { FilesInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { extname } from 'path';
  
  @Controller('products')
  export class ProductsController {
    @Post('upload-images')
    @UseInterceptors(
      FilesInterceptor('images', 10, { // `images` is the field name in the form
        storage: diskStorage({
          destination: './uploads/products',
          filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = extname(file.originalname);
            const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
            cb(null, filename);
          },
        }),
        fileFilter: (req, file, cb) => {
          if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
            return cb(new Error('Only image files are allowed!'), false);
          }
          cb(null, true);
        },
      }),
    )
    uploadImages(@UploadedFiles() files: Array<Express.Multer.File>) {
      const filePaths = files.map((file) => `/uploads/products/${file.filename}`);
      return {
        message: 'Images uploaded successfully',
        files: filePaths,
      };
    }
  }
  