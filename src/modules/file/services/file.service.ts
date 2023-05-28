import { Injectable, NotFoundException } from '@nestjs/common';
import { S3Service } from './s3.service';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { File } from '../schemas/file.schema';

@Injectable()
export class FileService {
  constructor(
    private readonly s3Service: S3Service,
    @InjectModel(File.name) private readonly fileModel: Model<File>,
  ) {}

  async uploadFile(
    file: Buffer,
    contentType: string,
    resourceType: string,
    resourceId: Types.ObjectId,
    fileName: string,
   
  ) {
    const { url, key } = await this.s3Service.upload(
      file,
      `${resourceType}/${resourceId}/${fileName}-${new Date().toISOString()}`,
      contentType
    );
    const createdFile = await this.fileModel.create({
      url,
      key,
      resourceType: resourceType,
      resourceId: resourceId,
    });
    return createdFile;
  }

  async getFileById(id: Types.ObjectId) {
    const file = await this.fileModel.findOne({ _id: id });
    if (!file) {
      throw new NotFoundException('File with this id does not exist');
    }
    return file;
  }

  async getFileByKey(key: string) {
    const file = await this.fileModel.findOne({ key });
    if (!file) {
      throw new NotFoundException('File with this key does not exist');
    }
    return file;
  }

  async deleteFileById(id: Types.ObjectId) {
    const file = await this.fileModel.findOne({ _id: id });
    if (!file) {
      throw new NotFoundException('File with this id does not exist');
    }
    await this.s3Service.delete(file.key);
    await this.fileModel.deleteOne({ _id: id });
  }

  async deleteFileByKey(key: string) {
    const file = await this.fileModel.findOne({ key });
    if (!file) {
      throw new NotFoundException('File with this key does not exist');
    }
    await this.s3Service.delete(file.key);
    await this.fileModel.deleteOne({ key });
  }
}
