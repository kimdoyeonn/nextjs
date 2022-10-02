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

### Build Time and Runtime

Build time은 production을 위해 응용프로그램이 준비하는 일련의 단계에 주어진 이름입니다.

응용프로그램이 빌드되는 동안 Next.js는 서버에 배포하고, 유저들이 사용하기 위해 코드를 production에 최적화된 파일로 바꿉니다.

- 정적으로 생성된 페이지의 HTML 파일
- 서버에서 패아자거 랜더링 되기 위한 JavaScript 코드
- 클라이언트에서 동적인 페이지를 만들기 위한 JavaScript 코드
- CSS 파일

Runtime은 응용프로그램이 작성, 배포된 이후에 유저의 요청에 따라 실행되는 기간을 의미합니다는

### Client and Server

웹 애플리케이션의 경우 클라이언트는 애플리케이션 코드에 대한 요청을 서버로 보내는 사용자 장치의 브라우저를 말합니다.

이 브라우저는 서버로부터 수신한 응답을 사용자가 상호작용할 수 있는 인터페이스로 전환합니다.

서버는 애플리케이션 코드를 저장하고, 클라이언트로부터 요청을 받고 계산을 하고, 적절한 응답을 다시 보내는 데이터 센터의 컴퓨터를 말합니다.

### What is Rendering?

리액트를 UI를 표현하는 HTML로 변환하는 과정을 Rendering이라고 합니다.

랜더링은 서버에서 일어날수도 있고, 클라이언트에서 일어날수도 있습니다. 또한 빌드되는 과정에 일어날 수 있고, 런타임에서 요청마다 일어날수도 있습니다.

Next.js에서는 세 타입의 랜더링 방법이 가능합니다.

1. Server-Side Rendering
2. Static Site Generation
3. Client-Side Rendering

- Pre-Rendering
  - SSR과 SSG는 외부 데이터를 fetching하고 클라이언트로 결과를 보내기 전에 리액트 컴포넌트를 HTML로 변환하기 때문에 Pre-Rendering이라고도 합니다.

- CSR vs. Pre-Rendering
  - 기본 리액트 애플리케이션에서 브라우저는 UI를 구성하기 위한 JavaScript와 빈 HTML 껍데기를 받습니다. 이 때 최초 랜더링이 유저의 기기에서 일어나기 때문에 CSR이라고 합니다.
  - React's useEffect()를 사용하여 데이터를 가져오거나 useSWR과 같은 데이터 가져오기 후크를 선택하여 Next.js 응용 프로그램의 특정 구성 요소에 대해 클라이언트 측 렌더링을 사용하도록 선택할 수 있습니다.

그에 반해서 Next.js는 기본으로 모든 페이지를 미리 랜더링(pre-render)합니다. Pre-rendering은 HTML이 자바스크립트에 의해 유저의 기기가 아닌 서버에서 미리 생성됩니다.

실제로 pre-rendered app이 처음에 이미 생성된 HTML을 볼 수 있는 것과 달리 완전히 CSR인 앱에서는 초기 랜더링이 완료될 때까지 유저는 빈 화면을 보게 됩니다.

- Server-Side Rendering
  SSR에서는 매 요청마다 HTML 페이지가 서버에서 생성돕니다. 생성된 HTML, JSON, 페이지를 interactive하게 만들어줄 JavaScript 명령은 클라이언트로 보내집니다.

  클라이언트에서는 빠른 interactive하지 않은 페이지로 사용되는 반면, 리액트는 JSON 데이터와 JavaScript 명령을 사용하여 구성요소를 interactive하게 만듭니다. 이를 hydration이라고 부릅니다.

  Next.js에서 getServerSideProps를 사용하여 서버에서 랜더할 페이지를 선택할 수 있습니다.


React 18과 Next 12는 React 서버 컴포넌트의 alpha 버전을 소개합니다. 서버 컴포넌트는 서버에서 완전히 랜더링되며 랜더링하는데 클라이언트측 자바스크립트가 필요하지 않습니다.
또한 일부 서버 컴포넌트를 통해 갭라자는 서버에 일부 로직을 유지하고 해당 로직의 결과만 클라이언트에 전송할 수 있습니다.
이렇게 하면 클라이언트에 보내는 번들 크기가 줄고 CSR 성능을 향상됩니다.

