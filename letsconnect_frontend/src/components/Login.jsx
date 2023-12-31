import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

//CLIENT ID = 1073673593500-v0lr90568pv80lovb99bdvi1cjgdfepp.apps.googleusercontent.com
//CLIENT SECRET= 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

const login = () => {

  const responseGoogle= (response) => (
     localStorage.setItem('user', JSON.stringify(response.profileObj))
    //  const (name, googleId, imageUrl) = response.profileObj;
  )


  return (
    <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video
            src={shareVideo}
            type= "video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />

         <div className="absolute flex flex-col justify-center items-center top-0 right-0 last-0 bottom-0 bg-blackOverlay">
            <div className='p-5'>
              <img src={logo} width="130px" alt="logo" />                
            </div>

            <div className='shadow-2xl'>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_API}
                render={(renderProps) => (
                  <button
                    type = "button"
                    className='bg-mainColor flex justify-center items-center p-3 rounded-lg ccursor-pointer outline-none '
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FcGoogle className='mr-4' /> sign in with google 
                  </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy='single_host_origin'
              />
            </div>


          </div>
        </div>
    </div>
  )
}

export default login