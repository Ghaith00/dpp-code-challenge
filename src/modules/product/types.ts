import { ReactNode } from 'react'

export type Data = string | number | Date | boolean | PerformanceMetrics | SafetyDurabilityTests | CTScans | BatteryCellHomologation | TemperatureToleranceTests | MaterialFile[] | BatteryCellScan

export type ProductPassportResponse = RootProductPassport[]

// Generated by this tool https://transform.tools/json-to-typescript
export interface RootProductPassport {
    id: string
    type?: string[]
    name: string
    proof?: Proof
    issuer?: string
    '@context'?: string[]
    issuanceDate?: string
    icon: ReactNode
    credentialSubject: CredentialSubject
}

export interface CredentialSubject {
    id: string
    PPAP?: PPAP
    CTScans?: CTScans
    batchUUID?: string
    cellSampleUUID?: string
    performanceMetrics?: PerformanceMetrics
    safetyDurabilityTests?: SafetyDurabilityTests
    batteryCellHomologation?: BatteryCellHomologation
    temperatureToleranceTests?: TemperatureToleranceTests
    esgScore?: string
    location?: string
    voltageMin?: string
    batteryModel?: string
    manufacturer?: string
    batteryWeight?: string
    cellChemistry?: CellChemistry
    materialFiles?: MaterialFile[]
    ratedCapacity?: string
    voltageMaximum?: string
    voltageNominal?: string
    batteryCategory?: string
    lifeCycleStatus?: string
    supplyChainFiles?: MaterialFile[]
    dueDiligenceScore?: string
    manufacturingDate?: string
    certificationFiles?: MaterialFile[]
    expectedLifetimeKm?: string
    greenhouseGasScore?: string
    manufacturingPlace?: string
    chemistryComposition?: string
    tripEnergyEfficiency?: string
    expectedLifetimeMiles?: string
    expectedLifetimeYears?: string
    maximumPowerPermitted?: string
    cycleLifeReferenceTest?: string
    originalPowerCapability?: string
    temperatureIdleStateMax?: string
    temperatureIdleStateMin?: string
    commercialWarrantyPeriod?: string
    initialDischargeCapacity?: string
    manufacturerIdentification?: string
    exhaustionCapacityThreshold?: string
}

export interface MaterialFile {
    fileUrl: string
    fileName: string
    fileSize: string
    uploadDate: string
}

export interface CellChemistry {
    anodeActiveMaterials: AnodeActiveMaterial[]
    anodeCompositionOther: AnodeActiveMaterial[]
    cathodeActiveMaterials: AnodeActiveMaterial[]
    electrolyteComposition: AnodeActiveMaterial[]
    cathodeCompositionOther: AnodeActiveMaterial[]
    recyclateContentActiveMaterials: AnodeActiveMaterial[]
}

export interface AnodeActiveMaterial {
    materialName: string
    materialWeight: number
    materialPercentageMassFraction: number
}

export interface TemperatureToleranceTests {
    operatingRange: string
    thermalStability: string
    coolingEfficiency: string
}

export interface BatteryCellHomologation {
    chargeRate: string
    energyDensity: number
    lifeExpectancy: string
}

export interface SafetyDurabilityTests {
    lifeCycle: string
    vibrationShock: string
    shortCircuitResistance: string
}

export interface PerformanceMetrics {
    energyDensity: number
    capacityRetention: string
    chargeDischargeRate: string
}

export interface CTScans {
    impurities: string
    anodeOverhang: string
    batteryCellScan: BatteryCellScan
    housingAndTheCathode: BatteryCellScan
    casingCathodeAndAnode: BatteryCellScan
    casingAndElectrodeAlignment: string
}

export interface BatteryCellScan {
    scanDate: string
    scanImage: string
    scanTitle: string
    scanImageSize: string
    QARequirementsMet: string
}

export interface PPAP {
    QAConfirmed: boolean
    approvalDate: string
}

export interface Proof {
    jws: string
    type: string
    created: string
    proofPurpose: string
    verificationMethod: string
}
  