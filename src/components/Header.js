import React from 'react'
import { useEffect } from 'react';
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux";
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants';


const Header = () => {
   const dispatch = useDispatch(); 

  const user = useSelector((store)=> store.user);
  
  const navigate = useNavigate();
  

const handleSignOut = ()=>{
  signOut(auth).then(() => {
    navigate("/");
  }).catch((error) => {
    
  });
}

useEffect(() => {
      
 const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const {uid,email,displayName} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}));
    
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
      

    }
  });

  return () => unsubscribe();
  

},[])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
        <img className='w-44'
         src={LOGO}
        alt='netflix-logo' />
        {user && <div className='flex p-2'>
          <img className='w-12 h-12 ' alt="user-icon" src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"></img>
        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header;