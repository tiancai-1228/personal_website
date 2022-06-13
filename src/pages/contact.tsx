import React from "react";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import MailOutline from "../image/mail-outline.png";
import Icons8Phone50 from "../image/icons8-phone-50.png";
import Icons8Github from "../image/icons8-github.svg";
import Icons8Instagram from "../image/icons8-instagram.svg";
import Icons8LinkedinCircled from "../image/icons8-linkedin-circled.svg";
import ArrowForwardOutline from "../image/arrow-forward-outline.svg";
import MoreButtom from "../componet/moreButtom";

const contact = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            CONTACT <span>ME</span>
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Hi there I m Robby</h3>
            <p>
              Feel free to get in touch with me. Any questions or suggestions
              welcome to contact me
            </p>
            <div className={styles.contact}>
              <ul>
                <li>
                  <span className={styles.Icon}>
                    <Image
                      src={MailOutline}
                      height={30}
                      width={30}
                      alt={"mail"}
                    ></Image>
                  </span>
                  <div>
                    <p>MAIL ME</p>
                    <span>sky0975657713@gmail.com</span>
                  </div>
                </li>
                <li>
                  <span className={styles.Icon}>
                    <Image
                      src={Icons8Phone50}
                      height={30}
                      width={30}
                      alt={"phone"}
                    ></Image>
                  </span>
                  <div>
                    <p>CALL ME</p>
                    <span>0975657713</span>
                  </div>
                </li>
              </ul>
              <ul className={styles.social}>
                <li>
                  <a
                    className={styles.socialIcon}
                    target="_blank"
                    href={`https://github.com/tiancai-1228`}
                    rel="noreferrer"
                  >
                    <Image
                      src={Icons8Github}
                      height={30}
                      width={30}
                      alt={"LogoGithub"}
                    ></Image>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.socialIcon}
                    target="_blank"
                    href={`https://www.instagram.com/tiancai_1228/`}
                    rel="noreferrer"
                  >
                    <Image
                      src={Icons8Instagram}
                      height={30}
                      width={30}
                      alt={"LogoInstagram"}
                    ></Image>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.socialIcon}
                    target="_blank"
                    href={`https://www.linkedin.com/in/%E5%A4%A9%E8%B2%A1-%E6%B4%AA-08b078217/`}
                    rel="noreferrer"
                  >
                    <Image
                      src={Icons8LinkedinCircled}
                      height={30}
                      width={30}
                      alt={"LogoLinkedin"}
                    ></Image>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.sentEmail}>
            <div className={styles.data}>
              <input
                type="text"
                className={styles.name}
                placeholder={"YOURE NAME"}
              ></input>
              <input
                type="email"
                className={styles.email}
                placeholder={"YOURE EMAIL"}
              ></input>
            </div>
            <input
              type="text"
              className={styles.subject}
              placeholder={"YOURE SUBJECT"}
            ></input>
            <textarea
              rows={4}
              placeholder={"YOURE MESSAGE"}
              className={styles.textarea}
            ></textarea>
            <div className={styles.sub}>
              <div className={styles.moreBtn}>
                <MoreButtom img={ArrowForwardOutline} text={"SEND MESSAGE"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
