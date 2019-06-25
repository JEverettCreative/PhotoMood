import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import Dummy from "../dummyaccount.json";
import { SideTaskBarNew, formListItem } from "../components/SideTaskBar";


class UserHome extends Component {

    // User data stored in state to pull from for props like avatar
    state = {
        Dummy
    }

    render () {
        return (
        <div>
            <NavBar>
                <Button style={{ display: "inline" }}>
                    Account
                </Button>
            </NavBar>
            <Wrapper>
                {this.state.Dummy.map(Dummy => (
                    <Avatar
                    id={Dummy.id}
                    key={Dummy.id}
                    name={Dummy.name}
                    avatar={Dummy.avatar}
                    />
                ))}
                <SideTaskBarNew 
                    text="Prop List"
                />


            </Wrapper>
        </div>
        )
    }
}

export default UserHome;