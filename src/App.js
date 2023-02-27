import './App.css';
import Post from './Components/Post';
import axios, {Axios} from "axios"
import { useEffect, useState } from 'react';
function App() {

  const [data, setData] = useState([])

  const Article_Data = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data)
  }
useEffect(() => {
  Article_Data()
}, [])


// sore Data 

const sortData = () => {
  let sorting = data.sort((a,b) => {
    return a.id - b.id
  })
  setData([...sorting])
}

// Shuffle Data

// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {

//       // Generate random number 
//       var j = Math.floor(Math.random() * (i + 1));

//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//   }

//   return array;
// }

const shuffleData = () => {
  let sorting1 = data.sort((a,b) => {
     return Math.random() - 0.5
  })
  setData([...sorting1])
}
  return (
    <div className="App">
    <h1 style={{textAlign:"center",margin:"1rem",}}>Shuffle Data and after Sort Data top MNC's Interview Question in React JS</h1>
<style jsx>{`
.btn {
  background: #8934d9;
  margin: 2rem 3rem;
  background-image: -webkit-linear-gradient(top, #8934d9, #ac2bb8);
  background-image: -moz-linear-gradient(top, #8934d9, #ac2bb8);
  background-image: -ms-linear-gradient(top, #8934d9, #ac2bb8);
  background-image: -o-linear-gradient(top, #8934d9, #ac2bb8);
  background-image: linear-gradient(to bottom, #8934d9, #ac2bb8);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Courier New;
  color: #ffffff;
  font-size: 28px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  border:none;
}

.btn:hover {
  background: #8934d9;
  background-image: -webkit-linear-gradient(top, #8934d9, #ac2bb8);
  background-image: -moz-linear-gradient(top, #8934d9, #ac2bb8);
  background-image: -ms-linear-gradient(top, #8934d9, #ac2bb8);
  background-image: -o-linear-gradient(top, #8934d9, #ac2bb8);
  background-image: linear-gradient(to bottom, #8934d9, #ac2bb8);
  text-decoration: none;
}
`}</style>
   <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}> 
   <button className='btn' onClick={shuffleData}>Shuffle Article</button>
   <button className='btn' onClick={sortData}>Sort Article</button>
    
    </div>
    <Post data={data}/>
    </div>
  );
}

export default App;