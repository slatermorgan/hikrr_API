import { Module } from '@nestjs/common';
import { PeaksController } from './peaks.controller';
import { PeaksService } from './peaks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeakRepository } from './peaks.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([PeakRepository]),
        AuthModule,
    ],
    controllers: [PeaksController],
    providers: [PeaksService]
})

export class PeaksModule {}
