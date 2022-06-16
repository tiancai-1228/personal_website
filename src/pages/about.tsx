/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import styles from "../styles/about.module.css";
import ArrowForwardOutline from "../image/arrow-forward-outline.svg";
import MoreButtom from "../componet/moreButtom";
import Image from "next/image";
import Icons8Portfolio from "../image/icons8-portfolio.png";
import Box from "../componet/box";
import { saveAs } from "file-saver";
import { useTranslation } from "react-i18next";
const about = () => {
  const { t } = useTranslation();
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
            {t("About_about")} <span> {t("About_me")} </span>
          </h1>
        </div>
        <div className={styles.flex_box}>
          <div className={styles.person}>
            <div>
              <h2>{t("About_PERSONAL")}</h2>
              <div className={styles.person_ifo}>
                <ul>
                  <li>
                    {t("About_First_Name")}:<span> {t("About_Robby")} </span>
                  </li>
                  <li>
                    {t("About_Last_Name")}: <span>{t("About_Hong")} </span>
                  </li>
                  <li>
                    {t("About_Age")} : <span>{t("About_Years")} </span>
                  </li>

                  <li>
                    {t("About_langages")} :
                    <span>{t("About_Chinese_English")} </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    {t("About_Address")} :
                    <span>{t("About_Taoyuan_Taipei")} </span>
                  </li>
                  <li>
                    {t("About_Nationality")} : <span>{t("About_Taiwan")} </span>
                  </li>
                  <li>
                    {t("About_Phone")} : <span>0975657713</span>
                  </li>
                  <li>
                    {t("About_email")} : <span>sky0975657713@gmail.com</span>
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
          <h2>{t("About_MY_SKILLS")}</h2>
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
          <h2>{t("About_EXPERIENCE_EDUCATION")}</h2>
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
                    <h3>{t("About_EXPERIENCE_TITLE")}</h3>
                    <span className={styles.experience_detail}>
                      {t("About_EXPERIENCE_NAME")}
                    </span>
                  </div>

                  <p>{t("About_EXPERIENCE_text_1")} </p>
                  <p>{t("About_EXPERIENCE_text_2")}</p>
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
                    <h3>{t("About_EDUCATION_University")}</h3>
                    <span className={styles.experience_detail}>
                      {t("About_EDUCATION_department")}
                    </span>
                  </div>
                  <p>{t("About_EDUCATION_TEXT")} </p>
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
                    <h3>{t("About_EDUCATION_HighSchool")}</h3>
                    <span className={styles.experience_detail}>
                      {t("About_HighSchool_department")}
                    </span>
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
