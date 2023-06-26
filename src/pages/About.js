import React from "react";
import styles from '../styles/about.module.css';

const About = () => {
    return(
        <section>
            <h1 className={styles.section_title}>About Us</h1>
            <p>
                22팀 팀과제<br/>
                영화 소개 웹페이지 만들기 입니다. <br/>
                Api : https://developer.themoviedb.org/
            </p>
        </section>
    )
}

export default About;