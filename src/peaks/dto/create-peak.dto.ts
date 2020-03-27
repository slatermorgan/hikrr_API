import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePeakDto {
    @IsNotEmpty()
    name: string;

    @IsOptional()
    region: string;

    parent: string;

    classification: string;

    metres: string;

    feet: string;

    gridref: string;

    gridref10: string;

    colgridref: string;

    colheight: string;

    drop: string;

    feature: string;

    observations: string;

    survey: string;

    revision: string;

    comments: string;

    map50: string;

    map25: string;

    xcoord: string;

    ycoord: string;

    latitude: string;

    longitude: string;

    country: string;

}
