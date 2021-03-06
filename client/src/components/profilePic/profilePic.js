import React, { Component, Fragment } from "react";
import { Button } from 'react-materialize'
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { USER } from "../../utils";
import { Link } from "react-router-dom";
import "./profilePic.css";

class profilePic extends Component {
    state = {
        profilePic:'',
        file: null,
        isLoggedIn: sessionStorage.isLoggedIn,
        userId: sessionStorage.userId,
        userAc:[]
    };

    onDrop= async files =>{
        this.setState({file:files[0]});
    };
    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    submit = async () => {
        const { file} = this.state;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'vdurtdks');

        const response = await axios.post(
            'https://api.cloudinary.com/v1_1/phamjosi/image/upload', formData,
        );
        
            USER.updateUser( this.state.userId,{
                profilePic:response.data.public_id

            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        
        this.forceUpdate()
        console.log(response.data.public_id)
    }
    

    // state ={
    //     selectedFile: null
    // }
    // fileSelectedHandler = event => {
    //     this.setState({
    //         selectedFile: event.target.files[0]
    //     })
    // }

    // fileUploadHandler = () =>{
    //     const fd = new FormData();
    //     fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    //     console.log(this.state.selectedFile.name)
    //     axios.post('',fd)
    //         .then(res=>{
    //             console.log(res);
    //         })
    //         console.log(this.state.selectedFile)
    // }

    render() {
        return (
            <Fragment>
                    <div> 
                        <input name='name' onChange={this.onChange} value={this.state.name} />
                        <Dropzone onDrop={this.onDrop}>
                            <p>Drop file here</p>
                        </Dropzone>
                        <Button  onClick={this.submit}>
                        <Link to={"/profile"} >Save Changes</Link>
                        </Button>
                    </div>

                {/* <div className="App">
                <input type="file" onChange={this.fileSelectedHandler}/>
                <button onClick={this.fileUploadHandler}>Upload</button>
                </div> */}
            </Fragment>

        )
    }
}

export default profilePic