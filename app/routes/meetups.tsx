import {Link, Outlet} from "remix";
import {Button, Typography} from "@mui/material";

export default function Index() {
    return (
        <main>
            <Typography variant={'h4'} mb={4}>Meetups</Typography>
            <Link to={'/meetups/new'}>
                <Button>
                    Create Meetup
                </Button>
            </Link>
            <br/>
            <Outlet/>
        </main>
    );
}
