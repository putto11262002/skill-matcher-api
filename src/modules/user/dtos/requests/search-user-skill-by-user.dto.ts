import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsIn, IsOptional, IsString } from "class-validator";
import { USER_SKILL_ROLE } from "../../constants/user-skill.constant";
import { SearchDto } from "../../../../common/dtos/requests/search.dto";
import { Types } from "mongoose";
import { Transform, Type } from "class-transformer";
import { toMongoObjectId } from "../../../../common/helpers/dto.helper";

export class SearchUserSkillByUserDto  extends SearchDto {

    @ApiProperty()
    @IsOptional()
    @IsArray()
    @IsString({each: true})
    @Transform(({value}) => value.split(','))
    skills?: string[]

    @ApiProperty()
    @IsOptional()
    @IsIn(Object.values(USER_SKILL_ROLE))
    role?: string;



    constructor(pageNumber: number, pageSize: number, role: string){
        super(pageNumber, pageSize)
        this.role = role;
    }

}