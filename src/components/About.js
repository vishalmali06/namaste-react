import UserContext from "../../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() { }

    render() {

        return (
            <div>
                <h1>About Us</h1>
                <h2>This is About Componet</h2>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <UserClass name={'First'} location={"Pune (class)"} />
            </div>
        )
    }
}

export default About;