export default function TeamPage() {
  const teamProject = {
    title: 'Team Project - 쇼핑몰',
    link: 'https://shoppingmall-gamma.vercel.app/',
    description: 'Next.js + Clerk + MongoDB 기반 팀 쇼핑몰 프로젝트',
  }

  const members = [
    {
      name: '김정서',
      github: 'https://github.com/upuptts12-arch',
      portfolio: 'https://final-exam-portfolio-iota.vercel.app/',
      image: '/jungseo.png',
    },
    {
      name: '이예빈',
      github: 'https://github.com/yebeen547',
      portfolio: 'https://portfolio2-nine-nu.vercel.app/',
      image: '/yebin.jpg',
    },
    {
      name: '오은채',
      github: 'https://github.com/euon05/',
      portfolio: 'https://portfolio2-kappa-brown.vercel.app/',
      image: '/enon.jpg',
    },
    {
      name: '정효민',
      github: 'https://github.com/EHWkddl',
      portfolio: 'https://portfolio-beta-eight-wyz28ddks0.vercel.app/',
      image: '/hyomin.jpg',
    },
    {
      name: '한지원',
      github: 'https://github.com/jiwon416',
      portfolio: 'https://jiwon-portfolio-umber.vercel.app/',
      image: '/jiwon.jpg',
    },
  ]

  return (
    <main
      className="min-h-screen w-full px-6 py-24 text-center flex flex-col items-center"
      style={{
        background: 'linear-gradient(to bottom right, #f8f9fa, #d9e8ff)',
      }}
    >
      {/* ===================== 팀 프로젝트 박스 ===================== */}
      <div className="mb-20 p-10 bg-white rounded-2xl shadow-lg max-w-3xl w-full border border-slate-200 hover:shadow-2xl transition">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          {teamProject.title}
        </h2>
        <p className="text-slate-600 mb-6">{teamProject.description}</p>
        <a
          href={teamProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#bcd7ff] text-[#1e3a8a] rounded-full border border-[#9ec2ff] hover:bg-[#a8c8ff] transition text-lg font-semibold"
        >
          팀 프로젝트 보러가기
        </a>
      </div>

      {/* ===================== 팀원 소개 ===================== */}
      <h1 className="text-4xl font-bold mb-2 text-slate-800">Our Team</h1>
      <p className="text-slate-600 mb-12">웹을 위해 태어남</p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
        {members.map((member, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-36 h-36 rounded-full object-cover mb-6 shadow"
            />
            <h3 className="text-xl font-semibold text-slate-800">
              {member.name}
            </h3>

            {/* GitHub 버튼 */}
            {member.github ? (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 text-sm bg-[#bcd7ff] text-[#1e3a8a] rounded-full border border-[#9ec2ff] hover:bg-[#a8c8ff] transition"
              >
                GitHub
              </a>
            ) : (
              <p className="text-slate-400 text-sm mt-4">GitHub 준비중</p>
            )}

            {/* Portfolio 버튼 */}
            {member.portfolio ? (
              <a
                href={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-2 text-sm bg-[#d4e9ff] text-[#1e3a8a] rounded-full border border-[#b6d6ff] hover:bg-[#c5ddff] transition"
              >
                Portfolio
              </a>
            ) : (
              <p className="text-slate-400 text-sm mt-3">Portfolio 준비중</p>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}
