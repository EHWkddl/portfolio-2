export default function PortfolioPage() {
  const projects = [
    {
      title: 'HCJ DEMO',
      link: 'https://web-demo-coral.vercel.app/',
      description: 'HTML/CSS/JavaScript 기초를 활용한 웹 데모',
      image: '/webdemo.png',
    },
    {
      title: 'EHEH – Gallery',
      link: 'https://ehe-hgallerly.vercel.app/',
      description: '사진 갤러리 웹사이트',
      image: '/EHEH.png',
    },
    {
      title: 'DevWithAI',
      link: 'https://final-team-projects.vercel.app/',
      description: 'AI 개발 지원 웹 서비스 (팀 프로젝트)',
      image: '/Dev.png',
    },
    {
      title: 'Ping Pong Game',
      link: 'https://pingpong-five-kappa.vercel.app/',
      description: 'JS로 만든 핑퐁 게임 (교수님과 제작)',
      image: '/pingpong.png',
    },
    {
      title: 'Clerk-App',
      link: 'https://clerk-app-3hz3.vercel.app/',
      description: 'Clerk 인증 로그인 프로젝트',
      image: '/clerk.png',
    },
    {
      title: 'CRUD',
      link: 'https://crud-d79p.vercel.app/',
      description: 'CRUD 예제 프로젝트',
      image: '/crudex.png',
    },
  ]

  return (
    <main
      className="min-h-screen w-full px-6 py-24 text-center flex flex-col items-center"
      style={{
        background: 'linear-gradient(to bottom right, #f8f9fa, #d9e8ff)',
      }}
    >
      <h1 className="text-4xl font-bold mb-6 text-slate-800">Portfolio</h1>
      <p className="text-slate-600 mb-12 max-w-2xl">포트폴리오 소개</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl w-full">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-xl shadow hover:shadow-xl overflow-hidden transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}
