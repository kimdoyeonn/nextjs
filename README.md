This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

# next foundations

## [Introduction](https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website)

이미 리액트에 친숙하다면 [여기](https://nextjs.org/learn/foundations/from-react-to-nextjs/getting-started-with-nextjs)나 [여기](https://nextjs.org/learn/basics/create-nextjs-app)로 건너뛰어도 된다.

---

## [What is Next.js?](https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs)

Next.js는 웹 애플리케이션을 빠르게 만들기 위한 구성 요소를 제공하는 flexible React framework입니다. 지금 당장은 이게 무슨 뜻인지 이해가 안될거에요. 이제 React와 Next.js가 뭔지, 이것들이 어떻게 도움이 되는지 알아봅시다.

### 웹 애플리케이션의 구성 요소

다음은 최신 애플리케이션을 만들 때 고려할 사항들입니다.

- User Interface - 유저가 어떻게 애플리케이션을 사용하고 상호작용할지
- Routing - 유저가 애플리케이션의 다른 부분들 사이를 어떻게 탐색할지
- Data Fetching - 데이터가 어디에 있는지, 어디서 얻을 수 있는지
- Rendering - **[동적, 정적]** 컨텐츠를 **[언제, 어디서]** 랜더링할지
- Integrations - 어떤 서트파티 서비스(CMS, auth, payment...)를 사용하고, 어떻게 연결할지
- Infrastructure - 어디에 배포, 저장, 실행할지(CDN, Serverless, Edge...)
- Performance - 엔드 유저를 위해 애플리케이션을 어떻게 최적화할지
- Scalability - 팀, 데이터, 트래픽이 증가할 때 어떻게 애플리케이션이 거기에 적응할 수 있을지
- Developer Experience - 팀의 애플리케이션을 구축, 유지보수 경험
