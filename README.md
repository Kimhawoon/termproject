# Term Project #

## 과제 요약 ##

주제: Blog 만들기

 => blog.js (서버 연결) <br>
 => index.html (home, 방문마다 바뀌는 사진, 사진 애니메이션, 날짜 및 시간 (Date 객체) , 서버 연결, Bootstrap, 외부폰트) <br>
 => gallery.html (갤러리, 사진 주소 외부 참조 ) <br>
 => quote.html (바뀌는 명언, api 적용 ) <br>
 

### 평가 사항 ###

**1. HTML, CSS만 사용하여 웹페이지를 구현**
 
 => index.html (flex, css 내부 참조, 애니메이션, Bootstrap) <br>
 => gallery.html (hover, grid, css 내부 참조) <br>
 => quote.html (css 내부 참조, 부모요소, 자식요소) <br>


**2. 웹 페이지 디자인**
 
 => index.html  <br>
 => gallery.html <br>
 => quote.html <br>

**3. JavaScript를 사용하여 웹페이지를 구현**

 => index.html (날짜 및 시간 구현) <br>
 => quote.html (랜덤 인용구 표현) <br>

**4. Node.js(Express)서버를 구동하여 웹페이지 구현**

 => blog.js (서버연결)
    
    app.get('/quote', function(req, res){
    res.sendfile(__dirname +'{주소}');
    });                    

   

5. DB를 연동하여 웹 페이지 구현 

 => 해당 사항 없음

6. 인증 기능 사용 여부

 => 해당 사항 없음

**7. 기타 강의 시간에 배운 내용 외의 내용**

 => unsplash에서 지원하는 서비스 적용 (사진 바뀌는 서비스) <br>
 => bootstrap에서 지원하는 서비스 적용 (목록) <br>
 => 날짜 및 시간 구현 <br>
 

## 페이지별 세부 설명 ##
1. blog.js

app.listen을 통해 localhost:8080 서버에서 index.html을 실행시키고, app.get()을 통해 다른 페이지들과 연동시킨다.

2. index.html

bootstrap을 참조하여 목록 버튼을 만든 후, 서버를 이용하여 다른 페이지들과 연동시킨다. 또한 Unsplash에서 제공하는 서비스인 변하는 이미지를 이용하여 방문 시마다 사진이 바뀌게 하고 또 다른 이미지에는 애니메이션을 적용시킨다. 다음으로 Date객체, get, document.getElementById()를 이용하여 날짜 및 시간을 구현한다.

3. gallery.html

grid를 이용하여 구역을 나눈 후, 나눈 구역에 외부 이미지 주소를 참조하여 이미지를 나타낸다. 이후 hover, opacity 등 속성을 이용하여 변화를 준다.

4. quote.html

외부 랜덤 명언 api를 참조하여 이를 함수 startQuote()에서 word 변수에 받은 후 json 형태로 변환하여 document.getElementById().innerHTML에서 파라미터 변수로 바꾸어 id="quote"에 저장하여 이를 div에서 표현한다. 또한 catch(function(err)) 함수를 이용하여 오류를 나타나게 한다.

## 비고 및 고찰 ##

1. 아는 만큼 보인다는 말이 있듯이, 공부한 만큼 이해할 수 있다. 바꿔말하자면, 공부를 하지 않으면 이해할 수 없다. 따라서 스스로 공부하는 태도가 반드시 필요하다.

2. 직접 코드를 하나부터 열까지 전부 작성하는 데는 무리가 있어서, 다른 자료들을 참고하면서 코딩을 작성했는데, 하면 할수록 전에는 이해가 안되었던 구조들이 이해가 되었고 새로운 내용도 배울 수 있었다.

3. 코딩의 생산성을 높이기 위해 기존에 존재하는 코딩을 이용하는 것도 좋은 방법이다.