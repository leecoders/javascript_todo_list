## 알게된 내용

### CSS) `overflow-x`, `overflow-y` 속성을 통해 가로, 세로에 대해 따로 처리할 수 있다.

### CSS) `min-width`, `min-height` 속성을 통해 동적으로 변하는(예를 들어 textarea)에 대해 최소 크기를 지정할 수 있다.

### CSS) drag & drop 구현 시 원래 위치의 element의 왼쪽 상단 자리에 복사하기
- `getBoundingClientRect().x`와 `getBoundingClientRect().y`를 통해 절대 좌표를 구할 수 있다.
- 새로 복사하려는 element 또한 왼쪽 상단을 기준으로 만들어진다.
- 여기서 주의해야 할 점은 element에 `margin`이 있을 때, 기준 좌표를 기준으로 `margin`이 먹는다.
  - `margin` 만큼 보정하던지 `margin`을 빼던지 하면 된다.

### HTML, CSS) 폰트를 CSS에만 추가한다고 되는 것이 아니다.
- [구글 웹 폰트](https://fonts.google.com/)에서 HTML 헤더에 CDN으로 추가해야 CSS에서 적용할 수 있다.
- 로컬에는 캐시로 폰트가 남아서 적용되는 것일 뿐!

### JS) 유사 배열에 배열 메서드 사용하기
- `DOM` 배열은 진짜 배열이 아닌 유사 배열 객체!
- `call` 메서드를 통해 첫 번째 인자로 `유사 배열`을 전달, 두 번째 인자부터 사용하려는 배열 메서드와 같은 형태를 주면 된다.
```javascript
Array.prototype.forEach.call(
    document.querySelectorAll(".todo-wrapper"),
    todo => {
        console.log(todo);
    }
);
```
```javascript
[].forEach.call(
    document.querySelectorAll(".todo-wrapper"),
    todo => {
        console.log(todo);
    }
);
```
- `Array.prototype` 대신 빈 배열 `[]`을 사용할 수 있다.

### `nextSibling`은 공백이나 줄바꿈도 하나의 노드로 인식하기 때문에 이벤트객체와 타겟객체 사이를 이어서 표현해 주어야 한다.
- 아니면 `nextSibling.nextSibling` 으로 표현하면 제대로 객체를 반환한다. 
- 따라서 `nextElementSibling`을 사용하는 것이 좋다.
[참고](https://iamawebdeveloper.tistory.com/58)