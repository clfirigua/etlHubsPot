export interface StepContext<TData = any, TmetaData = any>{
  data: TData;
  metadata?: TmetaData;    
  errors?: string[];
}

export interface StepBase {
  name: string;
  execute(context: StepContext<any,any>): Promise<StepContext>;
}