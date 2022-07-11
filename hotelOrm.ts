import {BaseEntity, Column , Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class hotel_csv extends BaseEntity
{
    @Column()
    name: string;
    @Column()
    cuisines:string;
    @Column()
    featured_image: string;
    @Column()
    @PrimaryGeneratedColumn()
    id:string;
}