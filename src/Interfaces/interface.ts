export interface IInvoice {
  invoiceID: number;
  billFrom: {
    billFromStreetAddress: string;
    billFromCity: string;
  };
  billTo: {
    billToName: string;
    billToEmail: string;
    billToStreetAddress: string;
    billToCity: string;
  };
  billDescription: {
    descriptionDate: string;
    descriptionPaymentType: string;
    descriptionPaymentTerms: string;
    descriptionBillTitle: string;
  };
  items: IInvoiceList[];
}

export interface IInvoicePartial {
  billFromStreetAddress: string;
  billFromCity: string;
  billToName: string;
  billToEmail: string;
  billToStreetAddress: string;
  billToCity: string;
  descriptionDate: string;
  descriptionPaymentType: string;
  descriptionPaymentTerms: string;
  descriptionBillTitle: string;
}

export interface IInvoiceList {
    listProductServiceDescription: string;
    listAmount: number;
    listUnitPrice: number;
    listtotalPrice?: number;
  }
