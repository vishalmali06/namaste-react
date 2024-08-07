
import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dumy",
                location: "Default",
                contact: "",
                avatar_url: "Dumy photo"
            }
        }

    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/vishalmali06");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
    }

    render() {
        const { name, location, login, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact: {login}</h4>
            </div>
        )
    }
}

export default UserClass;