import React from 'react';
import firstable from './images/Firstable.jpg';
import future from './images/future.jpg'

function Tables() {
  return (
    <>
        <div className="tables">
                <div className='firtable'>
                    <img src={ future} alt="future" />
                    <div className="text-1">
                        <h2>We are Connecting the world together</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries.</p>
                    </div>
                </div>

                <div className=' second-2'>
                    <img src={ firstable} alt="firtpic" />
                    <div className="text-1">
                        <h2>We are Connecting the world together</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries.</p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Tables