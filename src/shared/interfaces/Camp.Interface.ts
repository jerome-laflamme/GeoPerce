import type { BookingInterface } from "./Booking.Interface";

export interface CampInterface {
    id: string;
    type:{
        service:string;
        amp:number;
        length:Array<number>;
        sun:string;
    };
    bookings: BookingInterface[];
    price:number;
    position:Array<number>;
}
export type PartialCampInterface = Partial<CampInterface>;

export interface CampInterfaceAdmin {
    id: string;
    type:{
        service:string;
        amp:number;
        length:Array<number>;
        sun:string;
    };
    price:number;
    position:Array<number>;
}