export interface RootObject {
    complete: FamousPersonDetail[];
    //tiny: FamousPeople[];
}
/*export interface FamousPeople {
    name: string;
    invented: string;
    year: string;
}*/

export interface FamousPersonDetail {
    firstName: string;
    lastName: string;
    innovation: string;
    year: string;
}
