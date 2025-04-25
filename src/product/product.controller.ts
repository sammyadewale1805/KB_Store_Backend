import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './product.service';
import { Product } from './product.model';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): Product[] {
    return this.productsService.getProducts();
  }
}
