// src/pages/UserDetail.js
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  return <h2>사용자 ID: {id}</h2>;
}

export default UserDetail;