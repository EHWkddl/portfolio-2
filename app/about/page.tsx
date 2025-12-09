export default function AboutPage() {
  return (
    <main
      className="min-h-screen w-full px-6 py-24 flex flex-col items-center text-center"
      style={{
        background: 'linear-gradient(to bottom right, #f8f9fa, #d9e8ff)',
      }}
    >
      <h1 className="text-4xl font-bold mb-10 text-slate-800">About Me</h1>

      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-2xl w-full flex flex-col items-center">
        <img
          src="/hyomin.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover mb-6 shadow"
        />

        <table className="text-left w-full text-slate-700">
          <tbody>
            <tr className="border-b">
              <td className="py-3 font-semibold w-32">이름</td>
              <td className="py-3">정효민</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 font-semibold">학번</td>
              <td className="py-3">92410914</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 font-semibold">이메일</td>
              <td className="py-3">hyominj1014@gmail.com</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 font-semibold">관심 분야</td>
              <td className="py-3">프론트엔드 개발, 포렌식</td>
            </tr>
            <tr>
              <td className="py-3 font-semibold">GitHub</td>
              <td className="py-3">
                <a
                  href="https://github.com/EHWkddl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://github.com/EHWkddl
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
