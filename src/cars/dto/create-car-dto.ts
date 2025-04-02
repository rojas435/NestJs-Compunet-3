import { IsString, IsInt, Max, Min, min } from "class-validator";

export class CreateDto{
    @IsString()
    readonly brand: string;

    @IsString({message: "El modelo es obligatorio"})
    @Min(3)
    @Max(10)
    readonly model: string;

    @IsInt({message: "El año debe ser un numero entero"})
    @Min(2000)
    @Max(2025)
    readonly year: number;
}