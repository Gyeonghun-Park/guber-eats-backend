import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from './repositories/category.repository';
import { Restaurant } from './entities/restaurant.entity';
import { CategoryResolver, RestaurantResolver } from './restaurants.resolver';
import { RestaurantsService } from './restaurants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, CategoryRepository])],
  providers: [RestaurantResolver, CategoryResolver, RestaurantsService],
})
export class RestaurantsModule {}
