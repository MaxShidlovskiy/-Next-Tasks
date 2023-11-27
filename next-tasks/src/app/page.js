import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Задачи:</h1>
      <p><Link href ='/task1'>Задача №1</Link></p>
      <p><Link href ='/task2'>Задача №2</Link></p>
      <p><Link href ='/task3'>Задача №3</Link></p>
      <p><Link href ='/task4'>Задача №4</Link></p>
      <p><Link href ='/task5'>Задача №5</Link></p>
      <p><Link href ='/task6'>Задача №6</Link></p>
      <p><Link href ='/task7'>Задача №7</Link></p>
    </>
  )
}
