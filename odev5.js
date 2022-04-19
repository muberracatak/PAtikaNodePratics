const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === '/')
    {
        res.writeHead(200,{ 'Content-Type':'text/html'})
        res.write('<h2>Hoşgeldinizæ</h2>');
    }
    else if(url=== '/hakkimda')
    {
        res.writeHead(200,{ 'Content-Type':'text/html'})
        res.write('<h2>Hakkimda Sayfasi</h2>');
    }
    else if(url=== '/iletisim',{ 'Content-Type':'text/html'})
    {
        res.writeHead(200,{ 'Content-Type':'text/html'})
        res.write('<h2>Iletisim Sayfasi</h2>');
    }
    else if(url=== '/index',{ 'Content-Type':'text/html'})
    {
        res.writeHead(200,{ 'Content-Type':'text/html'})
        res.write('<h2>index Sayfasi</h2>');
    }
    else
    {
        res.writeHead(404,{ 'Content-Type':'text/html'})
        res.write('<h2>404 SAYFA BULUNAMADİ</h2>');
    }
    res.end()
});

const port = 5000;
server.listen(port,()=>{
    console.log(`Sunucu ${port} da çalışmaya başladı`)
})

