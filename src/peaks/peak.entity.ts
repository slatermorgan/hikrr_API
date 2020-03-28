import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Peak extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    region: string;

    @Column({nullable: true})
    parent: string;

    @Column({nullable: true})
    classification: string;

    @Column()
    metres: number;

    @Column()
    feet: number;

    @Column({nullable: true})
    gridref: string;

    @Column({nullable: true})
    gridref10: string;

    @Column({nullable: true})
    colgridref: string;

    @Column({nullable: true})
    colheight: number;

    @Column({nullable: true})
    drop: number;

    @Column({nullable: true})
    feature: string;

    @Column({nullable: true})
    observations: string;

    @Column({nullable: true})
    survey: string;

    @Column({nullable: true})
    revision: string;

    @Column({nullable: true})
    comments: string;

    @Column({nullable: true})
    map50: string;

    @Column({nullable: true})
    map25: string;

    @Column({nullable: true})
    xcoord: number;

    @Column({nullable: true})
    ycoord: number;

    @Column({nullable: true})
    latitude: number;

    @Column({nullable: true})
    longitude: number;

    @Column({nullable: true})
    country: string;
}