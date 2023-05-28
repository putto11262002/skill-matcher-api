import { Module } from "@nestjs/common";
import { S3Service } from "./services/s3.service";
import { FileService } from "./services/file.service";
import { MongooseModule } from "@nestjs/mongoose";
import { File, fileSchema } from "./schemas/file.schema";
import { S3Client } from "@aws-sdk/client-s3";
import { ConfigService } from "@nestjs/config";
import { ImageService } from "./services/image.service";

@Module({
    imports: [MongooseModule.forFeature([{name: File.name, schema: fileSchema}])],
    providers: [S3Service, FileService,  ImageService,{inject: [ConfigService], provide: 'S3_CLIENT', useFactory: async (configService: ConfigService) => new S3Client({
        region: configService.get('aws.region'),
        forcePathStyle: configService.get('aws.useLocal'),
        credentials: {
          accessKeyId: configService.get('aws.accessKeyId'),
          secretAccessKey: configService.get('aws.secretAccessKey'),
        },
        endpoint: configService.get('aws.useLocal') ? configService.get('aws.s3.endpoint') : undefined
        
      })}],
      exports: [FileService, ImageService]
    
})
export class FileModule {}