import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    ManyToOne,
    BaseEntity
} from 'typeorm';
import { User } from '../users/User';

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column({ nullable: false })
    name!: string;

    @Column({ type: 'enum', enum: ['ingreso', 'gasto'], nullable: false })
    type!: 'ingreso' | 'gasto';

    @ManyToOne(() => User, user => user.id, { nullable: false, onDelete: 'CASCADE' })
    user!: User;
}
