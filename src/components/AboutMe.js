
import React from 'react'

const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}




function AboutMe() {


    return (
        <div className="container">
           
            <div className="row">
                <div className="col col-md-12 col-12">
                <h1>Muhammad Osama</h1>
                <h2>Front End Developer and Flutter enthusiast</h2>
                <h3>My Skills </h3>
                  <p>HTML  <Progress done="100"/></p>
                 <p>CSS <Progress done="70"/> </p>
                 <p>Javascript <Progress done="80"/></p>
                 <p>jQuery <Progress done="60"/> </p>
                 <p>Bootstrap <Progress done="85"/> </p>
                  <p>ReactJs <Progress done="70"/> </p>
                   
                  
                  
                  

                </div>
            </div>
           
        </div>
    )
}

export default AboutMe