- Static Site Generation
  SSG에서 HTML은 서버에서 생성됩니다. 하지만 SSR과는 다르게 런타임의 서버가 아닙니다. 대신 배포하면서 빌드될 때 콘텐츠가 한번에 생성되고 HTML이 CDN에 저장되어 매 요청마다 재사용됩니다.

  Next.js에서는 getStaticProps를 사용하여 페이지를 정적으로 생성하도록 선택할 수 있습니다.

Incremental Static Regeneration을 이용하여 사이트를 만든 후에 정적 페이지를 만들거나 업데이트할 수 있습니다. 즉, 데이터가 변경되더라도 전체 사이트를 재구성할 필요가 없습니다.

Next.js의 장점은 SSG, SSR, CSR 등 가장 적합한 랜더링 방법을 경우에 따라 페이지 단위로 선택할 수 있다는 것입니다.

### What is the Network?

우리 애플리케이션이 네트워크에 배포되고 난 후에 어디에 저장되고 실행되는지 아는 것은 매우 도움이 됩니다.

네트워크는 자원을 공유할 수 있는 연결된 컴퓨터들 혹은 서버들이라고 할 수 있습니다.

Next.js 애플리케이션의 경우에는 코드가 오리진 서버, CDN, Edge에 분산되어 있습니다.

- Origin Servers
  앞서 이야기한 것과 같이 서버는 애플리케이션의 원본 버전을 저장하고 실행하는 메인 컴퓨터라고 할 수 있습니다.
  여기서 우리는 코드가 분산될 수 있는 CDN서버와 Edge 서버 같은 장소와 구분하기 위해 origin이라는 용어를 사용합니다.

  origin server가 요청을 받았을 때 응답을 보내기 전 몇 가지 연산을 합니다. 이 연산 작업의 결과는 CDN으로 옮겨지게 됩니다.

- Content Delivery Network
  CDN들은 HTML과 이미지 파일 같은 정적 콘텐츠를 전세계 여러 위치에 저장하고 origin server와 클라이언트 사이에 배치됩니다.

  그리고 새로운 요청이 왔을 때 유저에게서 가장 가까운 위치의 CDN을 찾아 캐시된 값과 함께 응답합니다.

  이것은 모든 연산이 매 요청마다 발생하지 않기 때문에 origin으로 가는 부하를 줄입니다. 또한, 응답이 유저에게서 지리적으로 가까운 곳에서 전송되기 때문에 유저에게도 속도가 빠릅니다.

- The Edge

  The Edge는 네트워크 프린지 혹은 가장자리 에 대한 일반화된 개념으로 유저에게 가장 가깝습니다. CDN 또한 네트워크의 가장자리에서 정적 콘텐츠를 저장하기 때문에 the Edge의 부분이라고 할 수 있습니다.

  CDN과 유사하게 Edge는 전 세계 여러 위치에 분산되어 있습니다. 하지만 CDN과는 다르게 어떤 것은 정적 콘텐츠를 저작하고 어떤 edge 서버는 코드를 실행합니다.

  즉, 캐싱과 코드 실행을 유저에게 더 가까운 Edge에서 할 수 있습니다.

  edge가 코드를 실행함으로써 전통적으로 클라이언트 측이나 서버 측에서 가능하던 몇몇 작업을 edge로 옮길 수 있습니다.

  이는 클라이언트로 보내는 코드 양이 줄어들고, 유저 요청의 일부가 origin server로 돌아올 필요가 없으므로 레이턴시가 줄기 때문에 애플리케이션의 성능이 향상될 수 있습니다.

# Create a Next.js App
## Next.js: The React Framework

- page based routing system (with support for dynamic routes)
- pre-rendering, static generation, server side rendering 을 페이지 기반으로 지원
- 빠른 페이지 로딩을 위한 자동 코드 분할
- 최적화된 prefetching을 지원하는 CSR
- 내장 CSS, Sass 지원, CSS in JS 라이브러리 지원
- 빠른 새로고침이 지원되는 개발환경
- serverless 함수로 API endpoint를 구축하기 위한 API routes
- Fully extendable

## create a Next.js app

```shell
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

create-next-app은 Nextjs을 설치하기 위한 부트스트랩입니다. 설치가 완료되면 해당 파일로 이동하여 `npm run dev`를 실행합니다.

그러면 Next.js 앱의 개발 서버는 3000 포트에서 시작됩니다. `http://localhost:3000` 를 브라우저에서 열어보세요

