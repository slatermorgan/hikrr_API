import { IsNotEmpty, IsOptional} from "class-validator";

export class CreatePeakDto {
    @IsNotEmpty()
    name: string;

    @IsOptional()
    region: string;

    @IsOptional()
    parent: string;

    @IsOptional()
    classification: string;

    @IsNotEmpty()
    metres: number;

    @IsNotEmpty()
    feet: number;

    @IsOptional()
    gridref: string;

    @IsOptional()
    gridref10: string;

    @IsOptional()
    colgridref: string;

    @IsOptional()
    colheight: number;

    @IsOptional()
    drop: number;

    @IsOptional()
    feature: string;

    @IsOptional()
    observations: string;

    @IsOptional()
    survey: string;

    @IsOptional()
    revision: string;

    @IsOptional()
    comments: string;

    @IsOptional()
    map50: string;

    @IsOptional()
    map25: string;

    @IsOptional()
    xcoord: number;

    @IsOptional()
    ycoord: number;

    @IsOptional()
    latitude: number;

    @IsOptional()
    longitude: number;

    @IsOptional()
    country: string;
}
