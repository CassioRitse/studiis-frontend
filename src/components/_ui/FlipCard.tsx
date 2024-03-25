'use client'

import { useState } from 'react'

export default function FlipCard() {
  const [flip, setFlip] = useState(false)

  return (
    <div className="max-h-[400px] min-h-[200px] min-w-[280px] max-w-[480px] rounded-lg border p-2 shadow-lg">
      <button className="h-full w-full" onClick={() => setFlip(!flip)}>
        <div>
          {flip
            ? 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley type and scrambled it to make a type specimen book has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions  Lorem Ipsum'
            : 'Lorem Ipsum is simply dumnown printer took a galley type and scrambled it to make a type specimen book has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions  Lorem Ipsum'}
        </div>
      </button>
    </div>
  )
}
