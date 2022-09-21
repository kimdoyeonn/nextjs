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

### What is React?

리액트는 반응형 유저 인터페이스를 구축하기 위한 자바스크립트 라이브러리이다.

유저인터페이스란, 화면상에서 유저들이 보고, 상호작용하는 요소들을 말합니다.  
라이브러리 측면에서 리액트는 UI를 구축하는데 유용한 함수들을 제공하지만, 그걸 자신의 애플리케이션에 사용하는 것은 개발자에게 맡깁니다.  

리액트의 성공 이유 중 하나는 빌드 애플리케이션 측면에서 비교적 어려움 없이 사용할 수 있다는 것입니다. 때문에 서드파티 툴과 솔루션의 생태계가 번성하고 있습니다.

하지만 이것 또한 완전한 리액트 애플리케이션을 구축하기 위해서는 약간의 노력이 필요하다는 것을 의미합니다. 개발자는 공통 애플리케이션 요구사항에 맞는 도구를 구성하고, 솔루션을 재창조하는데 시간을 할애해야합니다.

### What is Next.js?

Next.js는 웹 애플리케이션을 만들기 위한 도구를 재공하는 리액프 프레임워크입니다.  

프레임워크 측면에서, Next.js는 리액트에 필요한 툴링과 구성을 관리하며 애플리케이션을 위한 추가적인 구조, 기능, 최적화를 제공합니다.

![next.js](https://nextjs.org/static/images/learn/foundations/next-app.png)

리액트로 UI를 구축하고, Next.js 기능을 점진적으로 적용하여 라우팅, 데이터 가져오기, 통합과 같은 일반적인 애플리케이션 요구사항을 해결하는 동시에 개발자와 엔드유저의 환경을 개선할 수 있습니다.

개인 개발자이건 큰 팀의 일원이건 React, Next.js를 활용하여 완벽한 반응형이고, 매우 동적이고 뛰어난 성능의 웹 애플리케이션을 구축할 수 있습니다.

## How Next.js Works

여기선 각 단계에서 애플리케이션 코드에 어떤 일이 일어나는지 알아볼거에요

- 코드가 실행되는 환경: Development vs. Production
- 코드가 실행되는 때: Buuild Time vs. Runtime
- 랜더링 환경: Client vs. Server

### Development and Production Environments

enviroments는 코드가 실행되는 컨텍스트라고 이해할 수 있습니다.  
개발하는 동안에 개발자는 자신의 로컬 기기에서 애플리케이션을 구축하고 실행합니다. production으로 이동하는 것은 애플리케이션을 배포하고 유저가 사용할 수 있도록 만드는 과정입니다.

### Next.js에 적용하는 방법

Next.js는 애플리케이션의 development, production을 위한 기능을 모두 지원합니다.

예를 들어,

- development에서 Next.js는 개발자와 그들의 애플리케이션 구축 경험에 맞게 최적화를 합니다. TypeScript, ESLint integration, Fast Refresh... 과 같은 developer experience를 향상시키는 것을 목표로하는 기능들이 포함되어 있습니다.
- production에서 Next.js는 앤드 유저와 그들의 사용자 경험에 맞게 최적화를 합니다. 성능과 접근성이 있게 코드를 변환하는 것을 목표로 합니다.

### The Next.js Complier

Next.js는 코드 변환의 대부분과 기본 인프라를 처리하여 애플리케이션이 더 쉽게 운영될 수 있또록 합니다. 이것이 가능한 이유는 Next.js의 컴파일러가 low-level programming language인 Rust로 작성되었고, compilcation, minification, bundling 등등을 할 수 있는 플랫폼인 swc를 가지고 있기 때문입니다.

### What is Compiling?

개발자는 개발자에게 친숙한 JSX, TypeScript, 최신 버전의 자바스크립트 같은 언어로 코드를 작성합니다. 이 언어들은 개발자의 효율성과 신뢰도를 향상시키지만 브라우저가 이를 이해하기 위해서는 자바스크립트로 컴파일되어야합니다.

Compiling은 한 언어로 된 코드를 다른 언어 또는 언어의 다른 버전으로 출력하는 과정을 말합니다.

Next.js에서 Compilation은 개발 단계에서 코드가 수정될 때, production application을 준비하기 위한 빌드 단계에서 일어납니다.

### What is Minifying?

개발자는 인간의 가독성에 최적화된 코드를 작성합니다. 이 코드는 주석, 공백, 들여쓰기, 여러줄 쓰기 같이 코드가 실행되는 동안에는 필요하지 않은 정보를 가지고 있습니다.

Minification은 불필요한 코드 서식과 주석을 코드 기능의 변경 없이 제거하는 과정입니다.

Next.js에서 JavaScript와 CSS 파일은 production을 위해 자동으로 최소화됩니다.

### What is Bundling?

개발자는 모듈, 구성 요소 및 기능으로 나누어 더 큰 애플리케이션을 구축합니다. 내부 모듈과 서드파티 패키지를 내보내고 가져오면서 파일 dependency의 복잡한 웹이 생성됩니다.

![](https://nextjs.org/static/images/learn/foundations/bundling.png)

Bundling은 사용자가 웹 페이지를 방문할 때 파일에 대한 요청 수를 줄이는 것을 목표로 web dependenct를 해결하고, 파일을 브라ㅏ우저에 최적화된 번들로 병합하는 프로세스입니다.

### What is Code Splitting?

개발자는 보통 애플리케이션을 다른 url로 접근할 수 있는 여러 페이지로 쪼갭니다. 각 페이지들은 애플리케이션의 유니크한 진입접을 가지게 됩니다.

code splitting은 애플리케이션 번들을 각 진입점에 필요한 더 작은 청크로 반할하는 과정입니다. 목표는 해당 페이지를 실행하는데 필요한 코드만 로드하여 애플리케이션의 초기 로드 시간을 개선하는 것 입니다.

Next.js는 코드 분할을 기본으로 지원합니다. 페이지/디렉터리의 각 파일은 빌드 단계에서 자체 JavaScript 번들로 자동으로 코드 분할됩니다.

- 페이지 간에 공유되는 모든 코드는 추가 탐색 시 동일한 코드가 다시 다운로드되지 않도록 다른 번들로 분할됩니다.
- 초기 페이지 로드 이후 Nextjs는 사용자가 탐색할 수 있는 다른 페이지의 코드를 미리 로드하기 시작할 수 있습니다.
- Dynamic import는 처음에 로드된 코드를 수동으로 분할하는 또 다른 방법입니다.