import React from 'react';
import { useState } from 'react';

const About = () => {
    const [myStyle, setMyStyle] = useState({
      
        backgroundColor: 'white',
        color:'black'
    });
     
    const [btnText, setbtnText] = useState('Dark Mode');

   const toggleStyle = ()=>{
        if (myStyle.color === 'black') {
            setMyStyle({
      
               backgroundColor: 'black',
                color:'white'
            })
            setbtnText('Light Mode')
            
        } else {
            setMyStyle({
      
                backgroundColor: 'white',
                color:'black'
            })
            setbtnText('Dark Mode')
            
        }
    }
    return (
        <div className='container my-5' style={myStyle}>
            <h1>About Us</h1>

            <div className='accordion accordion-flush' id='accordionFlushExample' style={myStyle} >
                <div className='accordion-item' style={myStyle}> 
                    <h2 className='accordion-header' id='flush-headingOne'>
                        <button className='accordion-button collapsed' style={myStyle} data-bs-toggle='collapse' data-bs-target='#flush-collapseOne' aria-expanded='false' aria-controls='flush-collapseOne'>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id='flush-collapseOne' className='accordion-collapse collapse' aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
                        <div className='accordion-body'>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className='accordion-item'style={myStyle}>
                    <h2 className='accordion-header' id='flush-headingTwo'>
                        <button className='accordion-button collapsed' style={myStyle} data-bs-toggle='collapse' data-bs-target='#flush-collapseTwo' aria-expanded='false' aria-controls='flush-collapseTwo'>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id='flush-collapseTwo' className='accordion-collapse collapse' aria-labelledby='flush-headingTwo' data-bs-parent='#accordionFlushExample'>
                        <div className='accordion-body'>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className='accordion-item'style={myStyle}>
                    <h2 className='accordion-header' id='flush-headingThree'>
                        <button className='accordion-button collapsed' style={myStyle} data-bs-toggle='collapse' data-bs-target='#flush-collapseThree' aria-expanded='false' aria-controls='flush-collapseThree'>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id='flush-collapseThree' className='accordion-collapse collapse' aria-labelledby='flush-headingThree' data-bs-parent='#accordionFlushExample'>
                        <div className='accordion-body'>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
            <div className='container my-4'>
            <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btnText}</button>
            </div>



        </div>
    )
};

export default About;
