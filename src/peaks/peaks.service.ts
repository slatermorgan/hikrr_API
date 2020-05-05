import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PeakRepository } from './peaks.repository';
import { GetPeaksFilterDto } from './dto/get-peaks-filter.dto';
import { Peak } from './peak.entity';
import { CreatePeakDto } from './dto/create-peak.dto';
import {paginate, Pagination, IPaginationOptions} from 'nestjs-typeorm-paginate';

@Injectable()
export class PeaksService {
    constructor(
        @InjectRepository(PeakRepository)
        private peakRepository: PeakRepository
    ) {}

    getPeaks(
        search: string,
        take: number,
        skip: number
    ): Promise<Peak[]> {
        return this.peakRepository.getPeaks(
            search,
            take,
            skip
        );
    }

    async getPeakById(id: number): Promise<Peak> {
        const peak = await this.peakRepository.findOne(id);

        if (!peak) {
            throw new NotFoundException(`Peak with Id ${id} not found`);
        }

        return peak;
    }

    createPeak(createPeakDto: CreatePeakDto): Promise<Peak> {
        return this.peakRepository.createPeak(createPeakDto);
    }
}
