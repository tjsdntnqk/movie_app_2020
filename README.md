# Movie App 2020

React JS Fundamentals Course 2020

11월 13일
01. 메뉴를 클릭하면 화면이 이동해야
하는데, 이때 필요한 것이 라우터이다. 
• 라우터는 react-router-dom패키지를
이용하면 된다. 

02. 라우터는 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러주는 역할을 한다. 
• 예를 들어 사용자가 localhost:3000/home이라고 입력하면 Home 컴포넌트를 ~/about 이라고 입력하면 About 컴포넌트를 불러주게 된다.

10월 16일
01. constructor() 함수
02. componentDidMount() 함수 

10월 30일
01. YTS의 endpoint/list_movies.json을 사용하려면
yts‐proxy.now.sh에 /list_movies.json을 붙이면 된다. 
02. 로딩이 끝나면 setState의 isLoading을 false로 강제로 바꿔준다.
03. Movie.js 
PropTypes from 'prop-types' ≠ Movie.propTypes(객체)