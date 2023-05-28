import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class RelatedSkillsDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    @IsString({each: true})
    relatedSkills: string[]
}