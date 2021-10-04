# NodeBird(NextJS)

개발환경 세팅

- nodeJS, npm 설치
- npm init
- npm i next react react-dom
- package.json 의 script : { dev : next } 변경

주의할점

- pages 폴더안에 파일들을 `코드 스프릿팅된` 개별적인 페이지 `컴포넌트`로 만들어준다.( 반드시 폴더이름이 `pages`여야 한다)
- pages — about — hyewon.js

  `[localhost:3000/about/hyewon](http://localhost:3000/about/hyewon)` 입력시 hyewon.js 파일의 리턴값이 보여진다.

TIP

1. Link Tag

   <Link target="__blank" rel="noreferrer noopener" />

   - target이 \_\_blank일 경우, 보완적인 문제 때문에 rel에 noreferrer noopener를 꼭 적어준다.

2. useCallBack(함수를 캐싱)

   component에 props로 넘겨주는 경우에는 무조건 useCallBack을 씌워준다. → 최적화 위해서

3. useMemo (값을 캐싱)

   ex) style을 객체로 jsx에 props로 전달하는 경우 사용

   const style = useMemo(() ⇒ ( { marginTop: 10 } ),[]);

   <Tag style={ style }/>

4. rerendering → return 부분중 달라진 부분만! 다시 그려준다 ( return 해주는 부분을 virture DOM이라고 할 수 있다)
