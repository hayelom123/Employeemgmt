export type user={
    Name: string;
    dateOfBirth?: string;
    gender?: string;
    salary?: number;
    id:string,
}

interface storeType{
    users:user[]
}
export default storeType;