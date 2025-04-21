import { IsNumberString, IsOptional } from "class-validator";

export class searchDto{


    @IsOptional()
    @IsNumberString()
    readonly offset?: number;

    @IsOptional()
    @IsNumberString()
    readonly limit?: number;
    




}