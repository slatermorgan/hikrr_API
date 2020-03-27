import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Peak extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    region: string;

    @Column()
    parent: string;

    @Column()
    classification: string;

    @Column()
    metres: number;

    @Column()
    feet: number;

    @Column()
    gridref: string;

    @Column()
    gridref10: string;

    @Column()
    colgridref: string;

    @Column()
    colheight: number;

    @Column()
    drop: number;

    @Column()
    feature: string;

    @Column()
    observations: string;

    @Column()
    survey: string;

    @Column()
    revision: string;

    @Column()
    comments: string;

    @Column()
    map50: string;

    @Column()
    map25: string;

    @Column()
    xcoord: number;

    @Column()
    ycoord: number;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    country: string;
}