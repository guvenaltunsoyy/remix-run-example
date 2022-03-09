import {MeetupModel} from "~/types";

export const getMeetups = async (): Promise<MeetupModel[]> => {
    const response = await fetch(`https://apimocha.com/meetups/list`);
    const meetups = await response.json();
    return meetups;
};