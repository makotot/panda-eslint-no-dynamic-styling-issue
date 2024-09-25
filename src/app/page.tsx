import {css} from '../../styled-system/css'

export default function Home() {
  const x = 1
  const obj = {a: [x]}
  //               ^ False positive for @pandacss/no-dynamic-styling. It is not a styling object.
  console.log(obj)

  return (
    <div className={css({padding: [4, 8]})}>
      <h1>Home</h1>
    </div>
  );
}
