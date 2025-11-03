export interface ContactFormData {
	name: string
	email: string
	company?: string
	phone?: string
	message: string
	eventType?: string
}

export interface MeetingBooking {
	date: Date
	time: string
	duration: number
}

export interface LeadData extends ContactFormData {
	meetingBooking?: MeetingBooking
	submittedAt: Date
}

