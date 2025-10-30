import { DataType } from "../enums/dataType";


export const DealTypes = {
  id: DataType.STRING,
  hs_object_id: DataType.STRING,
  dealname: DataType.STRING,
  amount: DataType.NUMBER,
  pipeline: DataType.STRING,
  dealstage: DataType.STRING,
  created_at: DataType.DATE,
  closed_at: DataType.DATE,
  last_modified: DataType.DATE,
  archived: DataType.BOOLEAN,
  url: DataType.STRING,
  is_closed: DataType.BOOLEAN,
  days_open: DataType.NUMBER,
  month: DataType.MONTH,
  year: DataType.YEAR,
};

export const LeadTypes = {
  id: DataType.STRING,
  hs_object_id: DataType.STRING,
  firstname: DataType.STRING,
  lastname: DataType.STRING,
  email: DataType.STRING,
  created_at: DataType.DATE,
  last_modified: DataType.DATE,
  lifecyclestage: DataType.STRING,
  archived: DataType.BOOLEAN,
  url: DataType.STRING,
  month: DataType.MONTH,
  year: DataType.YEAR,
};

