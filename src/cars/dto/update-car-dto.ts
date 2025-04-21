import { IsString, IsInt, Max, Min, min, IsOptional } from "class-validator";

export class UpdateDto{
    @IsOptional()
    @IsString()
    readonly brand?: string;


    @IsOptional()
    @IsString({message: "El modelo es obligatorio"})
    @Min(3)
    @Max(10)
    readonly model?: string;


    @IsOptional()
    @IsInt({message: "El año debe ser un numero entero"})
    @Min(2000)
    @Max(2025)
    readonly year?: number;
}