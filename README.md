# react를 이용한 포트폴리오 사이트 만들기

1. React: React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리로, 웹 애플리케이션을 구축할 때 매우 인기 있는 선택 중 하나입니다. React를 사용하면 UI를 컴포넌트로 나누고, 상태 관리를 용이하게 할 수 있습니다.

2. 컴포넌트: React 앱은 컴포넌트로 구성됩니다. 컴포넌트는 UI 요소를 나타내며, 각각의 컴포넌트는 자체적인 상태와 동작을 가집니다. 예를 들어, 프로젝트 카드, 메뉴 바, 또는 페이지 푸터가 각각 하나의 컴포넌트가 될 수 있습니다.

3. JSX: JSX는 JavaScript의 확장 문법으로, React 컴포넌트에서 UI를 정의하는 데 사용됩니다. HTML과 유사하게 생겼지만 JavaScript로 컴파일됩니다.

4. 상태 관리: React 앱에서 컴포넌트의 상태를 관리하기 위해 useState 훅이나 Redux와 같은 상태 관리 라이브러리를 사용할 수 있습니다. 이를 통해 데이터의 변경에 따라 UI를 업데이트할 수 있습니다.

5. 라우팅: 포트폴리오 사이트에서 여러 페이지 간의 네비게이션을 관리하기 위해 라우팅 라이브러리, 예를 들어 react-router,를 사용할 수 있습니다.

6. 스타일링: CSS를 사용하여 컴포넌트를 디자인하고 스타일을 적용합니다. 또한, CSS 전처리기(예: SASS, LESS)나 CSS-in-JS 라이브러리(예: styled-components)를 사용하여 스타일링을 더 효율적으로 관리할 수 있습니다.

7. 데이터 표시: 포트폴리오 사이트에서 프로젝트 정보, 이미지, 설명 등을 데이터베이스에서 가져와 UI에 표시합니다. 이를 위해 API 호출이나 데이터베이스 연동이 필요할 수 있습니다.

8. 배포: 완성된 포트폴리오 사이트를 인터넷 상에 공개하기 위해 웹 호스팅 서비스(예: Netlify, Vercel)를 사용하여 배포합니다.

## 작업 순서

1. 폴더를 만들고 리액트를 설치
2. git에 업로드
3. body 안에 : id="root" 생성
4. lenis [사이트📎](https://github.com/studio-freight/lenis){:target="\_blank"}
5. Firebase [호스팅📎](https://hoons-react-project-aaa3b.web.app/){:target="\_blank"}

## 설치

1. react 설치 `npx create-react-app 프로젝트 이름`
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studio-freight/lenis`
5. react-router-dom 설치 `npm i react-router-dom`

## firebase 호스팅 방법

1. build 진행 `npm run build`
2. Firebase 설치 `npm install firebase`
3. 로그인 `firebase login`
4. Allow Firebase to collect CLI and Emulator Suite usage and error reporting information? <span style="color : #000; background-color:#DCFFE4"> **yes** </span>
5. Firebase 프로젝트 설정`firebase init`
6. Are you ready to proceed? <span style="color : #000;background-color:#DCFFE4"> **yes** </span>
7. What do you want to use as your public directory? <span style="color : #000; background-color:#DCFFE4"> **build** </span>
8. Configure as a single-page app (rewrite all urls to /index.html)? <span style="color : #000; background-color:#DCFFE4"> **No** </span>
9. Set up automatic builds and deploys with GitHub? <span style="color : #000; background-color:#DCFFE4"> **No** </span>
10. File build/index.html already exists. Overwrite? <span style="color : #000; background-color:#DCFFE4"> **No** </span>

### GSAP

#### -GSAP (GreenSock Animation Platform)은 웹 애니메이션을 만들기 위한 강력하고 유연한 JavaScript 라이브러리입니다.

1. 풍부한 애니메이션 제어: GSAP은 다양한 애니메이션 속성 및 타임라인을 사용하여 요소의 동적인 애니메이션을 생성하고 제어할 수 있습니다.
2. 크로스 브라우저 호환성: GSAP은 모든 주요 브라우저에서 일관된 애니메이션 경험을 제공하며, 브라우저 호환성 문제를 자동으로 처리합니다.
3. 직관적인 구문: GSAP은 직관적이고 간결한 JavaScript 문법을 사용하여 애니메이션을 정의하므로 개발자가 빠르게 익히고 사용할 수 있습니다.
4. 높은 성능: GSAP은 최적화된 애니메이션 엔진을 사용하여 부드럽고 효율적인 애니메이션을 제공하며, 성능에 민감한 웹 애플리케이션에서도 우수한 결과를 보여줍니다.
5. 확장성과 커뮤니티: GSAP은 풍부한 플러그인 생태계와 활발한 개발자 커뮤니티를 지원하며, 다양한 기능을 확장하고 커스터마이징할 수 있습니다.

#### -REACT에서 GSAP를 사용할때 주의해야할점

1. useEffect 내에서 GSAP 초기화: GSAP 애니메이션을 초기화하고 트리거하는 코드를 useEffect 내에서 실행했습니다. 이것은 컴포넌트가 마운트된 후에 GSAP가 초기화되도록 보장합니다.
2. 요소 레퍼런스 및 애니메이션: GSAP에서 요소 레퍼런스와 애니메이션을 연결하는 방식으로 useRef를 사용하고, 배열에 요소 레퍼런스를 저장하는 방식으로 각 섹션 요소를 관리하고 애니메이션을 적용했습니다.
3. 애니메이션 해제: 컴포넌트가 언마운트될 때 GSAP 애니메이션을 정리하려고 return 블록 내에 scrollTween.kill();를 사용하였습니다. 이것은 메모리 누수를 방지하고 애니메이션을 안전하게 해제하는데 도움이 됩니다.
4. GSAP 플러그인 초기화: GSAP 플러그인인 ScrollTrigger를 gsap.registerPlugin(ScrollTrigger);를 사용하여 초기화했습니다.
5. 퍼포먼스 최적화: "scrub" 및 "invalidateOnRefresh"와 같은 ScrollTrigger 옵션을 사용하여 애니메이션의 퍼포먼스를 최적화했습니다.

### lenis의 특징

- 경량(~3KB), 빠른 스크롤을 지원하는 오픈소스
- 메인쓰레드에서 스크롤 실행, 접근성 지원
- 네이티브 스크롤바 이용
- 다른 애니메이션 라이브러리들과 잘 연동
- Horizontal/Vertical 스크롤
- Position:Sticky 이용 가능

## 트러블 슈팅

<details>
<summary>Whitespace 에러</summary>

<!-- summary 아래 한칸 공백 두어야함 -->

## Whitespace 에러(해결) : push 중 warning

[해결!](https://velog.io/@wnguswn7/Git-Bash-warning-in-the-working-copy-of-.gitignore-LF-will-be-replaced-by-CRLF-the-next-time-Git-touches-it){:target="\_blank"}  
Git의 core.autocrlf 라는 기능을 켜서 이를 자동 변환 해주도록 하면 된다.

- `git config --global core.autocrlf true` // 시스템 전체에 적용
- `git config core.autocrlf true` // 해당 프로젝트에만 적용
</details>
