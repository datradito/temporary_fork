// src/scripts/seed.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ProductsService } from '../products/products.service';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const products = require('../../mocks/menu_latin.js');

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const productsService = app.get(ProductsService);
  const restaurantId = 'Use an existing restaurant ID';

  console.log('Inserting products...');

  const updatedProducts = products.map((product) => ({
    ...product,
    restaurantId: restaurantId,
  }));

  console.log(updatedProducts);

  try {
    for (const product of updatedProducts) {
      await productsService.create(product);
    }
    console.log('Successfully inserted products.');
  } catch (error) {
    console.error('Failed to insert products:', error);
  } finally {
    await app.close();
  }
}

bootstrap().catch(console.error);
