import React, { JSX, useState, } from "react";
import Input from "./Input";
import Preview from "./Preview";


export default function ConverterContainer(): JSX.Element {

  const [preview, setPreview] = useState("");

  async function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    let req = await fetch('/api/parse', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "input": e.target.value
      })
    })
    let res = await req.text();
    setPreview(res);
  }

  return <>
    <div className="flex justify-around gap-16 mt-16  h-10/16">
      <div className="w-full h-full">
        <p className="w-full text-center text-2xl font-bold">Markdown</p>
        <Input handleInputChange={handleInputChange} />
      </div>
      <div className="divider mt-12 divider-horizontal"></div>
      <div className="w-full h-full">
        <p className="w-full text-center text-2xl font-bold">Live Preview</p>
        <Preview preview={preview} />
      </div>
    </div>
  </>
}
