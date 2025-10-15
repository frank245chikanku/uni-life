import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDto {
    @IsOptional()
    @IsString()
    contact?: string;

    @IsOptional()
    @IsString()
    link?: string;

    @IsNotEmpty()
    @IsString()
    address: string;   

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    constructor(q: CreateDto) {
        this.contact = q.contact;
        this.link = q.link;
        this.address = q.address;
        this.title = q.title;
        this.description = q.description;
    }
}

export class UpdateDto {
    @IsOptional()
    @IsString()
    contact?: string;

    @IsOptional()
    @IsString()
    link?: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsString()
    title?: string;


    @IsOptional()
    @IsString()
    description?: string;



    constructor(q: UpdateDto) {
        this.contact = q.contact;
        this.link = q.link;
        this.address = q.address;
        this.title = q.title;
        this.description = q.description;
    }
}