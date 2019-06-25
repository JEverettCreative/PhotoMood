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
                    <span><i class="fas fa-user fa-lg"></i></span>
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
                    {/* Need to return and add appropriate text here. This text belongs in Mood Board page later */}
                    <SideTaskBarNew>
                        <FormListItem 
                        text="Prop List"/>
                        <FormListItem 
                        text="Equipment List"/>
                        <FormListItem 
                        text="Wardrobe List"/>
                    </SideTaskBarNew> 
                </div>
                {/* Need to return and rename these titles appropriately, add more styling */}
                <div className="col-md-8" style={{ padding: 0 }}>
                     <div className="row-fluid d-flex" style={{ margin: 0 }}>
                        <CategoryButton
                            
                            title="Current Projects"
                            />
                            <CategoryButton
                            
                            title="Albums"
                            />
                    </div>
                    <div className="row-fluid d-flex" style={{ margin: "0 auto" }}>
                    <CategoryButton
                           
                            title="Current Projects"
                            />
                            <CategoryButton
                            
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