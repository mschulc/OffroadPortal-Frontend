/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: car.ts                                            //
/////////////////////////////////////////////////////////////

export interface Car{
   id: number
   name: string
   mark: string
   model: string;
   year: number;
   engine: number;
   fuel: FuelType;
   description: string;
   imageUrl: string
   userId: number;
}
export enum FuelType
{
    Disel,
    Gas,
    LPG,
    Hybrid,
    Electric
}




