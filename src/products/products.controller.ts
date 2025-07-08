import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProducts() {
    return 'This action adds a new product';
  }

  @Get()
  findAllProducts() {
    return 'This action returns all products';
  }

  @Get(':id')
  findOneProduct(@Param('id') id: string) {
    return 'This action returns a single product' + id;
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return 'This action removes a product' + id;
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: any) {
    return 'This action updates a product' + id;
  }
}
