export interface ITestData {
    id: number
    settlement: string | null
    zipcode: string | null
    address: string | null
    active: boolean
    szeaz: string
    code: string
    name: string
    from?: string
}

export interface IUserRole {
    id: number
    code: string
    name: string,
    dataownerid: number
    status: boolean
    typeid: number
    groupid: number
    inheritable: boolean
    kioszthato: boolean
}

export interface IDetailedUserRole extends IUserRole {
    dataowner?: {name: string}
    group?: {name: string}
    type?: {name: string}
}
