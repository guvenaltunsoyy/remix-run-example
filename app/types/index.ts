export type MeetupModel = {
    name: string,
    date: Date,
    duration: number,
    desc: string,
}

export interface MeetupProps {
    meetup: MeetupModel;
}
