import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { default as config, configValidation } from 'src/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: configValidation,
    }),
    MongooseModule.forRoot(new ConfigService().get<string>('DATABASE_URI')),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
