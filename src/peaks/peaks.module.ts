import { Module } from '@nestjs/common';
import { PeaksController } from './peaks.controller';
import { PeaksService } from './peaks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeakRepository } from './peaks.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([PeakRepository])
    ],
    controllers: [PeaksController],
    providers: [PeaksService]
})

export class PeaksModule {}
