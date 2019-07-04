import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import Dummy from "../dummyaccount.json";
import { SideTaskBarNew, FormListItem } from "../components/SideTaskBar";
import { UserHomeCategory } from "../components/CategoryButtons";
import ReactModal from "react-modal";
import { Input, DropSelect, FormButton } from "../components/FormComponents";
// import router from "../../../routes/api";
ReactModal.setAppElement('#modal');

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


class UserHome extends Component {

    // User data stored in state to pull from for props like avatar
    constructor () {
        super();
        this.state = {
          showModal: false,
          Dummy,
          projectTitle: "",
          projectType: ""
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }

    componentDidMount() {
        console.log("Component mounted");
    };

    handleOpenModal () {
        this.setState({ showModal: true });
    };

    handleCloseModal () {
        this.setState({ showModal: false });
    };

    // Handle input change and submission of modal info
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.projectTitle && this.state.projectType) {
            console.log(this.state.projectTitle + " " + this.state.projectType);
        }
        console.log("Didn't capture input");
    }

    render () {
        return (
        <div>
            <NavBar>
                <Button style={{ display: "inline" }}>
                    <Link style={{ color: "inherit" }}
                        to="/userhome"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/userhome"
                        }
                        >
                        <span><i class="fas fa-user fa-lg"></i></span>
                </Link>
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
                            <UserHomeCategory
                            
                            title="Current Projects"
                            />
                            <UserHomeCategory
                            
                            title="Public Albums"
                            />
                    </div>
                    <div className="row-fluid d-flex" style={{ margin: "0 auto" }}>
                            <UserHomeCategory
                           
                            title="Private Albums"
                            />
                            <UserHomeCategory
                            
                            title="New Project"
                            onClick={this.handleOpenModal}
                            />
                    </div> 
                    <ReactModal 
                        isOpen={this.state.showModal}
                        onRequestClose={this.handleCloseModal}
                        style={customStyles}
                        contentLabel="Sign In Modal"
                        >
                        <h3>Project Details</h3>
                        <form>
                            <Input  
                                value={this.state.projectTitle}
                                onChange={this.handleInputChange}
                                name="projectTitle"
                                label="Project Name"
                            />
                            <DropSelect 
                                value={this.state.projectType} 
                                onChange={this.handleInputChange}
                                name="projectType"
                                option1="Portrait"
                                option2="Landscape"
                                option3="Creative Concept"
                                option4="Fashion"   
                            />
                            <FormButton
                                onClick={this.handleFormSubmit}>
                                Create Project
                            </FormButton>
                        </form>
                        <button onClick={this.handleCloseModal}>Close</button>
                    </ReactModal>   
                </div>
            </div>
        </div>
        )
    }
}

export default UserHome;