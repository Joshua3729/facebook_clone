import React from "react";
import { useEffect } from "react";
import Chat_item from "../../Components/Chat_item/Chat_item";
import classes from "./MessengerPage.module.css";

const MessengerPage = () => {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  });
  return (
    <>
      <div className={classes.gutter}></div>
      <div className={classes.MessengerPage}>
        <div className={classes.chats_wrapper}>
          <div className={classes.header_wrapper}>
            <div className={classes.title}>Chats</div>
            <ul className={classes.taskbar_wrapper}>
              <li className={classes.taskbar_item}></li>
              <li className={classes.taskbar_item}></li>
              <li className={classes.taskbar_item}></li>
            </ul>
          </div>
          <form className={classes.search_form}>
            <span className={classes.search_icon_wrapper}>
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                className={classes.search_icon}
              >
                <g fill-rule="evenodd" transform="translate(-448 -544)">
                  <g fill-rule="nonzero">
                    <path
                      d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                      transform="translate(448 544)"
                    ></path>
                    <path
                      d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                      transform="translate(448 544)"
                    ></path>
                    <path
                      d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                      transform="translate(448 544)"
                    ></path>
                    <path
                      d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                      transform="translate(448 544)"
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search Messenger"
              className={classes.search_input}
            />
          </form>
          <div className={classes.messages_wrapper}>
            <Chat_item />
          </div>
        </div>
        <div className={classes.message_wrapper}>
          <div className={classes.message_header}>
            <div className={classes.user_profile}></div>
            <div className={classes.username}>Joshua Khumalo</div>
          </div>
          <div className={classes.messages_inner_wrapper}></div>
          <form className={classes.message_form}>
            <svg
              class={classes.emoji_btn}
              height="30px"
              viewBox="0 0 38 38"
              width="30px"
            >
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(-893.000000, -701.000000)">
                  <g transform="translate(709.000000, 314.000000)">
                    <g>
                      <path
                        d="M210.5,405 C209.121,405 208,403.879 208,402.5 C208,401.121 209.121,400 210.5,400 C211.879,400 213,401.121 213,402.5 C213,403.879 211.879,405 210.5,405 M212.572,411.549 C210.428,413.742 206.938,415 203,415 C199.062,415 195.572,413.742 193.428,411.549 C192.849,410.956 192.859,410.007 193.451,409.428 C194.045,408.85 194.993,408.859 195.572,409.451 C197.133,411.047 199.909,412 203,412 C206.091,412 208.867,411.047 210.428,409.451 C211.007,408.859 211.956,408.85 212.549,409.428 C213.141,410.007 213.151,410.956 212.572,411.549 M195.5,400 C196.879,400 198,401.121 198,402.5 C198,403.879 196.879,405 195.5,405 C194.121,405 193,403.879 193,402.5 C193,401.121 194.121,400 195.5,400 M203,387 C192.523,387 184,395.523 184,406 C184,416.477 192.523,425 203,425 C213.477,425 222,416.477 222,406 C222,395.523 213.477,387 203,387"
                        fill="#0084ff"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <input
              type="text"
              className={classes.message_input}
              placeholder="Aa"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default MessengerPage;
