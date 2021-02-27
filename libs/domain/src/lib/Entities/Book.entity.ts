
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    id?: number
    
    @Column()
    name: string

    @Column({ default: true })
    isActive: boolean;
}