import { Module } from '@nestjs/common';
import { PeaksModule } from './peaks/peaks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [PeaksModule, TypeOrmModule.forRoot(typeOrmConfig), AuthModule]
})
export class AppModule {}
