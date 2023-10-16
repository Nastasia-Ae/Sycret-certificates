import React, { useState, useEffect } from 'react';
import styles from './formBlock.css';
import { useSelector, useDispatch } from "react-redux";
import { updateShowBlockPay, updateShowForm } from "../../store";
import InputMask from 'react-input-mask';


const FormBlock = () => {

    const showForm = useSelector(state => state.showForm);
    const seletedCertificate = useSelector(state => state.seletedCertificate);
    const dispatch = useDispatch();
    const [formValid, setFormValid] = useState(false);
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [telDirty, setTelDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [telError, setTelError] = useState('Обязательное поле к заполнению');
    const [emailError, setEmailError] = useState('Обязательное поле к заполнению');
    const [nameError, setNameError] = useState('Обязательное поле к заполнению');
    const [href, setHref] = useState("javascript:void");


    useEffect(() => {

        if (nameError || emailError || telError) {
            setFormValid(false)
        } else {
            setFormValid(true);
            setHref("successfully.html")
        }

    }, [nameError, emailError, telError])


    const nameHandler = (ev) => {
        setName(ev.target.value)

        if (ev.target.value.length < 1) {
            setNameError('Обязательное поле к заполнению')

        } else {
            setNameError('')
        }

    }

    const emailHandler = (ev) => {
        setEmail(ev.target.value)

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(String(ev.target.value).toLowerCase())) {
            setEmailError('Некорректный email')

        } else {
            setEmailError('')
        }

    }

    const telHandler = (ev) => {
        setTel(ev.target.value)
        if (ev.target.value.length < 16) {
            setTelError('Некорректный номер')

        } else {
            setTelError('')
        }

    }

    const blurHandler = (ev) => {
        switch (ev.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'tel':
                setTelDirty(true)
                break
        }
    }

    return (
        <section className={styles.container}>

            {showForm && (
                <form action="#" method="POST" autocomplete="on" className={styles.form}>

                    <button type="submit" className={styles.buttonBack}
                        onClick={() => {
                            dispatch(updateShowForm(false))
                            dispatch(updateShowBlockPay(true))
                        }}
                    >Назад</button>
                    <h3 className={styles.heading}>{seletedCertificate.name}</h3>

                    {(nameDirty && nameError) && <div className={styles.error}>{nameError}</div>}
                    <input type="text" name="name" id="name" placeholder="ФИО"
                        className={styles.input} onBlur={ev => blurHandler(ev)} value={name}
                        onChange={ev => nameHandler(ev)} />


                    {(telDirty && telError) && <div className={styles.error}>{telError}</div>}
                    <InputMask mask="+7 (999)-999-999" value={tel} onChange={ev => telHandler(ev)} onBlur={ev => blurHandler(ev)}>
                        {() =>
                            <input type="tel" name="tel" id="tel" placeholder="Контактный телефон"
                                className={styles.input} />}

                    </InputMask>


                    {(emailDirty && emailError) && <div className={styles.error}>{emailError}</div>}
                    <input type="email" name="email" id="email" placeholder="Почта"
                        className={styles.input}
                        onBlur={ev => blurHandler(ev)} value={email}
                        onChange={ev => emailHandler(ev)} />


                    <a href={href} className={`${styles.buttonPay} ${!formValid ? styles.disabled : styles.active}`}>
                        Перейти к оплате
                    </a>
                </form>
            )}

        </section>
    )


}


export default FormBlock
