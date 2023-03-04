export interface CP {
    term: number; 
    class: string;
    credit: number; 
    description: string; 
}

export interface CPHead {
    programName: string; 
    shortName: string;
    schedule: string; 
    credential: string; 
}

export interface BreakfastMenu {
    name: string;
    price: number;
    cal: number;
}

export interface DinnerMenu{
    name: string;
    price: number;
    cal: number;
}

export interface LunchMenu{
    name: string;
    price: number;
    cal: number;
}
