export class Identifier {
}

export class Price {
    Type: string;    // was Type
    Base: string;
    TotalTaxes: string;
    TotalFees: string;
    TotalPrice: string;
}

export class ProductBrandPriceOption {
    Price: Price;
    ProductRef: string[];
    TermsAndConditionsRef: string;
    BrandRef: string;
}

export class FareFamilyOffering {
    Type: string;
    productSequence: number;
    id: string;
    Departure: string;
    Arrival: string;
    ProductBrandPriceOption: ProductBrandPriceOption[];
    ProductRef: string[];
    BrandRef: string[];
}

export class DefaultCurrency {
    code: string;
}

export class FareFamilyOfferings {
    Type: string;
    Identifier: Identifier;
    FareFamilyOffering: FareFamilyOffering[];
    DefaultCurrency: DefaultCurrency;
}

export class Departure {
    Type: string;
    location: string;
    date: string;
    time: string;
}

export class Arrival {
    Type: string;
    location: string;
    date: string;
    time: string;
}

export class Flight {
    Type: string;
    distance: number;
    duration: string;
    carrier: string;
    number: string;
    equipment: string;
    id: string;
    Departure: Departure;
    Arrival: Arrival;
    operatingCarrierName: string;
}

export class Flight2 {
    Type: string;
    FlightRef: string;
}

export class FlightSegment {
    sequence: number;
    Flight: Flight2;
    connectionDuration: string;
}

export class Brand {
    Type: string;
    BrandRef: string;
}

export class FlightProduct {
    segmentSequence: number[];
    classOfService: string;
    cabin: string;
    fareBasisCode: string;
    Brand: Brand;
}

export class PassengerFlight {
    passengerQuantity: number;
    passengerTypeCode: string;
    FlightProduct: FlightProduct[];
}

export class Product {
    Type: string;
    totalDuration: string;
    id: string;
    Quantity: string;
    FlightSegment: FlightSegment[];
    PassengerFlight: PassengerFlight[];
}

export class BaggageItem {
    quantity: number;
}

export class BaggageAllowance {
    Type: string;
    ProductRef: string[];
    BaggageItem: BaggageItem[];
}

export class TermsAndCondition {
    Type: string;
    validatingCarrier: string;
    id: string;
    BaggageAllowance: BaggageAllowance[];
}

export class Identifier2 {
    value: string;
}

export class BrandAttribute {
    classification: string;
    inclusion: string;
}

export class Brand2 {
    Type: string;
    name: string;
    tier: number;
    id: string;
    Identifier: Identifier2;
    BrandAttribute: BrandAttribute[];
}

export class ReferenceList {
    Type: string;
    Flight: Flight[];
    Product: Product[];
    TermsAndConditions: TermsAndCondition[];
    Brand: Brand2[];
}

export class FareFamilyOfferingsResponse {
    FareFamilyOfferings: FareFamilyOfferings;
    ReferenceList: ReferenceList[];
}

export class RootObject {
    FareFamilyOfferingsResponse: FareFamilyOfferingsResponse;
}

