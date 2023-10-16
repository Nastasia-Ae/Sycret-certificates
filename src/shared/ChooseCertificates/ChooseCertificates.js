import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './chooseCertificates.css';
import { useSelector, useDispatch } from "react-redux";
import { updateShowBlockPay, setSeletedCertificate, updateShowForm } from "../../store";


const ChooseCertificates = () => {

    const showBlockPay = useSelector(state => state.showBlockPay);
    const seletedCertificate = useSelector(state => state.seletedCertificate);
    const dispatch = useDispatch();


    const [certificatesData, setСertificatesData] = useState([]);

    useEffect(() => {

        const apiURL = "https://sycret.ru/service/api/api?MethodName=OSGetGoodList&ismob=0&ApiKey=011ba11bdcad4fa396660c2ec447ef14";

        async function load() {

            try {

                const response = await axios.get(apiURL, {});
                setСertificatesData(response.data.data);


            } catch (error) {
                console.log(error);
            }
        }

        load()



    }, [])



    return (
        <section className={styles.container}>

            <select className={styles.select} required name="" id="selectCustom">
                <option value=''>Выберите сертификат</option>

                {certificatesData.map((item) => {
                    return (
                        <option key={item.ID} value={item.NAME} onClick={() => {
                            dispatch(updateShowBlockPay(true))
                            dispatch(setSeletedCertificate({ name: item.NAME, summa: item.SUMMA, id: item.ID }))

                        }}>
                            {item.NAME}
                        </option >
                    )
                })}

            </select>

            {showBlockPay && (
                <div className={styles.containerPay}>
                    <p className={styles.price}>Цена - <span className={styles.sum}>{seletedCertificate.summa}</span></p>
                    <button className={styles.button} onClick={() => {
                        dispatch(updateShowBlockPay(false))
                        dispatch(updateShowForm(true))
                    }
                    }>Купить</button>

                </div>
            )

            }

        </section>
    )

}


export default ChooseCertificates
