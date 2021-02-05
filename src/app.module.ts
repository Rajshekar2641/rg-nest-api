import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule} from './quest/quest.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { LocationModule } from './location/location.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Raj@2641',
    database: 'test',
    entities: [User],
    synchronize: true,
  }),QuestModule, UserModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
