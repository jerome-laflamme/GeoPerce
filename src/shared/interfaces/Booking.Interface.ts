export interface BookingInterface {
    id: string;
    equipment:string;
    equipment_length: number;
    renter:{
        name:string;
        email:string;
        phone:string;
    }
    dates:{
        from:string;
        to:string;
    }
    price:{
        sub:number;
        gst:number;
        qst:number;
        total:number;
    };
}