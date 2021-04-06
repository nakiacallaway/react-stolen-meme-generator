import { useState, useEffect } from 'react';
const Meme = () => {
  const [memeData, setMemeData] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        // console.log('after the res.json()', response);
        const { memes } = response.data;
        // console.log(memes);
        setMemeData(memes);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>This is my meme component</h2>
      {memeData.map(meme => {
        return (
          <div>
            <img src={meme.url} alt={meme.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Meme;
