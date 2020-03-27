import { IsOptional, IsNotEmpty } from "class-validator";

export class GetPeaksFilterDto {
    @IsOptional()
    @IsNotEmpty()
    search: string;
}