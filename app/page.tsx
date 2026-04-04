import { Suspense } from "react"
import SlowComponent from "./SlowComponent"

export default async function Home() {
  return (
    <div>
      {/* <h1>メインコンテンンツ（すぐに表示）</h1> */}
      {/* <Suspense fallback={<div>重いコンポーネントを読み込み中...</div>}> */}
        <SlowComponent />
      {/* </Suspense> */}
    </div>
  )
}
