//  Create a new URL object with base, then append pathname and query, also print the final URL.
const myUrl = 'https://www.apple.com/in/macbook-air/'
const Obj = new URL(myUrl)

Obj.searchParams.append('name','Iphone')
Obj.searchParams.append('model','17promax')

console.log(Obj.toString());