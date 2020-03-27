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

    async createPeak(filterDto: GetPeaksFilterDto): Promise<Peak[]> {
        const { name } = filterDto;
        const query = this.createQueryBuilder('task');

        if (name) {
            query.andWhere(
                '(task.title LIKE :search OR task.description LIKE :search)',
                {search: `%${search}%`}
            );
        }
    }
}