---  

`pages/index.js`을 열어서 파일을 수정하고 저장해보면 변경사항이 자동으로 열려있는 페이지에 적용되는 것을 확인할 수 있습니다. 이처럼 Next.js 개발서버에서는 Fast Refresh가 가능합니다. 파일이 수정되었을 경우 Next.js는 거의 즉시 자동으로 변경사항을 브라우저에 적용합니다. 새로고침 없이요! 

## Navigate Between Pages

- 통합 파일 시스템 라우팅을 사용하여 새로운 페이지를 만듭니다.
- `Link` 컴포넌트를 사용하여 페이지 간의 client-side navigation을 활성화하는 방법을 알아봅니다.
- 코드 분할과 prefetching에 대한 기본 지원에 대해 알아봅니다.

### Pages in Next.js

Next.js에서 페이지는 `pages` 디렉토리의 파일에서 export된 리액트 컴포넌트입니다.

페이지는 파일 이름에 따라 경로와 연결됩니다. 예를 들어 개발할 때 `pages/index.js` 파일은 `/` 경로와 연결되고, `pages/posts/first-post.js`sms `/posts/first-post` 경로로 연결됩니다.

### Link Component

웹사이트에서 페이지 사이를 연결할 때, HTML 태그 `<a>`를 사용합니다.

Next.js에서는 `next/link`dml `Link` 컴포넌트를 사용하여 앱에서 페이지를 연결할 수 있습니다. `<Link>`는 client-side navigation을 가능하게 해주고 props를 사용하여 navigation 동작을 더 효과적으로 제어할 수 있도록 해줍니다.

```js
  <Link href="/">Back to Home</Link>
```

보다시피 `Link` 컴포넌트의 형태는 `<a>`와 비슷합니다.
최초나 스크롤로 인해 뷰포트에 있는 `<Link>`는 
Static Generation을 사용하응 페이지에 대해 기본적으로 prefetch 됩니다.(데이터 포함) server-rendered routes에 해당하는 데이터는 prefetch 되지 않습니다.

`Link` 컴포넌트는 같은 Next.ja 앱의 두 페이지 사이의 client-side navigation을 활성화합니다.

Client-Side navigation이란 자바스크립트를 사용하여 페이지 전환을 하는 것입니다. 이는 브라우저에서 기본 navigation을 하는 것보다 빠릅니다.
Link를 이용한 페이지이동은 a 태그를 이용한 페이지 이동과 다르게 전체 페이지를 전부 새로고침하지 않습니다.

### Code splitting and prefetching

Next.js는 자동으로 코드 분할을 합니다. 스래서 각 페이지에 필요한 것만 로드합니다. 즉, 홈페이지가 랜더되었을 때, 다른 페이지의 코드들이 처음부터 제공되지 않습니다.

이는 사이트에 수백개의 페이지가 있더라도 홈페이지 로딩을 빠르게 만듭니다.

요청한 페이지에 필요한 코드만 로딩된다는 것은 페이지가 분리되어 있다는 것을 의미합니다. 만약 특정 페이지가 에러를 던진다 하더라도 앱의 나머지는 여전히 동작합니다.

뿐만 아니라 배포된 Next.js 앱은 언제든 Link 컴포넌트가 브라우저 뷰포트에 나타나면 자동으로 연결된 페이지의 코드를 백그라운드에서 prefetch합니다.

때문에 링크를 클릭할 때쯤에는 목적지 페이지의 코드는 이미 백그라운드에서 로드되었고, 페이지 전완은 거의 즉시 완료됩니다.

### Summary

Next.js는 가장 좋은 성능을 위해 code splitting, client-side navigation, prefetching(in production)을 이용하여 앱을 자동으로 최적화합니다.

`pages` 아래 경로를 파일로 만들고 내장 Link 컴포넌트를 사용합니다. 때문에 route를 위한 라이브러리가 필요 없습니다.

만약 Next.js 앱에서 외부 페이지로 이동하고 싶다면 Link 대신 a 태그를 사용하면 됩니다.

## Assets, Metadata, and CSS

Next.js는 css와 sass를 기본적으로 지원합니다.

