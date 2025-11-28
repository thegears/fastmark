import { JSX } from "react";

export default function Welcome(): JSX.Element {
  return <>
    <div className="h-2/16">
      <p className="text-center w-full text-8xl font-bold">FastMark</p>
      <p className="text-center w-full text-4xl ">
        Markdown Editor that is
        <span className="ml-2 font-bold">Clean & Fast.</span>
      </p>
    </div>
  </>
}
