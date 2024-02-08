export class Activity {
  id: string
  documentNumber: string
  description: string
  activityType: string
  hours: number
  approver?: string
  status: string
  evidence: string
  createdAt: Date
  updatedAt: Date
}
