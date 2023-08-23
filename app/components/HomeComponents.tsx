import React from 'react';
import { useAuth } from '../utils/AuthContext'

function HomeComponents() {
  const { user } = useAuth();

  return (
    <div>
      {/* <h1> {user ? user.name:""}</h1> */}
      <h1>Muhammad Awais</h1>

    </div>
  );
}

export default HomeComponents;
