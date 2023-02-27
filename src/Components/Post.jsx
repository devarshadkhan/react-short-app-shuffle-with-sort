import React from "react";

const Post = ({ data }) => {
  return (
    <>
      <style jsx>{`
        .wrap-1 {
          padding: 1rem;
          margin: 2rem;
          {/* display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem; */}
        }
        .wrp {
          border: 1px solid yellowgreen;
          padding: 1rem;
          border-radius: 5px;
          margin:1rem
        }
      `}</style>
      <div className="wrap-1">
        {data.map((e) => {
          const { id, title, body } = e;
          return (
            <>
              <div className="wrp">
                <h6 style={{}}>Id: {id} </h6>
                <h3 style={{}}>Title: {title}</h3>
                <p style={{}}>Post: {body}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Post;