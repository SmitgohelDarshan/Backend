// Write a program that parses the given URL, Print protocol, hostname, pathname, and query 
// parameters separately.
const myUrl = 'https://www.apple.com/in/macbook-air/'
const myUrl2 = 'https://www.apple.com/in/macbook-air/?name=Iphone&model=17promax'

const urlObj = new URL(myUrl)  // Create url object
const urlObj2 = new URL(myUrl2)  // Create url object


console.log('Path name', urlObj.pathname);
console.log('Protocol', urlObj.protocol);
console.log('Host name', urlObj.hostname);
console.log(urlObj);


console.log(urlObj2.searchParams);