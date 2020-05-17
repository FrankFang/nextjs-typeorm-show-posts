import png from 'assets/images/1.png'

console.log(png)
export default function Index() {
  return (
    <div>
      <h1>标题1</h1>
      <p>段落</p>
      <img src={png} alt=""/>
    </div>
  )
}
