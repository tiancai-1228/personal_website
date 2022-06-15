import React from "react";
import styles from "../styles/about.module.css";
import ArrowForwardOutline from "../image/arrow-forward-outline.svg";
import MoreButtom from "../componet/moreButtom";
import Image from "next/image";
import Icons8Portfolio from "../image/icons8-portfolio.png";
import Box from "../componet/box";
import { saveAs } from "file-saver";

const about = () => {
  const saveFile = () => {
    saveAs(
      "https://www.cakeresume.com/pdf/s--ZlxUgAxvYYGQt7FXR3kPUw--/MMOEx.pdf",
      "Robby.pdf"
    );
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            ABOUT <span>ME</span>
          </h1>
        </div>
        <div className={styles.flex_box}>
          <div className={styles.person}>
            <div>
              <h2>PERSONAL INFOS</h2>
              <div className={styles.person_ifo}>
                <ul>
                  <li>
                    First Name :<span> Robby</span>
                  </li>
                  <li>
                    Last Name : <span>Hong</span>
                  </li>
                  <li>
                    Age : <span>23 Years</span>
                  </li>

                  <li>
                    langages : <span>Chinese , English</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    Address : <span>Taoyuan , Taipei</span>
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
              <MoreButtom
                img={ArrowForwardOutline}
                text={"DOWNLOAD CV"}
                onClick={() => {
                  saveFile();
                }}
              />
            </div>
          </div>

          <div className={styles.box}>
            <Box />
          </div>
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
                <li>Express.js</li>
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
          <div className={styles.flex}>
            <ul>
              <li>
                <div className={styles.icon}>
                  <Image
                    src={Icons8Portfolio}
                    height={20}
                    width={20}
                    alt={"PORTFOLIO"}
                  ></Image>
                </div>
                <div className={styles.experience_content}>
                  <span className={styles.experience_year}>2021 ~ PRESENT</span>
                  <div className={styles.experience_flex}>
                    <h3>Frontend Developer</h3>
                    <span className={styles.experience_detail}>
                      - Shoalter Technology
                    </span>
                  </div>

                  <p>
                    - 與 PM 和 UX/UI
                    溝通來完成電商業⾯與後台CMS⾴⾯開發需求和⽬標功能
                  </p>
                  <p>- 與後端⼈員溝通合作來完成CMS後台⾴⾯開發與串接API</p>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div className={styles.icon}>
                  <Image
                    src={Icons8Portfolio}
                    height={20}
                    width={20}
                    alt={"PORTFOLIO"}
                  ></Image>
                </div>
                <div className={styles.experience_content}>
                  <span className={styles.experience_year}>2017 ~ 2021</span>
                  <div className={styles.experience_flex}>
                    <h3>國立勤益科技大學</h3>
                    <span className={styles.experience_detail}>
                      - 資訊工程學系
                    </span>
                  </div>
                  <p>
                    大學期間有參加系學會參與各個活動，由於參加許多活動與系學會讓我學會規劃一個企劃分配工作等等，
                    以及與工作夥伴溝通還有臨機應變重要性。
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.icon}>
                  <Image
                    src={Icons8Portfolio}
                    height={20}
                    width={20}
                    alt={"PORTFOLIO"}
                  ></Image>
                </div>
                <div className={styles.experience_content}>
                  <span className={styles.experience_year}>2014 ~ 2017</span>
                  <div className={styles.experience_flex}>
                    <h3>桃園新興高中</h3>
                    <span className={styles.experience_detail}>- 資訊科</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
