import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="container">
                <h3>what is the difference between authentication and authorization?</h3>
                <p><b>Answer:</b><br />
                    <strong><i>Authentication:</i></strong>
                    1.Authentication verifies who the user is. <br />
                    2.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. <br />
                    3.Authentication is the first step of a good identity and access management process. <br />
                    4.Authentication is visible to and partially changeable by the user. <br />
                    <br />
                    <br />
                    <strong><i>Authorization:</i></strong>
                    1.Authorization determines what resources a user can access. <br />
                    2.Authorization works through settings that are implemented and maintained by the organization. <br />
                    3.Authorization always takes place after authentication. <br />
                    4.Authorization isn’t visible to or changeable by the user. <br />

                </p>

                <h3>why are you using firebase? </h3>
                <p><strong>Answer:</strong> The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                <h3>what other options do you have implement authentication?</h3>
                <p><strong>Answer:</strong>Password-based authentication. Passwords are the most common methods of authentication. <br />
                    Multi-factor authentication. <br />
                    Certificate-based authentication. <br />
                    Biometric authentication. <br />
                    Token-based authentication.</p>
                <h3>what other services does firebase provide other than authentication?</h3>
                <p><strong>Answer:</strong><br />
                    Cloud Firestore
                    Cloud Functions <br />
                    Authentication <br />
                    Hosting <br />
                    Cloud Storage <br />
                    Google Analytics <br />
                    Predictions <br />
                    Cloud Messaging <br />
                    Dynamic Links <br />
                    Remote Config </p>
            </div>



        </div>
    );
};

export default Blogs;