- 학습 목표
  - 이미지 같은 정적 파일을 Next.js에 어떻게 추가하는지 안다.
  - 각 페이지마다 `<head>` 내부를 어떻게 커스텀하는지 안다.
  - CSS모듈로 스타일링된 재사용가능한 리액트 컴포넌트를 어떻게 만드는지 안다.
  - `pages/_app.js`에 global CSS를 어떻게 넣는지
  - Next.js를 스타일링하는 유용한 팁들

### Assets

Next.js는 최상위 `publid` 디렉터리 아래에 있는 정적 에셋을 제공할 수 있습니다. `public` 아래의 파일은 `pages`와 비슷하게 앱의 루트에서 참조할 수 있습니다.

`public` 디렉토리는 또한 구글 사이트 인증, `robots.txt`, 다른 정적 에셋에 유용합니다.

### Image

보통 HTML로 이미지를 추가할 때 `<img>` 태그를 사용합니다. 하지만 이 방법은 여러 모로 불편합니다.

- 이미지가 다른 뷰 포트에 반응하는지 확인해야함
- 서드파티 툴이나 라이브러리로 이미지를 최적화해야함
- 뷰포트에 들어왔을 때만 이미지가 로딩되게 해야함

하지만 Next.js가 제공하는 `Image` 컴포넌트는 이 모든걸 처리할 수 있습니다.

`next/image`는 모던 웹을 위해 진화된 HTML의 `<a>`의 확장판입니다.  
Next.js는 또한 기본으로 이미지 최적화를 지원합니다. 이를 통해 브라우저가 지원할 때 WebP와 같은 최신 형식으로 이미지의 리사이징, 화적화를 제공할 수 있습니다. 이 기능은 큰 이미지를 작은 화면의 기기로 전송송하는 것을 피합니다. 또한 Next.js는 미래의 이미지 형식을 자동으로 채택하고 이러한 형식을 지원하는 브라우저에 제공할 수 있습니다.

자동 이미지 최적화는 모든 이미지 자원에서 동작합니다. 심지어 CMS 같이 외부에서 호스팅된 이미지도 최적화할 수 있습니다.

### Image Component

빌드할 때 이미지를 최적화하는 대신에 Next.js는 이미지를 온디멘드로 유저가 요청을 했을 때 최적화합니다.

때문에 SSG 와 정적 전용 솔루션과 달리 10개의 이미지를 전송하던 천 개의 이미지를 전송하던 빌드 시간이 늘어나지 않습니다.

이미지는 기본적으로 lazy load됩니다. 즉, 뷰포트 외부의 이미지 때문에 페이지 속도가 저하되지 않습니다. 뷰포트로 스크롤할 때 이미지가 로딩됩니다.

이미지는 항상 구글이 검색 순위에 사용할 핵심 웹 바이탈인 cumulative layout shift를 피하는 방식으로 랜더링됩니다.

## Metadata

만약 HTML에 있는 <title> 태그 같은 페이지의 메타데이터를 수정하고 싶다면?

<title>은 HTML 태그의 <head>의 일부분입니다. 그래서 title을 수정하려면 Next.js 페이지에서 head 태그에 접근을 해야 합니다.

Next.js에서는 내장되어 있는 <Head> 컴포넌트를 사용해서 페이지의 <head>를 수정할 수 있습니다.

Head 컴포넌트는 `next/head` 모듈에서 임포트할 수 있습니다.

```js
  <Head>
    <title>First Post</title>
  </Head>
```

## Third Party JavaScript

서드파티 자바스크립트는 서드 파티 소스에서 추가된 모든 스크립트를 말합니다. 일반적으로 서드파티 스크립트는 분석, 광고 및 고객 지원 위젯과 같이 처음부터 작성할 필요가 없는 사이트에 새로운 기능을 도입하기 위해 포함합니다.

```js
<Head>
  <title>First Post</title>
</Head>
<Script
  src="https://connect.facebook.net/en_US/sdk.js"
  strategy="lazyOnload"
  onLoad={() =>
    console.log(`script loaded correctly, window.FB has been populated`)
  }
/>
```

- `strategy`: 언제 서드파티 스크립트가 로드될지 컨트롤합니다. `lazyOnload`는 Next.js에게 브라우저에게 적당한 때까지 로딩을 미루도록 지시합니다.
- `onLoad`: 스크립트 로딩이 끝난 직후에 실행할 자바스크립트 코드를 정의합니다.
