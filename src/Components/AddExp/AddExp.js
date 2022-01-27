import React, { useRef } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState } from 'react';

const AddExp = () => {
    const date = new Date().toISOString().slice(0, 10);
    const [img, setImg] = useState(''); 

    const { addedBy } = useParams();
    const titleRef = useRef();
    const catRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();
    const locationRef = useRef();

    const handleImageUpload = (e) => {
        const imageData = new FormData();
        imageData.set('key', '1f47f49451ca0354bf8a45a99ba34a24');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
            setImg(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });
        e.preventDefault();
    }

    const handleAddOffer = e => {
        const title = titleRef.current.value;
        const category = catRef.current.value;
        // const img = imgRef.current.value;
        const desc = descRef.current.value;
        const price = priceRef.current.value;
        const location = locationRef.current.value;

        const newUser = {title, category, img, desc, price, location, addedBy, date};
        fetch('https://glacial-springs-97945.herokuapp.com/add-experience', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                document.getElementById('success').style.display = 'block';
                e.target.reset();
            }else{
                document.getElementById('error').style.display = 'block';
            }
        })

        e.preventDefault();
    }
    return (
        <>
            <section className="login">
                <div className="text-center mb-3">
                    <p style={{color: 'green', display: 'none'}} id="success">Successfully added an offer!</p>
                    <p style={{color: 'red', display: 'none'}} id="error">There is a problem adding the offer!</p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="login-form bg-tag-1">
                        <div className="text-center">
                            <h2 className="mt-3 text-center reg-28">Add your Experience</h2>
                        </div>
                        <form className="form" onSubmit={handleAddOffer}>
                            <div className="inputs my-4">
                                <div className="input-field">
                                    <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit--14" type="text" ref={titleRef} name="title" placeholder="Enter Post Title" autoComplete="on" required/>
                                    <div className="input-icon">
                                        <i class="fa fa-pencil-square-o i-envelope" aria-hidden="true"></i>
                                    </div>
                                </div>

                                <div className="input-field my-3">
                                    <input type="text" ref={catRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="cat" placeholder="Enter Category: popular, camping etc." autoComplete="on" required/>
                                    <div className="input-icon">
                                        <i class="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                    </div>
                                </div>
                                
                                <span className="lit--14">Upload an image:</span>
                                <div className="input-field mb-3">
                                    <input type="file" className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="img" multiple={false} onChange={handleImageUpload} placeholder="Enter Post Image"/>
                                    <div className="input-icon">
                                        <i className="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                    </div>
                                </div>

                                <div className="input-field my-3">
                                    <input type="text" ref={priceRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="price" placeholder="Enter Post Starting Price" autoComplete="on" required/>
                                    <div className="input-icon">
                                        <i class="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                    </div>
                                </div>

                                <div className="input-field my-3">
                                    <input type="text" ref={locationRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="price" placeholder="Enter Location" autoComplete="on" required/>
                                    <div className="input-icon">
                                        <i class="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                    </div>
                                </div>

                                <div className="input-field my-3">
                                    <textarea rows="4" cols="40" ref={descRef} className="px-4 py-3 mt-1 mb-2 text-black border border-transparent rounded lit--14" name="desc" placeholder="Enter Post Description" autoComplete="on" required></textarea>
                                    <div className="input-icon">
                                        <i class="fa fa-pencil-square-o i-key" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="signin-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddExp;