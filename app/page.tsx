export default function Home() {
  return (
    <main className="fixed top-0 left-0 w-screen h-screen overflow-hidden text-white">
      {/* 배경 고정 */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/*어두운 반투명 오버레이 (고정) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/35"></div>

      {/* 중앙 글자 고정 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg opacity-90">Jeong Hyo-min</p>
      </div>
    </main>
  )
}
