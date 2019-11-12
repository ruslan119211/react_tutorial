import React from 'react';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className="substrate-image">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg"
                    alt="" className="user-image"/>
                <span className="name-user">Mark Zuckerberg</span>
            </div>
            <div className="about-user">
                <p>TEST</p>
                <p>TEST</p>
                <p>TEST</p>
                <p>TEST</p>
            </div>
        </div>
    );
}

export default ProfileInfo;