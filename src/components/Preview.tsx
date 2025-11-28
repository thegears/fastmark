import { JSX } from "react";

interface PreviewProps {
  preview: string
}

export default function Preview({ preview }: PreviewProps): JSX.Element {
  return <>
    <div className="mockup-window  border p-4  border-base-300 w-full h-full">
      <div className="prose " dangerouslySetInnerHTML={{ __html: preview }}></div>
    </div>
  </>
}
