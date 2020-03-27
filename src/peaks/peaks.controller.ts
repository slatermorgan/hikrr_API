import { Controller, Get, Body, Query, ValidationPipe, Param, UsePipes, ParseIntPipe } from '@nestjs/common';
import { CreatePeakDto } from './dto/create-peak.dto';
import { PeaksService } from './peaks.service';
import { Peak } from './peak.entity';
import { GetPeaksFilterDto } from './dto/get-peaks-filter.dto';

@Controller('peaks')
export class PeaksController {
    constructor(private peaksService: PeaksService) {}

    @Get()
    getPeaks(@Query(ValidationPipe) filterDto: GetPeaksFilterDto): Promise<Peak[]> {
        return this.peaksService.getPeaks(filterDto);
    }

    @Get('/:id')
    getPeaksById(@Param('id', ParseIntPipe) id: number): Promise<Peak> {
        return this.peaksService.getPeakById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createPeakDto: CreatePeakDto): Promise<Peak> {
        return this.peaksService.createPeak(createPeakDto);
    }

}
