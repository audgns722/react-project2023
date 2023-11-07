# react를 이용한 포트폴리오 사이트 만들기

## 작업 순서

1. 폴더를 만들고 리액트를 설치
2. git에 업로드
3. body 안에 : id="root" 생성
4. [lenis 사이트](https://github.com/studio-freight/lenis)

## 설치

1. react 설치 `npx create-react-app 프로젝트 이름`
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studio-freight/lenis`

## 트러블 슈팅

<details>
<summary>Whitespace 에러</summary>

<!-- summary 아래 한칸 공백 두어야함 -->

## Whitespace 에러(해결) : push 중 warning

[해결!](https://velog.io/@wnguswn7/Git-Bash-warning-in-the-working-copy-of-.gitignore-LF-will-be-replaced-by-CRLF-the-next-time-Git-touches-it)  
Git의 core.autocrlf 라는 기능을 켜서 이를 자동 변환 해주도록 하면 된다.

- `git config --global core.autocrlf true` // 시스템 전체에 적용
- `git config core.autocrlf true` // 해당 프로젝트에만 적용
</details>
