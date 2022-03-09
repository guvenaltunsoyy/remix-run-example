import {LoaderFunction, useLoaderData} from "remix";
import {MeetupModel} from "~/types";
import {Meetup} from "~/components/Meetup";
import {Grid, Typography} from "@mui/material";
import {getMeetups} from "~/apis/meetup";

export const loader: LoaderFunction = async () => {
    const meetups: Array<MeetupModel> = await getMeetups();
    console.log('i am running on server')
    
    return meetups
};

export default function Meetups() {
    const meetups = useLoaderData();
    console.log('i am running on client')
    return (
        <main>
            <Grid container sx={{gap: '50px', width: '100%'}} direction={"row"} alignItems={'flex-start'}>
                <Grid container spacing={2} direction={"row"} maxWidth={"sm"}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Typography variant={"h5"}>
                            Upcoming Meetups
                        </Typography>
                    </Grid>
                    {
                        meetups?.filter((meetup: MeetupModel) => new Date(meetup?.date).getTime() > new Date().getTime())?.map((meetup: MeetupModel) => (
                            <Grid item key={meetup.name} xs={12} md={6} sm={6}><Meetup meetup={meetup}/></Grid>
                        ))
                    }
                </Grid>
                <Grid container spacing={2} direction={"row"} maxWidth={"sm"}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Typography variant={"h5"}>
                            Past Meetups
                        </Typography>
                    </Grid>
                    {
                        meetups?.filter((meetup: MeetupModel) => new Date(meetup?.date).getTime() < new Date().getTime())?.map((meetup: MeetupModel) => (
                            <Grid item key={meetup.name} xs={12} md={6} sm={6}><Meetup meetup={meetup}/></Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </main>
    );
}
