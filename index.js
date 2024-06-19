const express=require('express'); //익스프레스 패키지 불러오기
const cors=require('cors');
const app=express();  // 서버 역할을 할 앱 생성하기
const port=3000;  // 서버가 요청받을 포트 : 3000

// app.get('/',(req,res) => {
//     res.send('Helllo,World!');
// });
// app.get('/dog',(req,res) => {
//     res.json({'sound' : '멍멍'});
// });
// app.get('/cat',(req,res) => {
//     res.json({'sound' : '야옹'});
// });

app.use(cors());

app.get('/sound/:name', (req,res) => {
    const {name} = req.params;

    if (name == "dog") {
        res.json({'sound':'멍멍'});
    } else if (name == "cat") {
        res.json({'sound':'야옹'});
    } else if (name == "pig") {
        res.json({'sound':'꿀꿀'});
    } else {
        res.json({'sound':'알 수 없음'});
    };
});

// 설정한 포트 번호로 요청받기
app.listen(port, () => {
    // 콘솔에 메시지 띄워 서버의 실행상태 표시
    console.log('Example app listening on port ${port}');
});  