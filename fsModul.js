const fs = require('fs');
fs.writeFile('employees.json','{"name": "Employee 1 Name","salary":2000}','utf8',(err)=>{
    if(err) console.log(err);
    console.log('Basariyla olusturuldu.')
});

fs.readFile('employees.json','utf8',(err,data)=>{
    if(err) console.log(err)
    console.log(data)
    console.log("Dosya okundu...")
})

fs.appendFile('employees.json','{"name": "Employee 2 Name","salary":4000}',(err)=>{
    if(err) console.log(err)
    console.log('veri guncellendi')
});

fs.unlink('employees.json',(err)=>{
    if(err) console.log(err)
    console.log('veriler silindi')
})

