import React, { useEffect, useState } from 'react'

const Github = () => {
  const [githubData, setGithubData] = useState({})


  // useEffect(()=>{
  //   fetch(`https://api.github.com/users/hassanali1112`)
  //   .then(res => res.json())
  //   .then( res => setGithubData(res))
  // },[])
  return (
    <div className="max-w-6xl bg-gray-500 mx-auto my-5 p-5">
      <h4 className=" text-white text-2xl text-center mb-3">GitHub Followers : {githubData.followers}</h4>
      <div className="container flex space-x-10 ">
        <img src={githubData.avatar_url} width={400} alt="" />
        <div className='text-white text-3xl'>
          <h4>{githubData.login}</h4>
        </div>
      </div>
    </div>
  );
}

export default Github

export const githubDataLoader =  ()=>{

  fetch(`https://api.github.com/users/hassanali1112`)
    .then((res) => res.json())
    .then((res) => console.log(res))
}