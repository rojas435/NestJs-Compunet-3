import { IsString, Max, Min } from 'class-validator';



export class CreateBrandDto {

    @IsString({message: "El nombre es obligatorio"})
    @Min(3)
    @Max(10)
    readonly name: string;
}
