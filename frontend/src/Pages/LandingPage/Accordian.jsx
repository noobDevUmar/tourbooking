import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Accordian = () => {
  return (
    <div className=" my-32 bg-blue-100">


    <div className='mb-20 text-center'>
        <h1 className='text-5xl font-semibold pt-10'> Frequently Asked Questions </h1>
    </div>
        <div className="max-w-2xl mx-auto">

       
    <Accordion defaultActiveKey="0" flush>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    
    <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>


    <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>


    <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  </div>
    </div>
  )
}

export default Accordian