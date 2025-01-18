export type Quest = {
    id: number,
    name: string,
    time: number,
    expires: string | null, // Date is translated into ISOString
}