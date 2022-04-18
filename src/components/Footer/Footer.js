import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark mt-5 p-3'>

            <div className="row col-sm-12">
                <div className="col-4  text-white">
                    Phone Number: Not Available <br />

                    WhatsApp Number: Not Available <br />

                    Email Id: info.atifaslam@gmail.com <br />

                    House Address: Wazirabad, Punjab, Pakistan <br />

                    Hometown: Wazirabad, Punjab

                </div>
                <div className="col-4  text-white">
                    Residence: Wazirabad <br />

                    Office Address: Not Available <br />

                    Booking Agent Phone Number: Not Available <br />

                    Manager Phone Number: Not Available <br />

                    Management Email Id: Not Available


                </div>
                <div className="col-4  text-white">
                    <h4>For any query ,please email us!</h4>
                  <input type="email" name="email" id="" placeholder='your email' /><br />
                    <button className='mt-2 btn btn-info'>Submit</button>


                </div>

            </div>
        </div>
    );
};

export default Footer;