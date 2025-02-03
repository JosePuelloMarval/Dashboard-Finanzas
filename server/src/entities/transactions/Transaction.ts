import { 
    Column, 
    Entity, 
    CreateDateColumn,
    PrimaryGeneratedColumn, 
    ManyToOne,
    BaseEntity
} from 'typeorm';
import { User } from '../users/User';
import { Category } from '../categories/Category';
import { PaymentMethod } from '../paymentMethods/PaymentMethod';

@Entity()
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @ManyToOne(() => User, user => user.id, { nullable: false, onDelete: 'CASCADE' })
    user!: User;

    @ManyToOne(() => Category, category => category.id, { nullable: false, onDelete: 'CASCADE' })
    category!: Category;

    @ManyToOne(() => PaymentMethod, paymentMethod => paymentMethod.id, { nullable: false, onDelete: 'CASCADE' })
    paymentMethod!: PaymentMethod;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    amount!: number;

    @Column({ type: 'enum', enum: ['ingreso', 'gasto'], nullable: false })
    type!: 'ingreso' | 'gasto';

    @Column({ type: 'text', nullable: true })
    description?: string;

    @CreateDateColumn()
    createdAt?: Date;
}
