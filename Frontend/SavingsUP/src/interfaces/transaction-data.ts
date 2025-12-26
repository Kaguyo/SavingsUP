export interface TransactionData {
  id: string,
  description: string,
  value: number,
  type: string,
  categoryId: string,
  personId: string
}

export interface TransactionCreateRequest {
  description: string,
  value: number,
  type: 'despesa' | 'receita',
  categoryId: string,
  personId: string
}