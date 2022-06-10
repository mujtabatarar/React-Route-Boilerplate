import React from "react";
import { useSearchParams } from "react-router-dom";
export const Admin = () => {
  const [ searchParams, setSearchParams ] = useSearchParams({});
  const showUrlEnd = searchParams.get('filter') === 'active';

  return (
    <>
      <button onClick={() => setSearchParams({ filter: "active" })}>
       Show active users
      </button>
      <button onClick ={()=> setSearchParams({})}>Reset all search bar.</button>
      <div>Admin</div>

      <div>
          {showUrlEnd? <h1>showing active users</h1> : <h1> showing all users</h1>} 
      </div>
    </>
  );
};
