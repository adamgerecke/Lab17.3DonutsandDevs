export interface Donut {
   count : string;
   results : string[]; 
}

export interface Result {
   id: string;
   ref: string;
   name: string;
}

export interface DonutDetail {
   id: string;
   ref : string;
   name : string;
   calories : string;
   extras : string[];
   photo : string;
   photo_attribution : string;
}