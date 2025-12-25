export interface PersonData {
  id: string,
  name: string,
  age: number,
  transactionIdList?: string[]
}

export interface PersonCreateRequest {
  name: string,
  age: number
}