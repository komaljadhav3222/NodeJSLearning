

const url=require(`url`);

const StringUrl="https://www.youtube.com/watch?v=TiEDrlMTl74";
const parsedUrl=url.parse(StringUrl,true);
console.log(parsedUrl);

//getting URL components
console.log(`Protocol :- ${parsedUrl.protocol}`);
console.log(`Host :- ${parsedUrl.host}`);
console.log(`Path :- ${parsedUrl.path}`);
console.log(`Query :- ${JSON.stringify(parsedUrl.query)}`);

const formattedString =url.format({
    protocol:"https",
    host:'www.youtube.com',
    pathname:'path/to/resource',
    query:{
        param1:'value1',
        param2:'value2'
    }
})
console.log(formattedString);
