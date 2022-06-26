## 1 Create a file and data into it 

```javascript
const fs = require ("fs");

fs.writeFile("Newfile.txt","sample data" ,(err) =>{
console.log("created");});

```

## 2 To append changes 

```javascript
fs.appendFiles("Newfile.txt","sample data changed" ,(err) =>{
console.log("appended");});

```

## 3 To read file

```javascript
fs.readFile("Newfile.txt",'utf-8',(err,data) =>{
console.log(data);});

```

## 4 To delete a file

```javascript
fs.unlink("Newfile.txt",(err) =>{
console.log("delted");});

```