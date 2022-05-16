export default interface IExpense {
    id?: any | null,
    isActive: boolean,
    paidDate: string,
    insertDateTime: string,
    updateDateTime: string,
    title: string,
    description: string,
    cost: number,
    dueDate: string,
    paid: boolean,
    invoiceDate: string,
    servicePeriodStart: string,
    servicePeriodEnd: string,
    periodicity: string,
    paymentMethod: string,
    typableLine?: string
}