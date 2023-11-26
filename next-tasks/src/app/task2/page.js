"use client"
import { useState } from "react"
import style from "./style.module.css"

export default function Task2() {

    const [obj, setObj] = useState({})
    function fillInput(event) {
        setObj({ ...obj, [event.target.name]: event.target.value })
    }
    function doCheck() {
        if (/^[a-zA-Z-_0-9]+@[a-z]+.[a-z]{2,10}/gm.test(obj.email) || isNaN(obj.surname) || obj.pwd.length) {
            alert(false)
        }
        alert(true)
    }
    return (
        <>
            <p>2. Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.
                По клику на кнопку проверить вводимые данные на регулярные выражения. В
                случае успешной валидации – alert(true)</p>

            <div className={style.form}>

                <div>
                    <input type="text" onChange={fillInput} name = "name" placeholder="введите имя" />
                </div>

                <div>

                    <input type="text" onChange={fillInput} name = "surname"placeholder="введите фамилию" />
                </div>

                <div>
                    <input type="text" onChange={fillInput} name = "email"placeholder="введите email" />

                </div>

                <div>
                    <input type="text" onChange={fillInput} name = "pwd"placeholder="введите пароль" />
                </div>

                <button>Регистрация</button>
            </div >
        </>


    )
}