import { Peak } from "./peak.entity";
import { EntityRepository, Repository } from "typeorm";
import { GetPeaksFilterDto } from "./dto/get-peaks-filter.dto";
import { CreatePeakDto } from "./dto/create-peak.dto";

@EntityRepository(Peak)
export class PeakRepository extends Repository<Peak> {
    async getPeaks(filterDto: GetPeaksFilterDto): Promise<Peak[]> {
        const { search } = filterDto;
        const query = this.createQueryBuilder('peak');

        if (search) {
            query.andWhere(
                '(peak.name LIKE :search OR' +
                'peak.comments LIKE :search' +
                'peak.parent LIKE :search)',
                {search: `%${search}%`}
            );
        }

        const peaks = await query.getMany();
        return peaks;
    }

    async createPeak(createPeakDto: CreatePeakDto): Promise<Peak> {

        const peak = new Peak();

        peak.name = createPeakDto.name; // required
        peak.region = createPeakDto.region;
        peak.parent = createPeakDto.parent;
        peak.classification = createPeakDto.classification;
        peak.metres = createPeakDto.metres; // required
        peak.feet = createPeakDto.feet; // required
        peak.gridref = createPeakDto.gridref;
        peak.gridref10 = createPeakDto.gridref10;
        peak.colgridref = createPeakDto.colgridref;
        peak.colheight = createPeakDto.colheight;
        peak.drop = createPeakDto.drop;
        peak.feature = createPeakDto.feature;
        peak.observations = createPeakDto.observations;
        peak.survey = createPeakDto.survey;
        peak.revision = createPeakDto.revision;
        peak.comments = createPeakDto.comments;
        peak.map50 = createPeakDto.map50;
        peak.map25 = createPeakDto.map25;
        peak.xcoord = createPeakDto.xcoord;
        peak.ycoord = createPeakDto.ycoord;
        peak.latitude = createPeakDto.latitude;
        peak.longitude = createPeakDto.longitude;
        peak.country = createPeakDto.country;

        await peak.save();

        return peak;
    }
}