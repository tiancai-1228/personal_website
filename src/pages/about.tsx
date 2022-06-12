import React from "react";
import styles from "../styles/about.module.css";
import ArrowForwardOutline from "../image/arrow-forward-outline.svg";
import MoreButtom from "../componet/moreButtom";

const about = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>
              ABOUT <span>ME</span>
            </h1>
          </div>
          <div>
            <div className={styles.person}>
              <div>
                <h2>PERSONAL INFOS</h2>
                <div className={styles.person_ifo}>
                  <ul>
                    <li>
                      First Name :<span> Robby</span>
                    </li>
                    <li>
                      Age : <span>23 Years</span>
                    </li>
                    <li>
                      Address : <span>Taoyuan , Taipei</span>
                    </li>
                    <li>
                      langages : <span>Chinese , English</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Last Name : <span>Hong</span>
                    </li>
                    <li>
                      Nationality : <span>Taiwan</span>
                    </li>
                    <li>
                      Phone : <span>0975657713</span>
                    </li>
                    <li>
                      email : <span>sky0975657713@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.btn}>
                <MoreButtom img={ArrowForwardOutline} text={"DOWNLOAD CV"} />
              </div>
            </div>

            <div className={styles.box}></div>
          </div>

          <div className={styles.skill}>
            <h2>MY SKILLS</h2>
            <ul>
              <li>
                <div className={styles.skill_title}>Front-end</div>
                <ul>
                  <li>HTML5 / CSS3 / RWD </li>
                  <li>JavaScript / TypeScript</li>
                  <li>React.js / Redux / Next.js</li>
                  <li>React Native</li>
                  <li>Ajax (axios)</li>
                  <li>TailwindCSS</li>
                  <li>Ant Design / Inoic</li>
                </ul>
              </li>
              <li>
                <div className={styles.skill_title}>Back-end</div>
                <ul>
                  <li>RESTful API</li>
                  <li>Node.js</li>
                  <li>Java</li>
                  <li>Spring Boot</li>
                </ul>
              </li>
              <li>
                <div className={styles.skill_title}>Other</div>
                <ul>
                  <li>NPM</li>
                  <li>Git / Github / GitLab</li>
                  <li>i18n</li>
                  <li>Docker</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.experience}>
            <h2>EXPERIENCE & EDUCATION</h2>
            <div>
              <ul>
                <li>123</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
