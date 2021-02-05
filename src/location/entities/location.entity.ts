import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Location')

export class Location {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'double'})
    latitude: number;

    @Column({type:'double'})
    longitude:number;

}