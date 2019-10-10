# 멤버십 프로젝트 - 웹할일관리 저장소

## 배포

### [로그인 페이지](http://106.10.34.142:3000/signin)

- 계정
  - ID : admin / PW : admin
  - ID : normal / PW : normal

### [투두 페이지] : http://106.10.34.142:3000/todo/ + `유저 아이디`

- 쿠키 권한 없으면 접근 불가
- admin은 모든 사용자 페이지 접근 가능
- 회원가입 기능 없음 -> board 가진 사용자는 admin, normal 밖에 없음
  - board 없으면 기능 사용 불가

### [관리자 페이지](http://106.10.34.142:3000/admin)

## DB

### DB EER

![DB_EER]("https://user-images.githubusercontent.com/47619140/66574773-c0ebe500-ebaf-11e9-9652-01c3c748885e.png)

## 보드 ,리스트, 카드 데이터 객체화 시나리오

### 가져오기

1. USER_ID에 대한 BOARD 다 가져오기(지금은 1개) -> 하나씩 순회
2. 1번에서 가져온 `BOARD_ID = LIST_BELONG_BOARD`인 LIST_ID 다 가져오기
3. 2번에서 가져온 `LIST_ID = TODO_BELONG_LIST`인 TODO_ID 다 가져오기
4. 1, 2, 3번에서 가져온 데이터 BOARD 기준으로 객체로 묶기

### 보드 데이터 객체 구조

```javascript
const boards = [
    board {
        id : "board_id",
        name : "board_name",
        writable : "board_write_permission",
        readable : "board_read_permission",
        lists : [
            list {
                id : "list_id",
                name : "list_name",
                todos : [
                    todo {
                        id : "todo",
                        order : "todo_order_in_list",
                        content : "todo_content",
                        addedBy : "user_id"
                    },
                    ...
                ]
            },
            ...
        ]
    },
    ...
]
```
