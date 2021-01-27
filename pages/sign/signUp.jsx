import {useRouter} from 'next/router';
import { MainLayout } from '../layout/MainLayout';

export default function SignUp() {
  const router = useRouter();
  return (
    <MainLayout>
      <button onClick={() => router.push("/")}>Go back to home</button>
      <p>Sign Up</p>
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
}