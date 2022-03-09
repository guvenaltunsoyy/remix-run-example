import {makeStyles} from "@mui/styles";
import {Card, Typography} from "@mui/material";

import {MeetupProps} from "~/types";

export const Meetup = ({meetup}: MeetupProps) => {
    const classes = useStyles();
    const {name, desc, duration, date} = meetup;
    const past = new Date(date) < new Date();
    const meetupDate = new Date(date);
    const day = meetupDate.getDate();
    const month = meetupDate.toLocaleString('default', {month: 'long'});

    return (<Card className={classes.meetup}>
        <div className={classes.meetupTime}>
            <div className={past ? classes.meetupCalenderPast : classes.meetupCalenderUpcoming}>
                <Typography variant={"subtitle1"}>{month}</Typography>
                <Typography className={classes.meetupDay}>{day}</Typography>
            </div>
            <Typography variant={"subtitle2"}>
                {duration} dk
            </Typography>
        </div>
        <div className={classes.meetupInfo}>
            <Typography className={classes.meetupName}>{name}</Typography>
            <Typography className={classes.meetupSpeaker}>{desc}</Typography>
        </div>
    </Card>);
};
const useStyles = makeStyles(() => {
    return {
        meetup: {
            display: 'flex',
            flexDirection: 'row',
            padding: '10px',
        },
        meetupCalenderUpcoming: {
            width: '90px',
            height: '90px',
            backgroundColor: '#f27a1a',
            color: 'black',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        meetupCalenderPast: {
            width: '90px',
            height: '90px',
            backgroundColor: '#b5b5b5',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        meetupInfo: {
            display: 'flex',
            flexDirection: 'column',
            color: '#2C3E50',
            fontWeight: 'bold'
        },
        meetupTime: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            marginRight: '10px',
            fontWeight: 'bold'
        },
        meetupDay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            height: '55px',
            fontSize: '28px',
            backgroundColor: 'white',
            color: 'black',
        },
        meetupSpeaker: {
            color: '#666',
        },
        meetupName: {
            fontSize: '18px',
            color: '#4d8ee1',
        }
    }
});