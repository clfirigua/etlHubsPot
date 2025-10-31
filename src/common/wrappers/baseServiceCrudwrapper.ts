import { FindManyOptions, ObjectLiteral, Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

export abstract class BaseService<T extends ObjectLiteral> {
    private logger = new Logger(BaseService.name)
    protected constructor(protected readonly repo: Repository<T>) { }

    async findOne(id: any, relations: string[] = []): Promise<T | null> {
        return this.repo.findOne({ where: { id } as any, relations });
    }

    async findMany(options?: FindManyOptions<T>): Promise<T[]> {
        return this.repo.find(options);
    }

    async create(payload: Partial<T>): Promise<T> {
        const entity = this.repo.create(payload as any);
        return this.repo.save(entity as any);
    }

    async saveMany(items: Partial<T>[]): Promise<T[]> {
        try {
            if (!items.length) return [];
            const entities = this.repo.create(items as any[]);
            return this.repo.save(entities as any[]);
        } catch (error) {
            this.logger.error("BaseService.saveMany")
            throw new Error("Error al guardar masivamente los items")
        }
    }

    async update(id: any, partial: Partial<T>): Promise<T> {
        await this.repo.update(id, partial as any);
        const item = await this.findOne(id);
        if (!item) throw new Error('Entity not found after update');
        return item;
    }


}