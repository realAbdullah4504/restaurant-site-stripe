import React,{useState} from "react";
import {postUserDetails} from '../../../api/postUserDetails'

const Contact = () => {

    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const filteredData =
        {
            ...userDetails,
            [name]: value
        }
        //console.log(filteredData);
        setUserDetails(filteredData);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await postUserDetails(userDetails)
            console.log('data',data);
        } catch (error) {
            console.log('error',error);
        }

    }

    return (
        <section class="ftco-appointment">
            <div class="overlay"></div>
            <div class="container-wrap">
                <div class="row no-gutters d-md-flex align-items-center">
                    <div class="col-md-6 d-flex align-self-stretch">
                        <div id="map"></div>
                    </div>
                    <div class="col-md-6 appointment ftco-animate">
                        <h3 class="mb-3">Contact Us</h3>
                        <form onSubmit={handleSubmit} class="appointment-form">
                            <div class="d-md-flex">
                                <div class="form-group">
                                    <input type="text" class="form-control" 
                                    onChange={handleChange}
                                    value={userDetails.name}
                                    name='name' 
                                    placeholder="First Name" />
                                </div>
                            </div>
                            <div class="d-me-flex">
                                <div class="form-group">
                                    <input type="text" class="form-control" 
                                    onChange={handleChange}
                                    value={userDetails.email}
                                    name='email' 
                                    placeholder="Last Name" />
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea  id="" cols="30" rows="3" class="form-control" 
                                onChange={handleChange}
                                value={userDetails.message}
                                name='message' 
                                placeholder="Message">{userDetails.message}</textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Send" class="btn btn-primary py-3 px-4" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;