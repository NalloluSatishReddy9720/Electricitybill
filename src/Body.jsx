import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostExp1 from './PostExp1'
import EditExp1 from './EditExp1'
import Get from './Get'
import Img from './Img'
import Deleteexp from './Deleteexp'


const Body = () => {
  return (<>
    <Routes>
        <Route path='/' element={<Img/>}></Route>
        <Route path='/Post' element={<PostExp1 />}></Route>
        <Route path='/Delete' element={<Deleteexp />}></Route>
        <Route path='/Update' element={<EditExp1 />}></Route>
        <Route path='/Getall' element={<Get />}></Route>
    </Routes>
    </> )
}

export default Body
