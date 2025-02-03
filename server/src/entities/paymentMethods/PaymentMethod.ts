import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    ManyToOne,
    BaseEntity
} from 'typeorm';
import { User } from '../users/User';

@Entity()
export class PaymentMethod extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column({ nullable: false })
    name!: string;

    @ManyToOne(() => User, user => user.id, { nullable: false, onDelete: 'CASCADE' })
    user!: User;
}
