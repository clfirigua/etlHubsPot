import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity({ name: 'deals' })
@Index('ux_deals_hs_object_id', ['hsObjectId'], { unique: true })
@Index('idx_deals_closedate', ['closedate'])
export class Deal {
  @PrimaryColumn({ type: 'text' })
  id: string;

  @Column({ name: 'hs_object_id', type: 'text', nullable: true })
  hsObjectId?: string;

  @Column({ type: 'text', nullable: true })
  dealname?: string;

  @Column({ type: 'numeric', nullable: true })
  amount?: number;

  @Column({ type: 'text', nullable: true })
  pipeline?: string;

  @Column({ type: 'text', nullable: true })
  dealstage?: string;

  @Column({ name: 'created_at', type: 'timestamptz', nullable: true })
  createdAt?: Date;

  @Column({ name: 'closedate', type: 'timestamptz', nullable: true })
  closedate?: Date;

  @Column({ name: 'updated_at', type: 'timestamptz', nullable: true })
  updatedAt?: Date;

  @Column({ type: 'boolean', default: false })
  archived?: boolean;

  @Column({ type: 'text', nullable: true })
  url?: string;

  @Column({ name: 'is_closed', type: 'boolean', default: false })
  is_closed?: boolean;

  @Column({ type: 'smallint', nullable: true })
  month?: number;

  @Column({ type: 'smallint', nullable: true })
  year?: number;

  @Column({ type: 'jsonb', nullable: true })
  raw?: any;

  @CreateDateColumn({ name: 'created_at_record', type: 'timestamptz' })
  createdAtRecord!: Date;

  @UpdateDateColumn({ name: 'updated_at_record', type: 'timestamptz' })
  updatedAtRecord!: Date;
}
