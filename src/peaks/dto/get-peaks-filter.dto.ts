import { IsOptional, IsNotEmpty } from "class-validator";

export class GetPeaksFilterDto {
    @IsOptional()
    search: string;

    @IsOptional()
    @IsNotEmpty()
    take: number | null = 10;

    @IsOptional()
    @IsNotEmpty()
    skip: number | null = 0;
}