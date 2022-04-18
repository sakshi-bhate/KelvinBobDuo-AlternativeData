import React from 'react';
import Typography from '@mui/material/Typography';
function chart1(){
  return(
    <div classname="circle-progress-wrap " style={{height: '200px', width: '200px', position: 'relative'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 100 200 200" style={{transform: 'rotate(-90deg)', overflow: 'visible'}}>
          <linearGradient id="grd_wkwngfsas56c" x1="0%" y1="0%" x2="0%" y2="100%" gradientTransform="rotate(90, .5, .5)">
            <stop offset={0} stopColor="rgba(5, 205, 153, 0)" />
            <stop offset={100} stopColor="#05CD99" />
          </linearGradient>
          <circle cx={200} cy={200} r="92.5" stroke="transparent" strokeWidth={15} fill="none" />
          <circle cx={200} cy={200} r="92.5" fill="none" strokeWidth={15} strokeDasharray="581.1946409141117" strokeDashoffset="174.3583922742335" strokeLinecap="round" stroke="url(#grd_wkwngfsas56c)" style={{transition: 'stroke-dashoffset 400ms ease 0s'}} />
        </svg>
        <div classname="circle-progress-inner" style={{position: 'absolute', inset: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div>
            <div classname="MuiBox-root css-1ttu4yl"><span classname="MuiTypography-root MuiTypography-button css-aw2bmn">Safety</span><span classname="MuiTypography-root MuiTypography-d5 css-yw6lvj">9.3</span><span classname="MuiTypography-root MuiTypography-button css-1ijdpfi">Total Score</span></div>
          </div>
        </div>
      </div>
  );}

  export default chart1;