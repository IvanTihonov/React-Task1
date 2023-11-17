import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export const App = () => {
    // императивный стиль идет до вывода текущего года. Вывод текущего года произведен в декларативном стиле
    return /*#__PURE__*/ createElement(
      "div",
      {
        className: "App"
      },
      /*#__PURE__*/ createElement(
        "header",
        {
          className: "App-header"
        },
        /*#__PURE__*/ createElement("img", {
          src: logo,
          className: "App-logo",
          alt: "logo"
        }),
        /*#__PURE__*/ createElement(
          "p",
          null,
          "Edit ",
          /*#__PURE__*/ createElement("code", null, "src/App.js"),
          " and save to reload."
        ),
        /*#__PURE__*/ createElement(
          "a",
          {
            className: "App-link",
            href: "https://reactjs.org",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          "Learn React"
        ),
        /*#__PURE__*/ createElement("p", null, new Date().getFullYear())
      )
    );
  };
