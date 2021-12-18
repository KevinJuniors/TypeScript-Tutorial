// 변수 및 상수에 Type 지정
// "Name" 상수의 Type을 문자에 한하여 입력 받겠음
var Name :string = "홍길동"

// "NameArray" 배열에 문자 타입만 입력 받겠음
let nameArray:string[] = ["홍길동", "고길동", "김길동"];

var localObject :{local: string} = {local: "서울"}

const Numbers:number[] = [1980, 1990, 2000, 2010, 2020]

// 함수에 Type 지정
function numbersFunction (n:number) {
    return n * 10
}

// Boolean Type 지정
type Members = [number, boolean];
let john:Members  = [123, false];

class User {
    name :string = "고길동";
    constructor(name :string) {
        this.name = name;
    }
}