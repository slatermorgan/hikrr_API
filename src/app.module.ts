import { Module } from '@nestjs/common';
import { PeaksModule } from './peaks/peaks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
    imports: [PeaksModule, TypeOrmModule.forRoot(typeOrmConfig)]
})
export class AppModule {}
