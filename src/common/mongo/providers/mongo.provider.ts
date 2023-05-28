import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";

@Injectable()
export class MongoProvider implements MongooseOptionsFactory {
    constructor(private configService: ConfigService){}

    createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {
        return {
            uri: this.configService.get('mongo.uri'),
            ...this.configService.get('mongo.options')
        }
    }
}