import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity({ name: 'leads' })
@Index('ux_leads_hs_object_id', ['hsObjectId'], { unique: true })
@Index('idx_leads_email', ['email'])
export class Lead {
  @PrimaryColumn({ type: 'text' })
  id: string;

  @Column({ name: 'hs_object_id', type: 'text', nullable: true })
  hsObjectId?: string;

  @Column({ type: 'text', nullable: true })
  firstname?: string;

  @Column({ type: 'text', nullable: true })
  lastname?: string;

  @Column({ type: 'text', nullable: true })
  email?: string;

  @Column({ name: 'created_at', type: 'timestamptz', nullable: true })
  createdAt?: Date;

  @Column({ name: 'lastmodifieddate', type: 'timestamptz', nullable: true })
  lastmodifieddate?: Date;

  @Column({ name: 'lifecyclestage', type: 'text', nullable: true })
  lifecyclestage?: string;

  @Column({ type: 'boolean', default: false })
  archived?: boolean;

  @Column({ type: 'text', nullable: true })
  url?: string;

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
