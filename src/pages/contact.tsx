/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import MailOutline from "../image/mail-outline.png";
import Icons8Phone50 from "../image/icons8-phone-50.png";
import Icons8Github from "../image/icons8-github.svg";
import Icons8Instagram from "../image/icons8-instagram.svg";
import Icons8LinkedinCircled from "../image/icons8-linkedin-circled.svg";
import ArrowForwardOutline from "../image/arrow-forward-outline.svg";
import MoreButtom from "../componet/moreButtom";
import { useTranslation } from "react-i18next";

interface emailProp {
  name: string | null;
  email: string | null;
  subject: string | null;
  message: string | null;
}
const contact = () => {
  const { t } = useTranslation();
  const [emailData, setEmailData] = useState<emailProp>({
    name: null,
    email: null,
    subject: null,
    message: null,
  });

  const inputName: any = useRef("");
  const inputEmail: any = useRef("");
  const inputSubject: any = useRef("");
  const inputMessage: any = useRef("");

  const sendEmail = (data: emailProp) => {
    const { name, email, subject, message } = data;

    if (name && email && subject && message) {
      emailjs
        .send(
          `${process.env.SERVICE_ID}`,
          `${process.env.templateID}`,
          {
            name: name,
            email: email,
            subject: subject,
            message: message,
          },
          `${process.env.publicKey}`
        )
        .then(
          (result) => {
            alert("sendEmail success");
          },
          (error) => {
            console.log(error);
            alert("sendEmail false");
          }
        );
      inputName.current.value = "";
      inputEmail.current.value = "";
      inputSubject.current.value = "";
      inputMessage.current.value = "";
      setEmailData({
        name: null,
        email: null,
        subject: null,
        message: null,
      });
    } else {
      setEmailData({
        name: name,
        email: email,
        subject: subject,
        message: message,
      });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            {t("CONTACT_CONTACT")} <span> {t("CONTACT_ME")} </span>
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>{t("CONTACT_title")}</h3>
            <p>{t("CONTACT_text")}</p>
            <div className={styles.contact}>
              <ul>
                <li>
                  <span className={styles.Icon}>
                    <Image
                      src={MailOutline}
                      height={30}
                      width={30}
                      alt={"email"}
                    ></Image>
                  </span>
                  <div>
                    <p>{t("CONTACT_email")}</p>
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
                    <p>{t("CONTACT_call")}</p>
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
              <div className={styles.inputBox}>
                <input
                  type="text"
                  className={styles.name}
                  placeholder={t("Email_name")}
                  ref={inputName}
                ></input>
                {emailData.name === "" && (
                  <p className={styles.errorMessage}>
                    {t("CONTACT_required_name")}
                  </p>
                )}
              </div>
              <div className={styles.inputBox}>
                <input
                  type="email"
                  className={styles.email}
                  placeholder={t("Email_EMAIL")}
                  ref={inputEmail}
                ></input>
                {emailData.email === "" && (
                  <p className={styles.errorMessage}>
                    {t("CONTACT_required_Email")}
                  </p>
                )}
              </div>
            </div>
            <div className={styles.inputBox}>
              <input
                type="text"
                className={styles.subject}
                placeholder={t("Email_SUBJECT")}
                ref={inputSubject}
              ></input>
              {emailData.subject === "" && (
                <p className={styles.errorMessage}>
                  {t("CONTACT_required_Subject")}
                </p>
              )}
            </div>
            <div className={styles.inputBox}>
              <textarea
                rows={4}
                placeholder={t("Email_MESSAGE")}
                className={styles.textarea}
                ref={inputMessage}
              ></textarea>
              {emailData.message === "" && (
                <p className={styles.errorMessage}>
                  {t("CONTACT_required_Message")}
                </p>
              )}
            </div>

            <div className={styles.sub}>
              <div className={styles.moreBtn}>
                <MoreButtom
                  img={ArrowForwardOutline}
                  text={t("CONTACT_SEND")}
                  onClick={() => {
                    sendEmail({
                      name: inputName.current.value,
                      email: inputEmail.current.value,
                      subject: inputSubject.current.value,
                      message: inputMessage.current.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
