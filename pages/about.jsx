import Router from 'next/router';

export default function About() {
  return (
    <>
      <div>
        <p>About page</p>
        <button onClick={() => Router.push("/")}>Go back to home</button>
      </div>
    </>
  )
};