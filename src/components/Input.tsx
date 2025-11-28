import { JSX } from "react";

interface InputProps {
  handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export default function Input({ handleInputChange }: InputProps): JSX.Element {
  return <>
    <textarea onChange={handleInputChange} className="textarea text-2xl font-bold textarea-xl w-full h-full min-h-full max-h-full"></textarea>
  </>
}
