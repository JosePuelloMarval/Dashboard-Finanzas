import { 
    Column, 
    Entity, 
    CreateDateColumn,
    UpdateDateColumn, 
    PrimaryGeneratedColumn,
    BaseEntity,

} from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id?: string

    @Column({ 
        nullable: false,
    })
    name?: string

    @Column({
        nullable: false
    })
    last_name?: string

    @Column({
        nullable: false,
        unique: true
    })
    email?: string

    @Column({
        nullable: false
    })
    password?: string

    @Column({
        nullable: false
    })
    phone?: string

    @Column({
        default: true,
        nullable: false
    })
    active?: boolean

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updatedAt?: Date
}