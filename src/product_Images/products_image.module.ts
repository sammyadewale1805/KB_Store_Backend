import { Module } from '@nestjs/common';
import { ProductsController } from './product_image.controller';
import { ProductsService } from './products_image.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
