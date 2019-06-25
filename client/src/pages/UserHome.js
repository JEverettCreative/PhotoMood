import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import Dummy from "../dummyaccount.json";
import { SideTaskBarNew, FormListItem } from "../components/SideTaskBar";
import CategoryButton from "../components/CategoryButton";


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
            <div className="row">
                <div className="col-md-3">
                    {this.state.Dummy.map(Dummy => (
                        <Avatar
                        id={Dummy.id}
                        key={Dummy.id}
                        name={Dummy.name}
                        avatar={Dummy.avatar}
                        />
                    ))}
                    <SideTaskBarNew>
                        <FormListItem 
                        text="Prop List"/>
                        <FormListItem 
                        text="Equipment List"/>
                        <FormListItem 
                        text="Wardrobe List"/>
                    </SideTaskBarNew> 
                </div>
                <div className="col-md-8" style={{ padding: 0 }}>
                     <div className="row" style={{ margin: 0 }}>
                        <CategoryButton
                            backgroundImage="./Imgs/Landing_InfoRight_1.png"
                            title="Current Projects"
                            />
                            <CategoryButton
                            backgroundImage="./Imgs/Landing_InfoRight_1.png"
                            title="Albums"
                            />
                    </div>
                    <div className="row" style={{ margin: "0 auto" }}>
                    <CategoryButton
                            backgroundImage="./Imgs/Landing_InfoRight_1.png"
                            title="Current Projects"
                            />
                            <CategoryButton
                            backgroundImage="./Imgs/Landing_InfoRight_1.png"
                            title="Albums"
                            />
                    </div>    
                </div>
            </div>
        </div>
        )
    }
}

export default UserHome;