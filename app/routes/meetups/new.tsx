import {ActionFunction, redirect} from "remix";

export const action: ActionFunction = async ({
                                                 request,
                                             }) => {
    const form = await request.formData();
    console.log({form});

    return redirect("/meetups");
}

export default function NewMeetup() {
    console.log("NewMeetup");
    return <div>
        <p>Add your meetup</p>
        <form method="post">
            <div>
                <label>
                    Name: <input type="text" name="name"/>
                </label>
            </div>
            <div>
                <label>
                    Duration: <input type="number" name="duration"/>
                </label>
            </div>
            <div>
                <label>
                    Description: <textarea type="number" name="desc"/>
                </label>
            </div>
            <div>
                <label>
                    Date: <input type="datetime-local" name="date"/>
                </label>
            </div>
            <div>
                <button type="submit" className="button">
                    Add
                </button>
            </div>
        </form>
    </div>
}