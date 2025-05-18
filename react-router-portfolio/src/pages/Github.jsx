// import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const Github = () => {

  const githubData = useLoaderData()
  console.log(githubData)

  // const [githubData, setGithubData] = useState({})
  // useEffect(()=>{
  //   fetch(`https://api.github.com/users/hassanali1112`)
  //   .then(res => res.json())
  //   .then( res => setGithubData(res))
  // },[])
  return (
    <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex justify-center items-center">
      <div className=" bg-white text-black/50 mx-auto p-10 rounded-xl">
        <h4 className=" text-2xl text-center mb-3">
          GitHub Followers : {githubData.followers}
        </h4>
        <div className="container flex space-x-10 ">
          <img src={githubData.avatar_url} width={400} alt="" />
          <div className="text-3xl flex flex-col justify-between py-5">
            <h6> User Name : {githubData.login}</h6>
            <h4> Following : {githubData.following}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github

export const githubDataLoader = async ()=>{

  const response = await axios.get(`https://api.github.com/users/hassanali1112`)
  return response.data;
    
}