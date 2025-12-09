import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    // 내부 파일(_next)이나 이미지 같은 정적 파일은 무시
    '/((?!_next|[^?]*\\.(?:html?|css|js|json|jpg|jpeg|png|gif|svg|ico)).*)',
    '/', // 메인 루트 포함
  ],
}
