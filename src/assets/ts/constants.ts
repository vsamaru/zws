import { Chart } from "../../types/chart";

/**
 * Base API URL to use for requests.
 */
export const apiURL = "https://zws.im/api";
/**
 * Hostnames of ZWS instances.
 * Used in addition to server-side validation to prevent shortening an already short URL.
 */
export const hostnames = ["zws.im", "zws.jonahsnider.ninja"];
/**
 * HTML elements used across the project.
 */
export const elements = {
  submitButtons: {
    shorten: document.getElementById("shorten-submit") as HTMLButtonElement,
    stats: document.getElementById("stats-submit") as HTMLButtonElement,
  },
  inputs: {
    shorten: document.getElementById("shorten-url") as HTMLInputElement,
    stats: document.getElementById("stats-url") as HTMLInputElement,
  },
  outputs: {
    shorten: document.getElementById("shorten-result") as HTMLInputElement,
    stats: document.getElementById("stats-result") as HTMLParagraphElement,
  },
  forms: {
    shorten: document.getElementById("shorten") as HTMLFormElement,
    stats: document.getElementById("stats") as HTMLFormElement,
  },
  chart: document.getElementById("chart") as HTMLDivElement,
  copyButton: document.getElementById("copy") as HTMLButtonElement,
};
export const apexCharts: Chart = {
  chart: undefined,
  options: {
    chart: {
      type: "area",
    },
    series: [
      {
        name: "Shortened",
        data: [],
      },
      { name: "Visited", data: [] },
    ],
    xaxis: {
      type: "datetime",
    },
  },
};
/**
 * DSN used to log errors to Sentry.
 */
export const sentryDSN = "https://b20352a911d94970ac616e2aea689378@o364622.ingest.sentry.io/5221891";
/**
 * The config used for Firebase.
 */
export const firebaseConfig = {"apiKey":"AIzaSyB274QGQF2McYAlFKGn5I1cQAtgoQlQiRM","authDomain":"iiilll.firebaseapp.com","databaseURL":"https://iiilll.firebaseio.com","projectId":"iiilll"}
