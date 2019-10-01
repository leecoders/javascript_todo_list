# 마스터 클래스

## DAY1

### field, record, table

### table은 객체 단위

### table이 여러 개 필요한 이유?
- 테이블이 커질 수록 데이터의 중복이 많아짐

### 이상 현상(anomaly)

### 정규화
- 이상 현상을 막기 위해 하는 것

### 역정규화

### JOIN은 별다른 알고리즘이 없다면 O(N*M)의 시간이 걸린다.

### Index와 효과적인 탐색
- Primary Key, Foreign Key 컬럼에는 기본적으로 Index가 자동으로 생성된다.
- Index가 있을 컬럼의 경우 O(log n) 으로 탐색 가능
- Index가 없는 컬럼은 O(n) 시간 소요