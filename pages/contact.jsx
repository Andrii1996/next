import Router from 'next/router';
import { MainLayout } from './layout/MainLayout';

export default function Contact() {
  return (
    <MainLayout>
      <div>
        <button onClick={() => Router.push("/")}>Go back to home</button>
        <p>Contact page</p>
      </div>
      <style jsx>
      {`
        button {
          padding: 10px;
          border: 1px solid #f3f3f3;
          text-shadow: 1px 2px 6px #3f3f3f;
          transition: box-shadow 0.3s;
          outline: none;
        }

        button:hover {
          box-shadow: 1px 2px 6px #3f3f3f;
        }
      `}
    </style>
    </MainLayout>
  )
};