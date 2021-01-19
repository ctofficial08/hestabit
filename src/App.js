import './base.min.css'
import './style.css'
import ReusableListing from './component/ReusableListing/ReusableListing';

function App() {
  return (
    <div className="App">
      <ReusableListing />
      {/* <PostCard url="https://gorest.co.in/public-api/posts?page=1"/>
      <UserCard url="https://gorest.co.in/public-api/users?page=1"/> */}
     </div>
  );
}

export default App;
