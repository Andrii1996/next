import { Router } from "next/router";
import {useRouter} from 'next/router';

export default function Post() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <p>Post {router.query.id}</p>
      <button onClick={() => router.push("/")}>Go back to home</button>
    </>
  )
}